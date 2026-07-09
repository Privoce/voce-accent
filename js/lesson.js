/* Lesson page renderer + Web Speech playback */

(function () {
  const root = document.getElementById("lesson-root");
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || LESSONS[0].id;
  const idx = LESSONS.findIndex((l) => l.id === id);
  const lesson = idx >= 0 ? LESSONS[idx] : LESSONS[0];
  const mod = MODULES.find((m) => m.id === lesson.module);

  document.title = `${lesson.title} — Voce English Coaching`;

  /* ---------- speech (neural TTS via js/tts.js) ---------- */
  let speechRate = 1.0;
  let currentBtn = null;

  function clearBtn() {
    if (currentBtn) currentBtn.classList.remove("playing", "generating");
    currentBtn = null;
  }

  function speak(text, btn) {
    clearBtn();
    currentBtn = btn || null;
    VoceTTS.speak(text, speechRate, {
      onWait: () => btn && btn.classList.add("generating"),
      onStart: () => {
        if (btn) {
          btn.classList.remove("generating");
          btn.classList.add("playing");
        }
      },
      onEnd: () => btn && btn.classList.remove("playing", "generating"),
    });
  }

  const esc = (s) =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* ---------- section renderers ---------- */

  function secWrap(title, innerHTML) {
    return `<section class="sec">${title ? `<h2>${esc(title)}</h2>` : ""}${innerHTML}</section>`;
  }

  const renderers = {
    text: (s) =>
      secWrap(s.title, s.paras.map((p) => `<p>${esc(p)}</p>`).join("")),

    note: (s) => `<div class="lead-note">${s.html}</div>`,

    steps: (s) =>
      secWrap(
        s.title,
        `<div class="steps-grid">${s.items
          .map((i) => `<div class="step-card">${esc(i)}</div>`)
          .join("")}</div>`
      ),

    drill: (s) =>
      secWrap(
        s.title,
        (s.intro ? `<p>${esc(s.intro)}</p>` : "") +
          s.rows
            .map(
              (r) => `
        <div class="drill-row">
          <div class="drill-label">${esc(r.label)}</div>
          <div class="drill-chips">
            ${r.chips
              .map(
                (c) => `
              <div class="drill-chip">
                <span class="ipa">${esc(c.ipa)}</span>
                ${c.hint ? `<span class="hint">${esc(c.hint)}</span>` : ""}
              </div>`
              )
              .join("")}
          </div>
        </div>`
            )
            .join("")
      ),

    words: (s) =>
      secWrap(
        s.title,
        (s.intro ? `<p>${esc(s.intro)}</p>` : "") +
          `<div class="word-grid">${s.items
            .map(
              (w) => `
          <button class="word-chip" type="button" data-say="${esc(w.w)}">
            ${esc(w.w)}
            ${w.hint ? `<span class="hint">“${esc(w.hint)}”</span>` : ""}
            <span class="spk">▶</span>
          </button>`
            )
            .join("")}</div>`
      ),

    sentences: (s) =>
      secWrap(
        s.title,
        (s.intro ? `<p>${esc(s.intro)}</p>` : "") +
          `<ol class="sent-list">${s.items
            .map(
              (it) => `
          <li class="sent-item">
            <div class="txt">
              ${esc(it.t)}
              ${it.hint ? `<span class="hint-tag">${esc(it.hint)}</span>` : ""}
              ${it.phon ? `<span class="phon">${esc(it.phon)}</span>` : ""}
            </div>
            <button class="listen-btn" type="button" data-say="${esc(it.t)}" title="Listen">▶</button>
          </li>`
            )
            .join("")}</ol>`
      ),

    phrases: (s) =>
      secWrap(
        s.title,
        (s.intro ? `<p>${esc(s.intro)}</p>` : "") +
          `<div class="phrase-grid">${s.items
            .map(
              (it) => `
          <div class="phrase-card">
            <div class="p">${esc(it.p)}</div>
            <div class="s">${s.phonetic ? "→ " : ""}${esc(it.s)}</div>
            <button class="listen-btn" type="button" data-say="${s.phonetic ? esc(it.p) : `${esc(it.p)}. ${esc(it.s)}`}" title="Listen">▶</button>
          </div>`
            )
            .join("")}</div>`
      ),

    pairs: (s) => {
      const half = Math.ceil(s.rows.length / 2);
      const col = (rows, offset) => `
        <table class="pairs-table">
          <thead><tr><th></th><th>${esc(s.colA)}</th><th>${esc(s.colB)}</th></tr></thead>
          <tbody>
            ${rows
              .map(
                (r, i) => `
              <tr>
                <td class="idx">${offset + i + 1}</td>
                <td class="pair-word" data-say="${esc(r[0])}">${esc(r[0])}</td>
                <td class="pair-word" data-say="${esc(r[1])}">${esc(r[1])}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>`;
      return secWrap(
        s.title,
        (s.intro ? `<p>${esc(s.intro)}</p>` : "") +
          `<div class="pairs-cols">${col(s.rows.slice(0, half), 0)}${col(s.rows.slice(half), half)}</div>`
      );
    },

    patterns: (s) =>
      secWrap(
        s.title,
        `<div class="pattern-grid">${s.items
          .map(
            (p) => `
        <div class="pattern-card">
          <h4><span class="curve">${esc(p.curve)}</span>${esc(p.name)}</h4>
          <ul>${p.uses.map((u) => `<li>${esc(u)}</li>`).join("")}</ul>
          <div class="ex" data-say="${esc(p.ex)}" title="Listen">“${esc(p.ex)}” ▶</div>
        </div>`
          )
          .join("")}</div>`
      ),

    dialogue: (s) =>
      secWrap(
        s.title,
        (s.intro ? `<p>${esc(s.intro)}</p>` : "") +
          `<div class="dialogue">${s.lines
            .map(
              (l) => `
          <div class="line">
            <div class="who">${esc(l.who)}</div>
            <div class="bubble">${esc(l.text)}</div>
            <button class="listen-btn" type="button" data-say="${esc(l.text)}" title="Listen">▶</button>
          </div>`
            )
            .join("")}</div>`
      ),

    passage: (s) =>
      secWrap(
        s.title,
        `<details class="fold">
          <summary>${esc(s.summary)}</summary>
          <div class="fold-body">
            ${s.blocks
              .map((b) => (b.h ? `<h4>${esc(b.h)}</h4>` : "") + (b.p ? `<p>${esc(b.p)}</p>` : ""))
              .join("")}
          </div>
        </details>`
      ),

    homework: (s) =>
      `<div class="homework"><strong>Homework</strong>${esc(s.text)}</div>`,

    convo: (s) =>
      secWrap(
        s.title,
        (s.intro
          ? `<p>${esc(s.intro)}</p>`
          : `<p>Use these lead questions to have a conversation with your coach. Feel free to include thoughts that are not specifically mentioned.</p>`) +
          `<ul class="convo-list">${s.items.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>`
      )
  };

  /* ---------- page assembly ---------- */

  const prev = LESSONS[idx - 1];
  const next = LESSONS[idx + 1];
  const doneSet = new Set(JSON.parse(localStorage.getItem("voce-done") || "[]"));
  const isDone = doneSet.has(lesson.id);

  root.innerHTML = `
    <nav class="crumbs">
      <a href="index.html">Home</a><span class="sep">/</span>
      <a href="index.html#curriculum">${esc(mod.title)}</a><span class="sep">/</span>
      <span>${esc(lesson.title)}</span>
    </nav>

    <div class="lesson-hero">
      <div class="module-label">${esc(mod.num)} · ${esc(mod.title)}</div>
      <h1>${esc(lesson.title)}</h1>
      <p class="tagline">${esc(lesson.tagline)}</p>
      <div class="lesson-meta">
        <span class="meta-chip"><span class="ipa">${esc(lesson.ipa)}</span></span>
        <span class="meta-chip">as in “${esc(lesson.asIn)}”</span>
        <span class="meta-chip">${esc(lesson.tag)}</span>
      </div>
    </div>

    <div class="lesson-toolbar">
      <div class="speed-toggle" id="speed-toggle">
        <button type="button" data-rate="0.75">Slow</button>
        <button type="button" data-rate="1" class="active">Natural</button>
        <button type="button" data-rate="1.25">Fast</button>
      </div>
      <div class="speed-toggle" id="voice-toggle">
        <button type="button" data-voice="female" class="active">Female voice</button>
        <button type="button" data-voice="male">Male voice</button>
      </div>
      <span class="toolbar-note" id="tts-status">Click ▶ on any word or sentence to hear it.</span>
    </div>

    <div class="lesson-body">
      ${lesson.sections.map((s) => (renderers[s.type] ? renderers[s.type](s) : "")).join("")}
    </div>

    <div class="lesson-nav">
      ${prev
        ? `<a class="nav-card" href="lesson.html?id=${prev.id}"><div class="dir">← Previous</div><div class="ttl">${esc(prev.title)}</div></a>`
        : `<span class="nav-card empty"></span>`}
      <button class="complete-btn ${isDone ? "done" : ""}" id="complete-btn" type="button">
        ${isDone ? "✓ Completed — tap to undo" : "Mark lesson complete"}
      </button>
      ${next
        ? `<a class="nav-card next" href="lesson.html?id=${next.id}"><div class="dir">Next →</div><div class="ttl">${esc(next.title)}</div></a>`
        : `<span class="nav-card empty"></span>`}
    </div>
  `;

  /* ---------- wiring ---------- */

  root.addEventListener("click", (e) => {
    const el = e.target.closest("[data-say]");
    if (el) speak(el.getAttribute("data-say"), el);
  });

  document.getElementById("speed-toggle").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-rate]");
    if (!btn) return;
    speechRate = parseFloat(btn.dataset.rate);
    document.querySelectorAll("#speed-toggle button").forEach((b) => b.classList.toggle("active", b === btn));
  });

  document.getElementById("voice-toggle").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-voice]");
    if (!btn) return;
    VoceTTS.setVoice(btn.dataset.voice);
    document.querySelectorAll("#voice-toggle button").forEach((b) => b.classList.toggle("active", b === btn));
  });

  document.getElementById("complete-btn").addEventListener("click", (e) => {
    const btn = e.currentTarget;
    if (doneSet.has(lesson.id)) {
      doneSet.delete(lesson.id);
      btn.classList.remove("done");
      btn.textContent = "Mark lesson complete";
    } else {
      doneSet.add(lesson.id);
      btn.classList.add("done");
      btn.textContent = "✓ Completed — tap to undo";
    }
    localStorage.setItem("voce-done", JSON.stringify([...doneSet]));
  });

  // audio: pregenerated MP3s load instantly; model download only if a clip is missing
  const statusEl = document.getElementById("tts-status");
  VoceTTS.onStateChange((state, detail) => {
    if (state === "loading") {
      statusEl.textContent =
        detail > 0
          ? `Downloading American English voice… ${detail}% (one-time, then cached)`
          : "Loading American English voice…";
    } else if (state === "ready") {
      statusEl.textContent = "American English audio ready. Click ▶ on any word or sentence.";
    } else if (state === "fallback") {
      statusEl.textContent = "Using your system voice (neural voice couldn’t load). Click ▶ to listen.";
    }
  });
  VoceTTS.load();
  if ("speechSynthesis" in window) speechSynthesis.getVoices();
})();
