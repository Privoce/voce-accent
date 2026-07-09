/* Pre-generates MP3 clips for every playable text in js/data.js.
   Output: audio/<voice>/<hash>.mp3 + audio/manifest.json
   Run: node scripts/generate-audio.mjs [female|male|all] */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { KokoroTTS } from "kokoro-js";
import lamejs from "@breezystack/lamejs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const VOICES = { female: "af_heart", male: "am_michael" };
const which = process.argv[2] || "all";
const voiceKeys = which === "all" ? Object.keys(VOICES) : [which];

/* ---- load course data (browser globals) ---- */
const dataSrc = readFileSync(join(ROOT, "js/data.js"), "utf8");
const { LESSONS } = new Function(`${dataSrc}; return { MODULES, LESSONS };`)();

/* ---- collect every data-say text, mirroring js/lesson.js ---- */
const texts = new Set();
for (const lesson of LESSONS) {
  for (const s of lesson.sections) {
    switch (s.type) {
      case "words":
        s.items.forEach((w) => texts.add(w.w));
        break;
      case "sentences":
        s.items.forEach((it) => texts.add(it.t));
        break;
      case "phrases":
        s.items.forEach((it) => texts.add(s.phonetic ? it.p : `${it.p}. ${it.s}`));
        break;
      case "pairs":
        s.rows.forEach((r) => {
          texts.add(r[0]);
          texts.add(r[1]);
        });
        break;
      case "patterns":
        s.items.forEach((p) => texts.add(p.ex));
        break;
      case "dialogue":
        s.lines.forEach((l) => texts.add(l.text));
        break;
    }
  }
}
const all = [...texts];
console.log(`${all.length} unique texts × ${voiceKeys.length} voice(s)`);

/* ---- same hash as js/tts.js (FNV-1a 32-bit) ---- */
function fnv(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, "0");
}

/* ---- float32 pcm -> 48 kbps mono mp3 ---- */
function toMp3(f32, sampleRate) {
  const pcm = new Int16Array(f32.length);
  for (let i = 0; i < f32.length; i++) {
    const v = Math.max(-1, Math.min(1, f32[i]));
    pcm[i] = v < 0 ? v * 0x8000 : v * 0x7fff;
  }
  const enc = new lamejs.Mp3Encoder(1, sampleRate, 48);
  const chunks = [];
  const BLOCK = 1152;
  for (let i = 0; i < pcm.length; i += BLOCK) {
    const out = enc.encodeBuffer(pcm.subarray(i, i + BLOCK));
    if (out.length) chunks.push(Buffer.from(out));
  }
  const end = enc.flush();
  if (end.length) chunks.push(Buffer.from(end));
  return Buffer.concat(chunks);
}

/* ---- generate ---- */
console.log("Loading Kokoro model…");
const tts = await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX", {
  dtype: "q8",
  device: "cpu",
});

const manifestPath = join(ROOT, "audio/manifest.json");
const manifest = existsSync(manifestPath)
  ? JSON.parse(readFileSync(manifestPath, "utf8"))
  : { voices: {} };

const t0 = Date.now();
for (const key of voiceKeys) {
  const outDir = join(ROOT, "audio", key);
  mkdirSync(outDir, { recursive: true });
  const done = new Set(manifest.voices[key] || []);
  let n = 0;

  for (const text of all) {
    const hash = fnv(text);
    n++;
    const file = join(outDir, `${hash}.mp3`);
    if (done.has(hash) && existsSync(file)) continue;

    const audio = await tts.generate(text, { voice: VOICES[key] });
    writeFileSync(file, toMp3(audio.audio, audio.sampling_rate));
    done.add(hash);

    if (n % 25 === 0) {
      manifest.voices[key] = [...done];
      writeFileSync(manifestPath, JSON.stringify(manifest));
      const rate = ((Date.now() - t0) / 1000 / n).toFixed(2);
      console.log(`[${key}] ${n}/${all.length} (${rate}s per clip)`);
    }
  }
  manifest.voices[key] = [...done];
  writeFileSync(manifestPath, JSON.stringify(manifest));
  console.log(`[${key}] complete: ${done.size} clips`);
}
console.log(`Done in ${((Date.now() - t0) / 60000).toFixed(1)} min`);
