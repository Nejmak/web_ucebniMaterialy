// ─── DATA ───────────────────────────────────────────────────────────

const DATA = {
  1: {
    title:   'Naše škola – 1. stupeň',
    sub:     'Vítejte ve světě učení a zábavy! ✨',
    wave:    '#fef9f0',
    overlay: '#ff9a3c',
    deco:    ['✏️','🎨','⭐','🌈','📚','🦋','🖍️','🌸','🎵','🌟'],
    hesla: [
      'Učení je hra!',
      'Spolu to zvládneme!',
      'Každý den se něco nového naučíme!',
      'Buď zvídavý!',
      'Chybami se člověk učí!',
      'Ty to dokážeš!',
    ],
    tabs: [
      { name:'Prvouka',     icon:'🌍', color:'#4caf50' },
      { name:'Čtení',       icon:'📖', color:'#2196f3' },
      { name:'Psaní',       icon:'✏️', color:'#ff9800' },
      { name:'Matematika',  icon:'🔢', color:'#e91e63' },
      { name:'Hudební Vv',  icon:'🎵', color:'#9c27b0' },
      { name:'Výtvarná Vv', icon:'🎨', color:'#ff5722' },
      { name:'Tělesná Vv',  icon:'⚽', color:'#00bcd4' },
    ],
    cards: {
      'Prvouka': [
        { icon:'🌿', title:'Části rostliny',  desc:'Kořen, stonek, list a květ',   badge:'Pracovní list', c:'#4caf50' },
        { icon:'🐾', title:'Zvířata v lese',  desc:'Poznáváme lesní zvířata',       badge:'Obrázky',       c:'#4caf50' },
        { icon:'🍂', title:'Roční období',    desc:'Jaro, léto, podzim, zima',      badge:'Kvíz',          c:'#4caf50' },
        { icon:'👨‍👩‍👧', title:'Rodina',         desc:'Členové rodiny a jejich role',  badge:'Pracovní list', c:'#4caf50' },
      ],
      'Čtení': [
        { icon:'🐢', title:'Želvák a zajíček', desc:'Čtení s porozuměním',   badge:'Pohádka', c:'#2196f3' },
        { icon:'📝', title:'Abeceda',          desc:'Procvičujeme písmenka', badge:'Cvičení', c:'#2196f3' },
        { icon:'🌙', title:'Pohádka na noc',   desc:'Čteme nahlas',          badge:'Čtení',   c:'#2196f3' },
      ],
      'Psaní': [
        { icon:'✍️', title:'Velká písmena',    desc:'Psaní tiskacích písmen', badge:'Pracovní list', c:'#ff9800' },
        { icon:'📋', title:'Diktát – zvířata', desc:'Procvičujeme pravopis',  badge:'Diktát',        c:'#ff9800' },
      ],
      'Matematika': [
        { icon:'🔢', title:'Sčítání do 10',     desc:'Základní sčítání',           badge:'Cvičení',       c:'#e91e63' },
        { icon:'➖', title:'Odčítání do 20',    desc:'Procvičujeme odčítání',       badge:'Cvičení',       c:'#e91e63' },
        { icon:'🔺', title:'Geometrické tvary', desc:'Čtverec, kruh, trojúhelník', badge:'Obrázky',       c:'#e91e63' },
        { icon:'📏', title:'Měření délky',      desc:'Centimetry a metry',          badge:'Pracovní list', c:'#e91e63' },
      ],
      'Hudební Vv': [
        { icon:'🎶', title:'Písnička o jaru', desc:'Naučíme se novou písničku', badge:'Píseň',   c:'#9c27b0' },
        { icon:'🥁', title:'Rytmus',          desc:'Tleskáme rytmus',           badge:'Cvičení', c:'#9c27b0' },
      ],
      'Výtvarná Vv': [
        { icon:'🖌️', title:'Barvy duhy',          desc:'Míchání barev',  badge:'Tvoření', c:'#ff5722' },
        { icon:'🌻', title:'Malujeme slunečnici', desc:'Krok za krokem', badge:'Návod',   c:'#ff5722' },
      ],
      'Tělesná Vv': [
        { icon:'🤸', title:'Ranní rozcvička', desc:'Zahřívací cviky',       badge:'Video',    c:'#00bcd4' },
        { icon:'⚽', title:'Míčové hry',      desc:'Pravidla her s míčem', badge:'Pravidla', c:'#00bcd4' },
      ],
    },
  },

  2: {
    title:   'Základní škola – 2. stupeň',
    sub:     'Studijní materiály pro 6.–9. třídu',
    wave:    '#f0ede6',
    overlay: '#1a3a5c',
    deco:    ['📐','🔬','📚','⚗️','🗺️','💡','📊','✒️','🧪','🔭'],
    hesla: [
      'Vědomosti jsou síla',
      'Bez práce nejsou koláče',
      'Per aspera ad astra',
      'Opakování – matka moudrosti',
      'Kdo se ptá, nezabloudí',
      'Práce šlechtí člověka',
    ],
    tabs: [
      { name:'Čeština',    icon:'📝', color:'#37474f' },
      { name:'Matematika', icon:'📐', color:'#1a3a5c' },
      { name:'Angličtina', icon:'🇬🇧', color:'#2d6a4f' },
      { name:'Dějepis',    icon:'🏛️', color:'#5d4037' },
      { name:'Zeměpis',    icon:'🗺️', color:'#1565c0' },
      { name:'Fyzika',     icon:'⚡', color:'#4527a0' },
      { name:'Chemie',     icon:'⚗️', color:'#00695c' },
      { name:'Biologie',   icon:'🌿', color:'#2e7d32' },
    ],
    cards: {
      'Čeština': [
        { icon:'📖', title:'Podstatná jména', desc:'Vzory podstatných jmen',         badge:'Gramatika',  c:'#37474f' },
        { icon:'✍️', title:'Slohové práce',   desc:'Vypravování a popis',            badge:'Sloh',       c:'#37474f' },
        { icon:'📜', title:'Jan Neruda',       desc:'Malostranské povídky – rozbor', badge:'Literatura', c:'#37474f' },
        { icon:'🔤', title:'Pravopis – i/y',  desc:'Pravidla a procvičení',          badge:'Diktát',     c:'#37474f' },
      ],
      'Matematika': [
        { icon:'📐', title:'Pythagorova věta',     desc:'Výpočty pravoúhlého trojúhelníku', badge:'Geometrie',  c:'#1a3a5c' },
        { icon:'📊', title:'Lineární rovnice',     desc:'Rovnice s jednou neznámou',         badge:'Algebra',    c:'#1a3a5c' },
        { icon:'%',  title:'Procenta',             desc:'Výpočet procent ze základu',        badge:'Aritmetika', c:'#1a3a5c' },
        { icon:'🔢', title:'Mocniny a odmocniny', desc:'Základní operace',                  badge:'Cvičení',    c:'#1a3a5c' },
      ],
      'Angličtina': [
        { icon:'💬', title:'Present Perfect', desc:'Předpřítomný čas – pravidla',   badge:'Gramatika', c:'#2d6a4f' },
        { icon:'📚', title:'Slovní zásoba',   desc:'Škola a vzdělávání – 50 slov', badge:'Slovník',   c:'#2d6a4f' },
        { icon:'🎧', title:'Listening',       desc:'Konverzace u lékaře',           badge:'Poslech',   c:'#2d6a4f' },
      ],
      'Dějepis': [
        { icon:'⚔️', title:'Husitské hnutí', desc:'Příčiny a průběh husitských válek', badge:'Výpisky',    c:'#5d4037' },
        { icon:'🏰', title:'Středověk',       desc:'Feudalismus a život na hradě',      badge:'Prezentace', c:'#5d4037' },
        { icon:'⛵', title:'Velké objevy',    desc:'Columbus, Vasco da Gama',           badge:'Referát',    c:'#5d4037' },
      ],
      'Zeměpis': [
        { icon:'🌍', title:'Afrika',             desc:'Podnebí, řeky a hory Afriky', badge:'Výpisky', c:'#1565c0' },
        { icon:'🌋', title:'Litosférické desky', desc:'Pohyb desek a zemětřesení',   badge:'Teorie',  c:'#1565c0' },
        { icon:'🗺️', title:'Česká republika',   desc:'Krajské a okresní rozdělení', badge:'Mapa',    c:'#1565c0' },
      ],
      'Fyzika': [
        { icon:'⚡', title:'Ohmův zákon',      desc:'U = R × I – vzorce a příklady', badge:'Fyzika', c:'#4527a0' },
        { icon:'💡', title:'Elektrický obvod', desc:'Sériové a paralelní zapojení',  badge:'Pokusy', c:'#4527a0' },
        { icon:'🌡️', title:'Teplo a teplota', desc:'Tepelná roztažnost těles',       badge:'Teorie', c:'#4527a0' },
      ],
      'Chemie': [
        { icon:'⚗️', title:'Kyseliny a zásady',  desc:'pH, neutralizace, indikátory', badge:'Teorie',  c:'#00695c' },
        { icon:'🧪', title:'Periodická tabulka', desc:'Hlavní skupiny prvků',          badge:'Tabulka', c:'#00695c' },
        { icon:'💧', title:'Voda H₂O',           desc:'Vlastnosti a složení vody',    badge:'Pokus',   c:'#00695c' },
      ],
      'Biologie': [
        { icon:'🧬', title:'Buňka – stavba',   desc:'Rostlinná vs. živočišná buňka', badge:'Schéma',   c:'#2e7d32' },
        { icon:'🫀', title:'Oběhová soustava', desc:'Srdce, cévy a krev',             badge:'Anatomie', c:'#2e7d32' },
        { icon:'🌿', title:'Systém rostlin',   desc:'Třídění a klasifikace',           badge:'Botanika', c:'#2e7d32' },
      ],
    },
  },
};

// ─── STATE ──────────────────────────────────────────────────────────
let stage      = 1;
let hesloIdx   = 0;
let isErasing  = false;
let writeTimer = null;

// ─── INIT ────────────────────────────────────────────────────────────
function init() {
  renderBg();
  renderTabs(stage);
  renderContent(stage, DATA[stage].tabs[0].name);
  setTimeout(writeHeslo, 600);
}

// ─── STAGE SWITCH ────────────────────────────────────────────────────
function switchStage(s) {
  if (s === stage) return;
  const ov = document.getElementById('overlay');
  ov.style.background = DATA[s].overlay;
  ov.classList.add('show');

  setTimeout(() => {
    stage    = s;
    hesloIdx = 0;
    document.body.className = 's' + s;

    const d = DATA[s];
    document.getElementById('hdrTitle').textContent = d.title;
    document.getElementById('hdrSub').textContent   = d.sub;
    document.getElementById('hdrWave').querySelector('path').setAttribute('fill', d.wave);

    clearTimeout(writeTimer);
    isErasing = false;
    const surface = document.getElementById('boardSurface');
    surface.querySelectorAll('canvas, .eraser-el, .dust').forEach(el => el.remove());
    document.getElementById('chalkText').innerHTML = '';

    renderBg();
    renderTabs(s);
    renderContent(s, d.tabs[0].name);

    setTimeout(writeHeslo, 300);
    setTimeout(() => ov.classList.remove('show'), 280);
  }, 260);
}

// ─── BG EMOJI ────────────────────────────────────────────────────────
function renderBg() {
  const wrap = document.getElementById('bgWrap');
  wrap.innerHTML = '';
  DATA[stage].deco.forEach(em => {
    const el = document.createElement('div');
    el.className = 'bg-el';
    el.textContent = em;
    el.style.cssText = `
      left:${Math.random()*95}%;
      top:${Math.random()*90}%;
      font-size:${1.4 + Math.random()*2.4}rem;
      animation-duration:${14+Math.random()*14}s;
      animation-delay:${-Math.random()*14}s;
    `;
    wrap.appendChild(el);
  });
}

// ─── TABS ────────────────────────────────────────────────────────────
function renderTabs(s) {
  const wrap = document.getElementById('shanonTabs');
  wrap.innerHTML = '';
  DATA[s].tabs.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = 's-tab' + (i === 0 ? ' active' : '');
    div.innerHTML = `
      <div class="tab-ear" style="background:${t.color}">${t.icon} ${t.name}</div>
      <div class="tab-body"></div>
    `;
    div.onclick = () => {
      wrap.querySelectorAll('.s-tab').forEach(el => el.classList.remove('active'));
      div.classList.add('active');
      renderContent(s, t.name);
    };
    wrap.appendChild(div);
  });
}

// ─── CONTENT ─────────────────────────────────────────────────────────
function renderContent(s, name) {
  const box   = document.getElementById('contentBox');
  const tab   = DATA[s].tabs.find(t => t.name === name);
  const cards = DATA[s].cards[name] || [];

  box.innerHTML = `
    <div class="subj-header">
      <h2>${tab.icon} ${name}</h2>
    </div>
    <div class="materials-grid">
      ${cards.map(c => `
        <div class="m-card" style="--c:${c.c}" onclick="openCard('${c.title.replace(/'/g,"\\'")}')">
          <span class="card-icon">${c.icon}</span>
          <div class="card-title">${c.title}</div>
          <div class="card-desc">${c.desc}</div>
          <span class="card-badge">${c.badge}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function openCard(title) {
  alert(`📂 Materiál: „${title}"\n\nZde by se zobrazil obsah výukového materiálu.`);
}

// ─── BLACKBOARD: WRITE ───────────────────────────────────────────────
function writeHeslo() {
  if (isErasing) return;
  const text = DATA[stage].hesla[hesloIdx % DATA[stage].hesla.length];
  const el   = document.getElementById('chalkText');
  el.innerHTML = '';

  const cursor = document.createElement('span');
  cursor.className = 'chalk-cursor';
  el.appendChild(cursor);

  let i = 0;
  function next() {
    if (i < text.length) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.cssText = `
        display:inline-block;
        transform:translateY(${(Math.random()*3-1.5).toFixed(1)}px);
        opacity:${(.84 + Math.random()*.16).toFixed(2)};
      `;
      el.insertBefore(span, cursor);
      i++;
      writeTimer = setTimeout(next, 55 + Math.random() * 45);
    } else {
      setTimeout(() => { if (cursor.parentNode) cursor.remove(); }, 900);
      writeTimer = setTimeout(autoErase, 900 + 3500);
    }
  }
  next();
}

// ─── BLACKBOARD: ERASER ──────────────────────────────────────────────
//
// Measures the actual text character positions (span bounding rects),
// then sends the felt eraser in vertical column strokes across only
// that area. Canvas accumulates board-colour paint each rAF frame,
// gradually covering the chalk text.
//
function autoErase() {
  if (isErasing) return;
  isErasing = true;

  const surface = document.getElementById('boardSurface');
  const textEl  = document.getElementById('chalkText');
  const W = surface.offsetWidth;
  const H = surface.offsetHeight;
  const surfR = surface.getBoundingClientRect();

  // ── Measure actual character positions (not the flex-container) ──
  const spans = Array.from(textEl.querySelectorAll('span:not(.chalk-cursor)'));
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  if (spans.length > 0) {
    spans.forEach(sp => {
      const r = sp.getBoundingClientRect();
      if (r.width === 0) return;
      minX = Math.min(minX, r.left);
      minY = Math.min(minY, r.top);
      maxX = Math.max(maxX, r.right);
      maxY = Math.max(maxY, r.bottom);
    });
  }
  // Fallback to container if measurement failed
  if (!isFinite(minX)) {
    const r = textEl.getBoundingClientRect();
    minX = r.left; minY = r.top; maxX = r.right; maxY = r.bottom;
  }

  // Convert to surface-local coordinates and add padding
  const PAD_X = 22, PAD_Y = 14;
  const boxL = Math.max(0, minX - surfR.left - PAD_X);
  const boxR = Math.min(W, maxX - surfR.left + PAD_X);
  const boxT = Math.max(0, minY - surfR.top  - PAD_Y);
  const boxB = Math.min(H, maxY - surfR.top  + PAD_Y);
  const boxW = boxR - boxL;

  // ── Eraser dimensions (landscape felt eraser) ──
  const EW = Math.min(92, W * 0.13);   // long side (horizontal)
  const EH = Math.round(EW * 0.37);    // short side (vertical)

  // ── Canvas overlay — persists all paint between rAF frames ──
  const canvas = document.createElement('canvas');
  canvas.width  = W;
  canvas.height = H;
  canvas.style.cssText = 'position:absolute;top:0;left:0;z-index:6;pointer-events:none;';
  surface.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  // ── Visible felt eraser DOM element ──
  const eraser = document.createElement('div');
  eraser.className = 'eraser-el';
  eraser.style.width   = `${EW}px`;
  eraser.style.height  = `${EH}px`;
  eraser.style.display = 'none';
  surface.appendChild(eraser);

  // ── Column layout ──
  // Number of vertical passes needed to cover text width with ~15% overlap.
  const numCols = Math.max(4, Math.min(7, Math.ceil(boxW / (EW * 0.85)) + 1));
  const colStep = numCols > 1 ? boxW / (numCols - 1) : 0;

  const COL_DUR   = 720;  // ms per stroke (slow & deliberate)
  const COL_DELAY = 500;  // ms between column starts

  for (let i = 0; i < numCols; i++) {
    const colX  = boxL + i * colStep;          // horizontal centre of this column
    const dir   = i % 2 === 0 ? 1 : -1;        // alternate ↓ and ↑
    const alpha = 0.44 + i * (0.30 / Math.max(numCols - 1, 1)); // 0.44 → 0.74

    setTimeout(() => {
      const startY = dir > 0 ? boxT - EH     : boxB + EH;
      const endY   = dir > 0 ? boxB + EH     : boxT - EH;
      const t0     = performance.now();

      eraser.style.display = '';

      function frame(now) {
        const t    = Math.min((now - t0) / COL_DUR, 1);
        // ease-in-out: starts and ends gently, like a real hand motion
        const ease = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
        const cy   = startY + (endY - startY) * ease;

        // Gentle left-right wobble — mimics natural hand pressure variation
        const wobble = Math.sin(t * Math.PI * 3.5) * 6;
        const drawX  = colX + wobble;

        // Sub-pixel jitter for the board-contact feel
        const jx = (Math.random() - 0.5) * 2.4;
        const jy = (Math.random() - 0.5) * 2.4;

        // Move the DOM eraser
        eraser.style.left = `${drawX - EW / 2 + jx}px`;
        eraser.style.top  = `${cy    - EH / 2 + jy}px`;

        // Paint board colour on canvas at current eraser position
        ctx.fillStyle = `rgba(36,59,39,${alpha})`;
        ctx.fillRect(drawX - EW / 2, cy - EH / 2, EW, EH);

        // Chalk dust falls from the eraser's bottom edge
        if (Math.random() < 0.14) {
          const dx = drawX + (Math.random() - 0.5) * EW * 0.7;
          const dy = cy + EH * 0.48;
          spawnDust(surface, dx / W * 100, dy / H * 100);
        }

        if (t < 1) requestAnimationFrame(frame);
      }

      requestAnimationFrame(frame);
    }, i * COL_DELAY);
  }

  // ── Cleanup after last column finishes ──
  const cleanAt = (numCols - 1) * COL_DELAY + COL_DUR + 360;
  setTimeout(() => {
    textEl.innerHTML = '';
    canvas.remove();
    eraser.remove();
    isErasing = false;
    hesloIdx  = (hesloIdx + 1) % DATA[stage].hesla.length;
    writeTimer = setTimeout(writeHeslo, 520);
  }, cleanAt);
}

// ─── HELPERS ─────────────────────────────────────────────────────────
function spawnDust(surface, leftPct, topPct) {
  const p = document.createElement('div');
  p.className = 'dust';
  p.style.left = `${leftPct.toFixed(1)}%`;
  p.style.top  = `${topPct.toFixed(1)}%`;
  p.style.setProperty('--dx', `${((Math.random() - 0.5) * 14).toFixed(1)}px`);
  surface.appendChild(p);
  setTimeout(() => { if (p.parentNode) p.remove(); }, 650);
}

// ─── START ───────────────────────────────────────────────────────────
init();
