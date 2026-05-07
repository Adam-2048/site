/* ============================================================
   GCSE PLANNER 2026 — app.js
   Data sourced from official AQA, Edexcel, OCR timetables
   ============================================================ */

// ─── EXAM DATA ────────────────────────────────────────────────
// All dates verified against official board timetables (Summer 2026)
const EXAMS = [
  // === GERMAN ===
  { id: 'german-1a', subject: 'German', paper: 'Listening & Reading', date: '2026-05-07', session: 'afternoon', duration: 'see board', boards: ['AQA'] },
  { id: 'german-1b', subject: 'German', paper: 'Listening', date: '2026-05-07', session: 'afternoon', duration: 'see board', boards: ['Edexcel'] },
  { id: 'german-2a', subject: 'German', paper: 'Writing', date: '2026-05-14', session: 'afternoon', duration: 'see board', boards: ['AQA'] },
  { id: 'german-2b', subject: 'German', paper: 'Reading', date: '2026-05-14', session: 'afternoon', duration: 'see board', boards: ['Edexcel'] },
  { id: 'german-3', subject: 'German', paper: 'Writing', date: '2026-06-01', session: 'afternoon', duration: 'see board', boards: ['Edexcel'] },

  // === ENGLISH LITERATURE ===
  { id: 'englit-1', subject: 'English Literature', paper: 'Paper 1 (Shakespeare & 19th C)', date: '2026-05-11', session: 'morning', duration: '1h 45m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'englit-2', subject: 'English Literature', paper: 'Paper 2 (Modern Texts & Poetry)', date: '2026-05-19', session: 'morning', duration: '2h 15m', boards: ['AQA', 'Edexcel', 'OCR'] },

  // === BUSINESS STUDIES ===
  { id: 'business-1', subject: 'Business Studies', paper: 'Paper 1', date: '2026-05-11', session: 'afternoon', duration: '1h 45m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'business-2', subject: 'Business Studies', paper: 'Paper 2', date: '2026-05-21', session: 'afternoon', duration: '1h 45m', boards: ['AQA', 'Edexcel', 'OCR'] },

  // === BIOLOGY ===
  { id: 'bio-1', subject: 'Biology', paper: 'Paper 1 (Combined & Separate)', date: '2026-05-12', session: 'afternoon', duration: '1h 15m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'bio-2', subject: 'Biology', paper: 'Paper 2 (Combined & Separate)', date: '2026-06-08', session: 'morning', duration: '1h 15m', boards: ['AQA', 'Edexcel', 'OCR'] },

  // === RELIGIOUS STUDIES ===
  { id: 're-1', subject: 'Religious Studies', paper: 'Paper 1', date: '2026-05-12', session: 'morning', duration: '1h 45m', boards: ['AQA', 'Edexcel'] },
  { id: 're-2', subject: 'Religious Studies', paper: 'Paper 2', date: '2026-05-20', session: 'afternoon', duration: '1h 45m', boards: ['AQA', 'Edexcel'] },
  { id: 're-3', subject: 'Religious Studies', paper: 'Paper 3', date: '2026-06-01', session: 'afternoon', duration: '1h 00m', boards: ['Edexcel'] },

  // === GEOGRAPHY ===
  { id: 'geo-1', subject: 'Geography', paper: 'Paper 1 (Living with the Physical Environment)', date: '2026-05-13', session: 'morning', duration: '1h 30m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'geo-2', subject: 'Geography', paper: 'Paper 2 (Challenges in the Human Environment)', date: '2026-06-03', session: 'afternoon', duration: '1h 30m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'geo-3', subject: 'Geography', paper: 'Paper 3 (Geographical Skills & Fieldwork)', date: '2026-06-11', session: 'morning', duration: '1h 15m', boards: ['AQA', 'Edexcel', 'OCR'] },

  // === COMPUTER SCIENCE ===
  { id: 'cs-1', subject: 'Computer Science', paper: 'Paper 1 (Computational Thinking)', date: '2026-05-13', session: 'afternoon', duration: '1h 30m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'cs-2', subject: 'Computer Science', paper: 'Paper 2 (Algorithms & Programming)', date: '2026-05-19', session: 'afternoon', duration: '1h 30m', boards: ['AQA', 'Edexcel', 'OCR'] },

  // === MATHEMATICS ===
  { id: 'maths-1', subject: 'Mathematics', paper: 'Paper 1 — Non-Calculator (Foundation & Higher)', date: '2026-05-14', session: 'morning', duration: '1h 30m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'maths-2', subject: 'Mathematics', paper: 'Paper 2 — Calculator (Foundation & Higher)', date: '2026-06-03', session: 'morning', duration: '1h 30m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'maths-3', subject: 'Mathematics', paper: 'Paper 3 — Calculator (Foundation & Higher)', date: '2026-06-10', session: 'morning', duration: '1h 30m', boards: ['AQA', 'Edexcel', 'OCR'] },

  // === HISTORY ===
  { id: 'history-1', subject: 'History', paper: 'Paper 1', date: '2026-05-15', session: 'morning', duration: '1h 45m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'history-2', subject: 'History', paper: 'Paper 2', date: '2026-06-04', session: 'morning', duration: '1h 45m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'history-3', subject: 'History', paper: 'Paper 3', date: '2026-06-09', session: 'afternoon', duration: '1h 20m', boards: ['Edexcel', 'OCR'] },

  // === CHEMISTRY ===
  { id: 'chem-1', subject: 'Chemistry', paper: 'Paper 1 (Combined & Separate)', date: '2026-05-18', session: 'morning', duration: '1h 15m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'chem-2', subject: 'Chemistry', paper: 'Paper 2 (Combined & Separate)', date: '2026-06-12', session: 'morning', duration: '1h 15m', boards: ['AQA', 'Edexcel', 'OCR'] },

  // === FRENCH ===
  { id: 'french-1a', subject: 'French', paper: 'Listening & Reading', date: '2026-05-20', session: 'morning', duration: 'see board', boards: ['AQA'] },
  { id: 'french-1b', subject: 'French', paper: 'Listening', date: '2026-05-20', session: 'morning', duration: 'see board', boards: ['Edexcel'] },
  { id: 'french-2a', subject: 'French', paper: 'Writing', date: '2026-06-04', session: 'afternoon', duration: 'see board', boards: ['AQA'] },
  { id: 'french-2b', subject: 'French', paper: 'Reading', date: '2026-06-04', session: 'afternoon', duration: 'see board', boards: ['Edexcel'] },
  { id: 'french-3', subject: 'French', paper: 'Writing', date: '2026-06-08', session: 'afternoon', duration: 'see board', boards: ['Edexcel'] },

  // === ENGLISH LANGUAGE ===
  { id: 'englang-1', subject: 'English Language', paper: 'Paper 1 (Explorations in Creative Reading & Writing)', date: '2026-05-21', session: 'morning', duration: '1h 45m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'englang-2', subject: 'English Language', paper: 'Paper 2 (Writers\' Viewpoints & Perspectives)', date: '2026-06-05', session: 'morning', duration: '1h 45m', boards: ['AQA', 'Edexcel', 'OCR'] },

  // === PHYSICS ===
  { id: 'phys-1', subject: 'Physics', paper: 'Paper 1 (Combined & Separate)', date: '2026-06-02', session: 'morning', duration: '1h 15m', boards: ['AQA', 'Edexcel', 'OCR'] },
  { id: 'phys-2', subject: 'Physics', paper: 'Paper 2 (Combined & Separate)', date: '2026-06-15', session: 'morning', duration: '1h 15m', boards: ['AQA', 'Edexcel', 'OCR'] },

  // === SPANISH ===
  { id: 'spanish-1a', subject: 'Spanish', paper: 'Listening & Reading', date: '2026-06-09', session: 'morning', duration: 'see board', boards: ['AQA'] },
  { id: 'spanish-1b', subject: 'Spanish', paper: 'Listening', date: '2026-06-09', session: 'morning', duration: 'see board', boards: ['Edexcel'] },
  { id: 'spanish-2a', subject: 'Spanish', paper: 'Writing', date: '2026-06-16', session: 'morning', duration: 'see board', boards: ['AQA'] },
  { id: 'spanish-2b', subject: 'Spanish', paper: 'Reading', date: '2026-06-16', session: 'morning', duration: 'see board', boards: ['Edexcel'] },
  { id: 'spanish-3', subject: 'Spanish', paper: 'Writing', date: '2026-06-17', session: 'morning', duration: 'see board', boards: ['Edexcel'] },
];

// ─── SUBJECT GROUPS ────────────────────────────────────────────
const SUBJECT_GROUPS = [
  {
    label: 'Core Subjects',
    subjects: [
      { id: 'Mathematics',       icon: '📐', description: '3 papers' },
      { id: 'English Language',  icon: '✍️',  description: '2 papers' },
      { id: 'English Literature',icon: '📖', description: '2 papers' },
    ]
  },
  {
    label: 'Sciences',
    subjects: [
      { id: 'Biology',   icon: '🔬', description: '2 papers (Combined & Separate)' },
      { id: 'Chemistry', icon: '⚗️', description: '2 papers (Combined & Separate)' },
      { id: 'Physics',   icon: '⚡', description: '2 papers (Combined & Separate)' },
    ]
  },
  {
    label: 'Humanities',
    subjects: [
      { id: 'History',           icon: '🏛️', description: '2–3 papers' },
      { id: 'Geography',         icon: '🌍', description: '3 papers' },
      { id: 'Religious Studies', icon: '☯️', description: '2–3 papers' },
    ]
  },
  {
    label: 'Languages',
    subjects: [
      { id: 'French',   icon: '🇫🇷', description: 'Listening, Reading & Writing' },
      { id: 'German',   icon: '🇩🇪', description: 'Listening, Reading & Writing' },
      { id: 'Spanish',  icon: '🇪🇸', description: 'Listening, Reading & Writing' },
    ]
  },
  {
    label: 'Other Subjects',
    subjects: [
      { id: 'Business Studies', icon: '💼', description: '2 papers' },
      { id: 'Computer Science', icon: '💻', description: '2 papers' },
    ]
  },
];

// ─── STATE ─────────────────────────────────────────────────────
let selectedSubjects = new Set();

// Load from URL hash on page load
function loadFromURL() {
  const hash = window.location.hash.replace('#', '');
  if (hash.startsWith('subjects=')) {
    const ids = decodeURIComponent(hash.replace('subjects=', '')).split(',').filter(Boolean);
    ids.forEach(id => {
      // Match by display name
      if (SUBJECT_GROUPS.some(g => g.subjects.some(s => s.id === id))) {
        selectedSubjects.add(id);
      }
    });
  }
}

// ─── RENDER SUBJECT PICKER ─────────────────────────────────────
function renderSubjectPicker() {
  const container = document.getElementById('subjectGroups');
  container.innerHTML = '';

  SUBJECT_GROUPS.forEach(group => {
    const groupEl = document.createElement('div');
    groupEl.className = 'subject-group';

    const label = document.createElement('div');
    label.className = 'subject-group-label';
    label.textContent = group.label;
    groupEl.appendChild(label);

    const cards = document.createElement('div');
    cards.className = 'subject-cards';

    group.subjects.forEach(subject => {
      const card = document.createElement('div');
      card.className = 'subject-card' + (selectedSubjects.has(subject.id) ? ' selected' : '');
      card.dataset.subject = subject.id;
      card.innerHTML = `
        <span class="subject-card-icon">${subject.icon}</span>
        <span class="subject-card-name">${subject.id}</span>
        <span class="subject-card-count">${subject.description}</span>
      `;
      card.addEventListener('click', () => toggleSubject(subject.id, card));
      cards.appendChild(card);
    });

    groupEl.appendChild(cards);
    container.appendChild(groupEl);
  });
}

function toggleSubject(id, card) {
  if (selectedSubjects.has(id)) {
    selectedSubjects.delete(id);
    card.classList.remove('selected');
  } else {
    selectedSubjects.add(id);
    card.classList.add('selected');
  }
  updateSelectionBar();
  renderCalendar();
  renderMyTimetable();
  updateURL();
}

function clearAll() {
  selectedSubjects.clear();
  document.querySelectorAll('.subject-card.selected').forEach(c => c.classList.remove('selected'));
  updateSelectionBar();
  renderCalendar();
  renderMyTimetable();
  updateURL();
}

function updateSelectionBar() {
  const n = selectedSubjects.size;
  document.getElementById('selectionCount').textContent = n;
  document.getElementById('subjectPlural').textContent = n === 1 ? '' : 's';
}

function updateURL() {
  const ids = [...selectedSubjects].join(',');
  if (ids) {
    history.replaceState(null, '', `#subjects=${encodeURIComponent(ids)}`);
  } else {
    history.replaceState(null, '', window.location.pathname);
  }
}

// ─── CALENDAR ─────────────────────────────────────────────────
function renderCalendar() {
  const container = document.getElementById('calendarGrid');
  container.innerHTML = '';

  // Group exams by date
  const examsByDate = {};
  EXAMS.forEach(e => {
    if (!examsByDate[e.date]) examsByDate[e.date] = [];
    examsByDate[e.date].push(e);
  });

  const months = [
    { year: 2026, month: 4, label: 'May 2026' },  // 0-indexed: 4 = May
    { year: 2026, month: 5, label: 'June 2026' },
  ];

  months.forEach(({ year, month, label }) => {
    const monthDiv = document.createElement('div');
    monthDiv.className = 'cal-month';

    const header = document.createElement('div');
    header.className = 'cal-month-header';
    header.textContent = label;
    monthDiv.appendChild(header);

    // Day headers
    const dayHeaders = document.createElement('div');
    dayHeaders.className = 'cal-week';
    ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].forEach(d => {
      const dh = document.createElement('div');
      dh.className = 'cal-day-header';
      dh.textContent = d;
      dayHeaders.appendChild(dh);
    });
    monthDiv.appendChild(dayHeaders);

    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // JS getDay: 0=Sun, we want 0=Mon
    let startDow = (firstDay.getDay() + 6) % 7; // Mon=0

    let week = document.createElement('div');
    week.className = 'cal-week';

    // Leading empty cells
    for (let i = 0; i < startDow; i++) {
      const empty = document.createElement('div');
      empty.className = 'cal-day empty';
      week.appendChild(empty);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      const examsToday = examsByDate[dateStr] || [];
      const selectedToday = examsToday.filter(e => selectedSubjects.has(e.subject));
      const hasAny = examsToday.length > 0;
      const hasSelected = selectedToday.length > 0;

      const cell = document.createElement('div');
      cell.className = 'cal-day' + (hasSelected ? ' has-selected-exam' : hasAny ? ' has-exam' : '');

      const num = document.createElement('div');
      num.className = 'cal-day-num';
      num.textContent = d;
      cell.appendChild(num);

      const showExams = hasSelected ? selectedToday : examsToday.slice(0, 2);
      showExams.forEach(e => {
        const dot = document.createElement('div');
        const isSelected = selectedSubjects.has(e.subject);
        dot.className = 'cal-exam-dot ' + (isSelected ? 'selected' : e.session);
        dot.textContent = e.subject.length > 14 ? e.subject.split(' ')[0] : e.subject;
        dot.title = `${e.subject} — ${e.paper} (${e.session === 'morning' ? '9:00 AM' : '1:30 PM'})`;
        cell.appendChild(dot);
      });

      if (examsToday.length > 2 && !hasSelected) {
        const more = document.createElement('div');
        more.className = 'cal-exam-dot morning';
        more.textContent = `+${examsToday.length - 2}`;
        cell.appendChild(more);
      }

      week.appendChild(cell);

      // Calculate day of week for this date (0=Mon)
      const thisDay = new Date(year, month, d);
      const dow = (thisDay.getDay() + 6) % 7;
      if (dow === 6 && d < daysInMonth) {
        monthDiv.appendChild(week);
        week = document.createElement('div');
        week.className = 'cal-week';
      }
    }
    monthDiv.appendChild(week);
    container.appendChild(monthDiv);
  });
}

// ─── MY TIMETABLE ──────────────────────────────────────────────
function renderMyTimetable() {
  const emptyState = document.getElementById('emptyState');
  const wrap = document.getElementById('myTimetableWrap');
  const tbody = document.getElementById('timetableBody');

  if (selectedSubjects.size === 0) {
    emptyState.style.display = 'block';
    wrap.style.display = 'none';
    return;
  }

  emptyState.style.display = 'none';
  wrap.style.display = 'block';

  const myExams = EXAMS
    .filter(e => selectedSubjects.has(e.subject))
    .sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? -1 : 1;
      // morning before afternoon
      if (a.session !== b.session) return a.session === 'morning' ? -1 : 1;
      return 0;
    });

  tbody.innerHTML = '';
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  myExams.forEach(e => {
    const dateParts = e.date.split('-');
    const dateObj = new Date(+dateParts[0], +dateParts[1]-1, +dateParts[2]);
    const dayName = days[dateObj.getDay()];
    const dateFormatted = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const timeStr = e.session === 'morning' ? '9:00 AM' : '1:30 PM';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="td-date">${dateFormatted}</td>
      <td class="td-day">${dayName}</td>
      <td><span class="session-badge ${e.session}">${timeStr}</span></td>
      <td class="td-subject">${e.subject}</td>
      <td class="td-paper">${e.paper}</td>
      <td class="td-duration">${e.duration}</td>
      <td class="td-boards">${e.boards.join(' · ')}</td>
    `;
    tbody.appendChild(tr);
  });

  renderCountdowns(myExams);
}

function renderCountdowns(myExams) {
  const strip = document.getElementById('countdownStrip');
  strip.innerHTML = '';

  const now = new Date();
  now.setHours(0,0,0,0);

  // Get unique upcoming exams (next 5)
  const upcoming = myExams.filter(e => {
    const parts = e.date.split('-');
    const d = new Date(+parts[0], +parts[1]-1, +parts[2]);
    return d >= now;
  });

  // Deduplicate by date+subject
  const seen = new Set();
  const unique = [];
  upcoming.forEach(e => {
    const key = `${e.date}-${e.subject}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(e);
    }
  });

  unique.slice(0, 6).forEach(e => {
    const parts = e.date.split('-');
    const examDate = new Date(+parts[0], +parts[1]-1, +parts[2]);
    const diff = Math.ceil((examDate - now) / (1000 * 60 * 60 * 24));
    const label = diff === 0 ? 'TODAY' : diff === 1 ? '1 day' : `${diff} days`;
    const dateStr = examDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

    const card = document.createElement('div');
    card.className = 'countdown-card';
    card.innerHTML = `
      <div class="countdown-days">${diff === 0 ? '📅' : diff}</div>
      <div class="countdown-label">${diff === 0 ? 'TODAY!' : (diff === 1 ? 'day to go' : 'days to go')}</div>
      <div class="countdown-sub">${e.subject}</div>
      <div class="countdown-sub">${dateStr}</div>
    `;
    strip.appendChild(card);
  });

  if (unique.length === 0) {
    strip.innerHTML = '<p style="color:var(--ink-light);font-size:0.85rem">All your selected exams have passed. Good luck with results day on 20 August!</p>';
  }
}

// ─── ICS DOWNLOAD ──────────────────────────────────────────────
function downloadICS() {
  if (selectedSubjects.size === 0) {
    showToast('Please select at least one subject first');
    return;
  }

  const myExams = EXAMS.filter(e => selectedSubjects.has(e.subject))
    .sort((a,b) => a.date < b.date ? -1 : 1);

  if (myExams.length === 0) {
    showToast('No exams to download');
    return;
  }

  let ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//GCSE Planner 2026//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:My GCSE Exams 2026',
    'X-WR-TIMEZONE:Europe/London',
  ];

  myExams.forEach(e => {
    const parts = e.date.split('-');
    const dateFlat = parts.join(''); // YYYYMMDD
    const startTime = e.session === 'morning' ? '090000' : '133000';

    // Parse duration into end time
    let endTime;
    if (e.duration === 'see board') {
      endTime = e.session === 'morning' ? '110000' : '153000';
    } else {
      const m = e.duration.match(/(\d+)h\s*(?:(\d+)m)?/);
      if (m) {
        const totalMins = parseInt(m[1]) * 60 + (parseInt(m[2] || '0'));
        const startMins = e.session === 'morning' ? 9*60 : 13*60 + 30;
        const endMins = startMins + totalMins;
        const endH = String(Math.floor(endMins/60)).padStart(2,'0');
        const endM = String(endMins % 60).padStart(2,'0');
        endTime = `${endH}${endM}00`;
      } else {
        endTime = e.session === 'morning' ? '110000' : '153000';
      }
    }

    const uid = `gcse-2026-${e.id}@gcse-planner`;
    const now = new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');

    ics.push('BEGIN:VEVENT');
    ics.push(`UID:${uid}`);
    ics.push(`DTSTAMP:${now}Z`);
    ics.push(`DTSTART;TZID=Europe/London:${dateFlat}T${startTime}`);
    ics.push(`DTEND;TZID=Europe/London:${dateFlat}T${endTime}`);
    ics.push(`SUMMARY:GCSE ${e.subject} — ${e.paper}`);
    ics.push(`DESCRIPTION:${e.subject} ${e.paper}\\nBoards: ${e.boards.join(', ')}\\nDuration: ${e.duration}\\n\\nAlways confirm dates and times with your school.`);
    ics.push(`CATEGORIES:GCSE Exam`);
    ics.push(`STATUS:CONFIRMED`);
    ics.push('BEGIN:VALARM');
    ics.push('TRIGGER:-P1D');
    ics.push('ACTION:DISPLAY');
    ics.push(`DESCRIPTION:Reminder: ${e.subject} exam tomorrow`);
    ics.push('END:VALARM');
    ics.push('END:VEVENT');
  });

  // Add results day
  ics.push('BEGIN:VEVENT');
  ics.push(`UID:gcse-2026-results@gcse-planner`);
  ics.push(`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'')}Z`);
  ics.push('DTSTART;VALUE=DATE:20260820');
  ics.push('DTEND;VALUE=DATE:20260821');
  ics.push('SUMMARY:🎉 GCSE Results Day 2026');
  ics.push('DESCRIPTION:GCSE Results Day — Thursday 20 August 2026. Check with your school for collection times.');
  ics.push('END:VEVENT');

  ics.push('END:VCALENDAR');

  const blob = new Blob([ics.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'my-gcse-exams-2026.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('📅 Calendar downloaded! Open it to add to your calendar app.');
}

// ─── PRINT ─────────────────────────────────────────────────────
function printTimetable() {
  if (selectedSubjects.size === 0) {
    showToast('Please select subjects first');
    return;
  }
  window.print();
}

// ─── SHARE LINK ────────────────────────────────────────────────
function copyShareLink() {
  if (selectedSubjects.size === 0) {
    showToast('Select subjects first, then share!');
    return;
  }
  const ids = [...selectedSubjects].join(',');
  const url = `${window.location.origin}${window.location.pathname}#subjects=${encodeURIComponent(ids)}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('🔗 Link copied! Share it to show your timetable.');
    });
  } else {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('🔗 Link copied!');
  }
}

// ─── TOAST ─────────────────────────────────────────────────────
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadFromURL();
  renderSubjectPicker();
  renderCalendar();
  renderMyTimetable();
  updateSelectionBar();
});
