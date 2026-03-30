// ============================================================
//  CWEB 190 – Web Midterm Quiz  |  quiz.js
// ============================================================

const state = {
  questions:     [],
  current:       0,
  answers:       [],
  startTime:     null,
  timerInterval: null
};

// ── Helpers ──────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick(arr, n) { return shuffle(arr).slice(0, n); }

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Timer ─────────────────────────────────────────────────────
function startTimer() {
  state.startTime = Date.now();
  const el = document.getElementById('timer-display');
  state.timerInterval = setInterval(() => {
    const s = Math.floor((Date.now() - state.startTime) / 1000);
    const m = Math.floor(s / 60);
    const sec = s % 60;
    el.textContent = `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  }, 1000);
}

function stopTimer() { clearInterval(state.timerInterval); }

// ── Build Quiz ────────────────────────────────────────────────
function buildQuiz() {
  const mcPicked   = pick(multipleChoice, 10);
  const codePicked = pick(codingQuestions, 10);
  state.questions  = [...shuffle(mcPicked), ...shuffle(codePicked)];
  state.answers    = new Array(20).fill(null);
  state.current    = 0;
}

// ── Render Question ───────────────────────────────────────────
function renderQuestion() {
  const q     = state.questions[state.current];
  const idx   = state.current;
  const total = state.questions.length;
  const isMC  = !!q.options;

  document.getElementById('progress-bar').style.width = `${(idx / total) * 100}%`;
  document.getElementById('q-counter').textContent    = `Question ${idx + 1} of ${total}`;

  const card = document.getElementById('question-card');
  card.innerHTML = buildCardHTML(q, idx, isMC);
  card.className = 'question-card';

  if (isMC) attachMCEvents(idx);
  else       attachCodeEvents(idx);

  document.getElementById('btn-prev').disabled    = (idx === 0);
  document.getElementById('btn-next').textContent = (idx === total - 1) ? 'Finish Quiz' : 'Next →';
}

function buildCardHTML(q, idx, isMC) {
  const saved     = state.answers[idx];
  const typeLabel = isMC
    ? '<span class="q-type-badge badge-mc">Multiple Choice</span>'
    : '<span class="q-type-badge badge-code">Coding</span>';

  return `
    <div class="q-meta">
      ${typeLabel}
      <span class="q-topic">${q.topic}</span>
      <span class="q-number">${idx + 1} / 20</span>
    </div>
    <p class="q-text">${q.question}</p>
    ${isMC ? buildMCHTML(q, saved) : buildCodeHTML(q, saved)}
  `;
}

// ── MC ────────────────────────────────────────────────────────
function buildMCHTML(q, saved) {
  const letters    = ['A', 'B', 'C', 'D'];
  const submitted  = saved !== null;

  const optionsHTML = q.options.map((opt, i) => {
    let labelClass = 'option-label';
    if (submitted) {
      if (i === q.answer)            labelClass += ' correct';
      else if (i === saved.selected) labelClass += ' wrong';
    }
    return `
      <li class="option-item">
        <input type="radio" name="mc-opt" id="opt-${i}" value="${i}"
          ${saved && saved.selected === i ? 'checked' : ''}
          ${submitted ? 'disabled' : ''}>
        <label class="${labelClass}" for="opt-${i}">
          <span class="option-marker">${letters[i]}</span>
          <span>${opt}</span>
        </label>
      </li>
    `;
  }).join('');

  const correctText = submitted
    ? (saved.correct
        ? '✅ Correct!'
        : `❌ The correct answer is <strong>${letters[q.answer]}: ${q.options[q.answer]}</strong>`)
    : '';

  return `
    <ul class="options-list" id="mc-options">${optionsHTML}</ul>
    <div class="explanation-box ${submitted ? 'show' : ''}" id="explanation">
      ${submitted ? `<strong>${correctText}</strong><br>${q.explanation}` : ''}
    </div>
    ${!submitted ? '<button class="btn btn-secondary btn-sm" id="btn-submit-mc" disabled>Submit Answer</button>' : ''}
  `;
}

function attachMCEvents(idx) {
  const q      = state.questions[idx];
  const saved  = state.answers[idx];
  if (saved !== null) return;

  const radios  = document.querySelectorAll('input[name="mc-opt"]');
  const btnSub  = document.getElementById('btn-submit-mc');
  const explain = document.getElementById('explanation');

  radios.forEach(r => r.addEventListener('change', () => { btnSub.disabled = false; }));

  btnSub.addEventListener('click', () => {
    const checked = document.querySelector('input[name="mc-opt"]:checked');
    if (!checked) return;

    const selected = parseInt(checked.value);
    const correct  = selected === q.answer;
    state.answers[idx] = { type: 'mc', selected, correct };

    document.querySelectorAll('.option-label').forEach((lbl, i) => {
      if (i === q.answer)       lbl.classList.add('correct');
      else if (i === selected)  lbl.classList.add('wrong');
    });

    radios.forEach(r => r.disabled = true);
    btnSub.style.display = 'none';

    const letters = ['A', 'B', 'C', 'D'];
    explain.innerHTML = `<strong>${correct ? '✅ Correct!' : `❌ The correct answer is <strong>${letters[q.answer]}: ${q.options[q.answer]}</strong>`}</strong><br>${q.explanation}`;
    explain.classList.add('show');
  });
}

// ── Coding ────────────────────────────────────────────────────
function buildCodeHTML(q, saved) {
  const submitted = saved !== null;
  const grade     = submitted ? saved.grade : null;

  const gradeHTML = submitted
    ? `<div class="review-status ${grade === 'correct' ? 'status-correct' : 'status-wrong'}">
         ${grade === 'correct' ? '✅ Marked Correct' : '❌ Marked Incorrect'}
       </div>`
    : '';

  return `
    <div class="coding-area">
      <button class="hint-toggle" id="btn-hint">💡 Show Hint</button>
      <div class="hint-box" id="hint-box">${q.hint}</div>

      <label style="display:block; font-size:.85rem; color:var(--text-muted); margin-bottom:.4rem;">
        Write your answer below:
      </label>
      <textarea class="code-textarea" id="code-answer" spellcheck="false"
        placeholder="// Write your JavaScript / HTML code here…"
        ${submitted ? 'readonly' : ''}>${saved ? saved.userCode : ''}</textarea>

      <div style="display:flex; gap:.75rem; flex-wrap:wrap; margin-top:.8rem; align-items:center;">
        ${!submitted
          ? '<button class="btn btn-secondary btn-sm" id="btn-reveal-answer">👁 Reveal Model Answer</button>'
          : gradeHTML
        }
      </div>

      <div class="answer-reveal ${submitted ? 'show' : ''}" id="answer-reveal">
        <p style="font-size:.82rem; color:var(--text-muted); margin-bottom:.4rem;">Model Answer:</p>
        <div class="answer-box"><pre><code>${q.answer}</code></pre></div>
        ${!submitted
          ? `<div class="self-grade">
               <span>How did you do?</span>
               <button class="btn btn-success btn-sm" id="btn-grade-correct">✅ I got it right</button>
               <button class="btn btn-danger btn-sm"  id="btn-grade-wrong">❌ Needs more practice</button>
             </div>`
          : ''
        }
      </div>
    </div>
  `;
}

function attachCodeEvents(idx) {
  const saved   = state.answers[idx];
  const btnHint = document.getElementById('btn-hint');
  const hintBox = document.getElementById('hint-box');

  if (btnHint) {
    btnHint.addEventListener('click', () => {
      hintBox.classList.toggle('show');
      btnHint.textContent = hintBox.classList.contains('show') ? '💡 Hide Hint' : '💡 Show Hint';
    });
  }

  if (saved !== null) return;

  const btnReveal = document.getElementById('btn-reveal-answer');
  const revealDiv = document.getElementById('answer-reveal');

  if (btnReveal) {
    btnReveal.addEventListener('click', () => {
      revealDiv.classList.add('show');
      btnReveal.style.display = 'none';
      attachGradeEvents(idx);
    });
  }
}

function attachGradeEvents(idx) {
  const btnCorrect = document.getElementById('btn-grade-correct');
  const btnWrong   = document.getElementById('btn-grade-wrong');
  const textarea   = document.getElementById('code-answer');

  function grade(result) {
    state.answers[idx] = {
      type: 'code',
      grade: result,
      correct: result === 'correct',
      userCode: textarea ? textarea.value : ''
    };
    renderQuestion();
  }

  if (btnCorrect) btnCorrect.addEventListener('click', () => grade('correct'));
  if (btnWrong)   btnWrong.addEventListener('click',   () => grade('wrong'));
}

// ── Navigation ────────────────────────────────────────────────
function nextQuestion() {
  if (state.current < state.questions.length - 1) {
    state.current++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function prevQuestion() {
  if (state.current > 0) {
    state.current--;
    renderQuestion();
  }
}

// ── Results ───────────────────────────────────────────────────
function finishQuiz() {
  stopTimer();
  const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
  const mins    = Math.floor(elapsed / 60);
  const secs    = elapsed % 60;

  const answered = state.answers.filter(a => a !== null);
  const correct  = answered.filter(a => a.correct).length;
  const wrong    = answered.filter(a => !a.correct).length;
  const skipped  = 20 - answered.length;
  const pct      = Math.round((correct / 20) * 100);

  document.getElementById('score-circle').style.setProperty('--pct', `${pct}%`);
  document.getElementById('score-number').textContent    = `${pct}%`;
  document.getElementById('result-correct').textContent  = correct;
  document.getElementById('result-wrong').textContent    = wrong;
  document.getElementById('result-skipped').textContent  = skipped;
  document.getElementById('result-time').textContent     = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
  document.getElementById('results-summary').textContent =
    pct >= 80 ? "🎉 Great work — you're ready for the midterm!" :
    pct >= 60 ? "📖 Solid start — review the topics you missed." :
                "💪 Keep studying — revisit LO4 and LO5 materials.";

  renderReview();
  showPage('page-results');
}

function renderReview() {
  const container = document.getElementById('review-list');
  container.innerHTML = '';

  state.questions.forEach((q, i) => {
    const ans  = state.answers[i];
    const isMC = !!q.options;
    let statusClass, statusHTML, detailHTML;

    if (ans === null) {
      statusClass = 'skipped-item';
      statusHTML  = '<span class="review-status status-skip">⏭ Skipped</span>';
      detailHTML  = '';
    } else if (ans.correct) {
      statusClass = 'correct-item';
      statusHTML  = '<span class="review-status status-correct">✅ Correct</span>';
      detailHTML  = isMC
        ? `<p class="review-detail">Your answer: <strong>${q.options[ans.selected]}</strong></p>`
        : `<p class="review-detail">Self-graded as correct.</p>`;
    } else {
      statusClass = 'wrong-item';
      statusHTML  = '<span class="review-status status-wrong">❌ Incorrect</span>';
      detailHTML  = isMC
        ? `<p class="review-detail">
             Your answer: <strong>${ans.selected !== undefined ? q.options[ans.selected] : 'N/A'}</strong><br>
             Correct answer: <strong>${q.options[q.answer]}</strong><br>
             <span style="color:var(--text-muted)">${q.explanation}</span>
           </p>`
        : `<p class="review-detail">
             <span style="color:var(--text-muted)">Model Answer:</span>
             <div class="answer-box" style="margin-top:.4rem"><pre><code>${q.answer}</code></pre></div>
           </p>`;
    }

    const typeLabel = isMC
      ? '<span class="q-type-badge badge-mc" style="font-size:.68rem">MC</span>'
      : '<span class="q-type-badge badge-code" style="font-size:.68rem">Code</span>';

    container.innerHTML += `
      <div class="review-item ${statusClass}">
        <div style="display:flex; gap:.6rem; align-items:center; flex-wrap:wrap; margin-bottom:.4rem">
          ${typeLabel} ${statusHTML}
          <span style="font-size:.78rem; color:var(--text-muted)">${q.topic}</span>
        </div>
        <p class="review-q">${q.question}</p>
        ${detailHTML}
      </div>
    `;
  });
}

// ── Boot ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showPage('page-home');

  document.getElementById('btn-start').addEventListener('click', () => {
    buildQuiz(); renderQuestion(); startTimer(); showPage('page-quiz');
  });

  document.getElementById('btn-restart').addEventListener('click', () => {
    buildQuiz(); renderQuestion(); startTimer(); showPage('page-quiz');
  });

  document.getElementById('btn-home').addEventListener('click', () => showPage('page-home'));
  document.getElementById('btn-prev').addEventListener('click', prevQuestion);
  document.getElementById('btn-next').addEventListener('click', nextQuestion);

  document.querySelectorAll('.nav-logo').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); showPage('page-home'); });
  });
});
