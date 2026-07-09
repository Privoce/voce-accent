/* Homepage: render curriculum grid + progress from localStorage */

(function () {
  const root = document.getElementById("curriculum-root");
  if (!root) return;

  const doneSet = new Set(JSON.parse(localStorage.getItem("voce-done") || "[]"));

  const frag = document.createDocumentFragment();
  let lessonCounter = 0;

  MODULES.forEach((mod) => {
    const lessons = LESSONS.filter((l) => l.module === mod.id);
    if (!lessons.length) return;

    const sec = document.createElement("div");
    sec.className = "module";
    sec.innerHTML = `
      <div class="module-head">
        <span class="module-num">${mod.num}</span>
        <h3>${mod.title}</h3>
      </div>
      <p class="module-blurb">${mod.blurb}</p>
    `;

    const grid = document.createElement("div");
    grid.className = "lesson-grid";

    lessons.forEach((l) => {
      lessonCounter++;
      const a = document.createElement("a");
      a.className = "lesson-card" + (doneSet.has(l.id) ? " is-done" : "");
      a.href = `lesson.html?id=${l.id}`;
      a.innerHTML = `
        <div class="top">
          <span class="lesson-index">Lesson ${String(lessonCounter).padStart(2, "0")}</span>
          <span class="ipa-badge">${l.ipa}</span>
        </div>
        <h4>${l.title}</h4>
        <p class="tag">${l.tag} · as in “${l.asIn}”</p>
        <span class="done-flag">✓</span>
      `;
      grid.appendChild(a);
    });

    sec.appendChild(grid);
    frag.appendChild(sec);
  });

  root.appendChild(frag);

  // stats
  const statEl = document.getElementById("stat-lessons");
  if (statEl) statEl.textContent = LESSONS.length;

  // progress bar
  const fill = document.getElementById("progress-fill");
  const pctEl = document.getElementById("progress-pct");
  const pct = Math.round((doneSet.size / LESSONS.length) * 100);
  if (fill) requestAnimationFrame(() => { fill.style.width = pct + "%"; });
  if (pctEl) pctEl.textContent = pct + "%";

  const reset = document.getElementById("progress-reset");
  if (reset) reset.addEventListener("click", () => {
    if (confirm("Clear all lesson progress?")) {
      localStorage.removeItem("voce-done");
      location.reload();
    }
  });
})();
