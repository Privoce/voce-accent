# Voce Accent — Neutralize Your English Accent

A course website for coach-guided accent neutralization, designed for Chinese speakers. Twenty-one lessons across five modules target the specific transfers from Mandarin and Cantonese that create a Chinese accent in American English.

## Curriculum

| Module | Lessons |
| --- | --- |
| 1 · Start Here | Your Sound Map (orientation for Chinese speakers) |
| 2 · Vowel Foundations | The Schwa · Wide Short A · Wide Short A: Practice · Short E · Short E: Practice · Wide Short A vs. Short E · æ vs. ɛ: Minimal Pairs · Short I · Long I · French EN |
| 3 · Signature Consonants | The American R |
| 4 · Connected Speech | T + Long U · Reductions |
| 5 · Rhythm & Melody | Sentence Stress · Modulation · Modulation: Practice · Intonation: Statements · Intonation: Practice · Hidden Associations · Pace |

## Features

- Lesson pages with mouth-position instructions, coach drills, example words, minimal pairs, practice sentences, reading dialogues, homework, and conversation prompts
- Click-to-listen audio on every word, sentence, pair, and dialogue line. All clips are pregenerated with the Kokoro-82M neural TTS model (American English, female/male voices) and shipped as small 48 kbps mono MP3s (~10–20 KB each), so each click downloads instantly. Slow / natural / fast playback speeds with pitch preservation. If a clip is ever missing, the site lazily loads the Kokoro model in the browser, and failing that falls back to the system voice
- Lesson-completion tracking and a course progress bar, saved in `localStorage`
- No build step, no dependencies at runtime — plain HTML, CSS, and JavaScript

## Running locally

Any static file server works:

```bash
cd voce-accent
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Structure

```
index.html        Landing page + curriculum grid
lesson.html       Lesson template (renders from ?id=...)
css/style.css     All styles
js/data.js        Course content (modules + lessons)
js/main.js        Homepage rendering + progress
js/tts.js         Audio engine (pregenerated MP3s, Kokoro fallback, system voice)
js/lesson.js      Lesson rendering + speech playback
audio/            Pregenerated MP3 clips + manifest.json
scripts/          generate-audio.mjs — regenerates the MP3 clips from js/data.js
```

To add a lesson, append an object to `LESSONS` in `js/data.js` — the site renders it automatically. Then regenerate the audio clips for the new content:

```bash
npm install
node scripts/generate-audio.mjs        # both voices; or "female" / "male"
```

The script skips clips that already exist, so it only generates what's new.
