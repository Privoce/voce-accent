/* Audio playback for lesson content.
   1. Pregenerated MP3 clips (audio/<voice>/<hash>.mp3, ~15 KB each) — instant, no model download.
   2. Fallback: Kokoro-82M neural TTS in the browser (lazy-loaded only if a clip is missing).
   3. Last resort: the system voice. */

window.VoceTTS = (function () {
  const MODEL_ID = "onnx-community/Kokoro-82M-v1.0-ONNX";
  const LIB_URL = "https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm";
  const VOICES = { female: "af_heart", male: "am_michael" };

  let manifest = null; // { female: Set<hash>, male: Set<hash> }
  let manifestPromise = null;
  let tts = null;
  let modelPromise = null;
  let state = "idle"; // idle | loading | ready | fallback
  let voiceKey = "female";
  let onState = () => {};

  const genCache = new Map(); // "voice|text" -> object URL (model-generated)
  const player = new Audio();
  let seq = 0;

  function setState(s, detail) {
    state = s;
    onState(s, detail);
  }

  /* same hash as scripts/generate-audio.mjs (FNV-1a 32-bit) */
  function fnv(str) {
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 0x01000193);
    }
    return (h >>> 0).toString(16).padStart(8, "0");
  }

  function load() {
    if (manifestPromise) return manifestPromise;
    manifestPromise = fetch("audio/manifest.json")
      .then((r) => {
        if (!r.ok) throw new Error("no manifest");
        return r.json();
      })
      .then((m) => {
        manifest = {};
        for (const [voice, hashes] of Object.entries(m.voices || {})) {
          manifest[voice] = new Set(hashes);
        }
        setState("ready");
      })
      .catch(() => {
        manifest = null;
        return loadModel(); // no pregenerated audio shipped — use the in-browser model
      });
    return manifestPromise;
  }

  function loadModel() {
    if (modelPromise) return modelPromise;
    modelPromise = (async () => {
      setState("loading", 0);
      const { KokoroTTS } = await import(LIB_URL);
      tts = await KokoroTTS.from_pretrained(MODEL_ID, {
        dtype: "q8",
        device: "wasm",
        progress_callback: (p) => {
          if (p.status === "progress" && /\.onnx$/.test(p.file || "")) {
            setState("loading", Math.round(p.progress || 0));
          }
        },
      });
      setState("ready");
    })().catch((e) => {
      console.warn("Neural voice unavailable, falling back to system voice.", e);
      tts = null;
      setState("fallback");
    });
    return modelPromise;
  }

  function stop() {
    seq++;
    player.pause();
    if ("speechSynthesis" in window) speechSynthesis.cancel();
  }

  function playUrl(url, rate, onStart, onEnd) {
    player.src = url;
    player.playbackRate = rate;
    if ("preservesPitch" in player) player.preservesPitch = true;
    player.onended = player.onerror = onEnd;
    onStart();
    return player.play();
  }

  function systemSpeak(text, rate, done) {
    if (!("speechSynthesis" in window)) return done();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = rate * 0.9;
    const voices = speechSynthesis.getVoices();
    u.voice =
      voices.find((v) => v.lang === "en-US" && /Samantha|Google US English|Aria|Jenny/i.test(v.name)) ||
      voices.find((v) => v.lang === "en-US") ||
      voices.find((v) => v.lang.startsWith("en")) ||
      null;
    u.onend = u.onerror = done;
    speechSynthesis.speak(u);
  }

  async function speak(text, rate, hooks = {}) {
    const onStart = hooks.onStart || (() => {});
    const onEnd = hooks.onEnd || (() => {});
    const onWait = hooks.onWait || (() => {});

    stop();
    const mySeq = seq;
    await load().catch(() => {});
    if (mySeq !== seq) return;

    /* 1 — pregenerated MP3 */
    if (manifest && manifest[voiceKey] && manifest[voiceKey].has(fnv(text))) {
      const url = `audio/${voiceKey}/${fnv(text)}.mp3`;
      playUrl(url, rate, onStart, onEnd).catch(() => {
        // file missing or blocked — fall through to model/system
        generateOrSystem(text, rate, mySeq, { onStart, onEnd, onWait });
      });
      return;
    }

    generateOrSystem(text, rate, mySeq, { onStart, onEnd, onWait });
  }

  async function generateOrSystem(text, rate, mySeq, { onStart, onEnd, onWait }) {
    if (mySeq !== seq) return;

    /* 2 — in-browser neural model (lazy) */
    if (!modelPromise) loadModel();
    onWait();
    await modelPromise.catch(() => {});
    if (mySeq !== seq) return;

    if (tts) {
      const key = VOICES[voiceKey] + "|" + text;
      let url = genCache.get(key);
      if (!url) {
        try {
          const audio = await tts.generate(text, { voice: VOICES[voiceKey] });
          const blob = audio.toBlob ? audio.toBlob() : new Blob([audio.toWav()], { type: "audio/wav" });
          url = URL.createObjectURL(blob);
          genCache.set(key, url);
        } catch (e) {
          console.warn("Generation failed, using system voice.", e);
          url = null;
        }
        if (mySeq !== seq) return onEnd();
      }
      if (url) {
        playUrl(url, rate, onStart, onEnd).catch(onEnd);
        return;
      }
    }

    /* 3 — system voice */
    onStart();
    systemSpeak(text, rate, onEnd);
  }

  return {
    load,
    speak,
    stop,
    setVoice(k) {
      if (VOICES[k]) voiceKey = k;
    },
    getState: () => state,
    onStateChange(fn) {
      onState = fn;
    },
  };
})();
