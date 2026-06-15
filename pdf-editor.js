// ─── PDF EDITOR ──────────────────────────────────────────────────────────────
// Canvas-based editor: renders all PDF pages, allows cut-and-move of image
// regions and adding text overlays. Uses pdf.js (render) + pdf-lib (save).

const PdfEditor = (() => {

  /* ── STATE ─────────────────────────────────────────────────────────────── */
  let pdfDoc      = null;
  let fileName    = 'dokument.pdf';
  let pageData    = [];   // [{ canvas, overlay, overlayEls:[] }]
  let currentTool = 'select';
  let selectedEl  = null;
  let detectedFonts = [];

  // Cut / Erase
  let cutting   = false;
  let cutPageIdx = -1;
  let cutStart  = null;
  let cutGuide  = null;
  let cutCanvas = null;  // canvas being cut

  // Drag
  let dragging  = false;
  let dragEl    = null;
  let dragOffset = { x: 0, y: 0 };
  let dragOverlayRect = null;

  /* ── OPEN ──────────────────────────────────────────────────────────────── */
  function open(name) {
    fileName = name || 'dokument.pdf';
    document.getElementById('pdfEditorTitle').textContent = fileName;
    document.getElementById('pdfEditorPages').innerHTML = '';
    document.getElementById('pdfLoading').style.display = 'flex';
    document.getElementById('pdfEditorModal').classList.add('is-open');
    pageData = [];
    pdfDoc   = null;
    detectedFonts = [];
    updateFontSelector();   // populate with defaults immediately
    setTool('select');
    // immediately ask user to pick a file
    setTimeout(loadFromFile, 60);
  }

  /* ── FILE PICKER ───────────────────────────────────────────────────────── */
  function loadFromFile() {
    const inp = document.createElement('input');
    inp.type   = 'file';
    inp.accept = 'application/pdf,.pdf';
    inp.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) {
        document.getElementById('pdfLoading').style.display = 'none';
        return;
      }
      fileName = file.name;
      document.getElementById('pdfEditorTitle').textContent = file.name;
      const buf = await file.arrayBuffer();
      await loadBytes(buf);
    };
    inp.click();
  }

  /* ── LOAD BYTES ────────────────────────────────────────────────────────── */
  async function loadBytes(buf) {
    document.getElementById('pdfLoading').style.display = 'flex';
    document.getElementById('pdfEditorPages').innerHTML = '';
    pageData = [];
    try {
      const task = pdfjsLib.getDocument({ data: buf });
      pdfDoc = await task.promise;
      await renderAll();
    } catch (err) {
      document.getElementById('pdfLoading').style.display = 'none';
      alert('Nepodařilo se načíst PDF: ' + err.message);
    }
  }

  /* ── RENDER ALL PAGES ──────────────────────────────────────────────────── */
  async function renderAll() {
    const wrap = document.getElementById('pdfEditorPages');
    detectedFonts = [];

    const maxW  = Math.min(window.innerWidth * 0.84, 960);
    const scale = Math.max(1.0, Math.min(2.0, maxW / 800));

    for (let p = 1; p <= pdfDoc.numPages; p++) {
      const page = await pdfDoc.getPage(p);
      const vp   = page.getViewport({ scale });

      /* container */
      const container = document.createElement('div');
      container.className    = 'pdf-page-container';
      container.dataset.page = p;

      /* base canvas */
      const canvas    = document.createElement('canvas');
      canvas.className = 'pdf-page-canvas';
      canvas.width    = Math.floor(vp.width);
      canvas.height   = Math.floor(vp.height);

      /* interactive overlay */
      const overlay   = document.createElement('div');
      overlay.className = 'pdf-page-overlay';
      overlay.style.width  = canvas.width  + 'px';
      overlay.style.height = canvas.height + 'px';

      /* page number */
      const lbl = document.createElement('div');
      lbl.className   = 'pdf-page-label';
      lbl.textContent = `Strana ${p} / ${pdfDoc.numPages}`;

      container.append(canvas, overlay, lbl);
      wrap.appendChild(container);

      /* render */
      await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;

      /* detect fonts */
      try {
        const tc = await page.getTextContent();
        tc.items.forEach(it => {
          if (it.fontName) detectedFonts.push(it.fontName);
        });
      } catch (_) {}

      const idx = pageData.length;
      pageData.push({ canvas, overlay, overlayEls: [] });

      /* wire events */
      wireCanvas(canvas, idx);
      wireOverlay(overlay, idx);
    }

    updateFontSelector();
    document.getElementById('pdfLoading').style.display = 'none';
  }

  /* ── FONT DETECTION ────────────────────────────────────────────────────── */

  // Common fonts pre-loaded before any PDF is opened
  const DEFAULT_FONTS = [
    { css: 'Arial, Helvetica, sans-serif',           label: 'Arial' },
    { css: '"Times New Roman", Georgia, serif',      label: 'Times New Roman' },
    { css: 'Calibri, Verdana, sans-serif',           label: 'Calibri' },
    { css: '"Comic Sans MS", cursive',               label: 'Comic Sans' },
    { css: 'Verdana, sans-serif',                    label: 'Verdana' },
    { css: 'Tahoma, sans-serif',                     label: 'Tahoma' },
    { css: 'Georgia, serif',                         label: 'Georgia' },
    { css: '"Courier New", monospace',               label: 'Courier New' },
  ];

  function updateFontSelector() {
    const sel = document.getElementById('pdfFontFamily');
    sel.innerHTML = '';

    // detected fonts from the loaded PDF come first (if any)
    const detected = mapFonts(detectedFonts);
    const merged   = [...detected];
    const seenCss  = new Set(detected.map(f => f.css));

    // append default fonts that weren't already detected
    DEFAULT_FONTS.forEach(f => {
      if (!seenCss.has(f.css)) merged.push(f);
    });

    if (detected.length > 0) {
      // separator after detected group
      const sep = document.createElement('option');
      sep.disabled = true;
      sep.textContent = '── zjištěné z PDF ──';
      merged.splice(detected.length, 0, { _sep: sep });
    }

    merged.forEach(({ css, label, _sep }) => {
      if (_sep) { sel.appendChild(_sep); return; }
      const o = document.createElement('option');
      o.value = css; o.textContent = label;
      sel.appendChild(o);
    });
  }

  function mapFonts(names) {
    const seen = new Set();
    const out  = [];

    const add = (css, label) => {
      if (!seen.has(css)) { seen.add(css); out.push({ css, label }); }
    };

    names.forEach(n => {
      const l = n.toLowerCase().replace(/[^a-z]/g, '');
      if (l.includes('comicsans') || l.includes('comic'))
        add('"Comic Sans MS", cursive', 'Comic Sans (z PDF)');
      else if (l.includes('times') || l.includes('roman'))
        add('"Times New Roman", Georgia, serif', 'Times New Roman (z PDF)');
      else if (l.includes('helvetica') || l.includes('arial') || l.includes('sans'))
        add('Arial, Helvetica, sans-serif', 'Arial (z PDF)');
      else if (l.includes('courier') || l.includes('mono'))
        add('"Courier New", monospace', 'Courier New (z PDF)');
      else if (l.includes('calibri'))
        add('Calibri, Verdana, sans-serif', 'Calibri (z PDF)');
      else if (l.includes('verdana'))
        add('Verdana, sans-serif', 'Verdana (z PDF)');
      else if (l.includes('tahoma'))
        add('Tahoma, sans-serif', 'Tahoma (z PDF)');
      else if (l.includes('cambria'))
        add('Cambria, Georgia, serif', 'Cambria (z PDF)');
      else if (l.includes('garamond'))
        add('Garamond, Georgia, serif', 'Garamond (z PDF)');
    });

    return out;
  }

  /* ── EVENT WIRING ──────────────────────────────────────────────────────── */
  function wireCanvas(canvas, idx) {
    canvas.addEventListener('mousedown', e => {
      if (currentTool !== 'cut' && currentTool !== 'erase') return;
      e.preventDefault();
      const { x, y } = relPos(e, canvas);
      startCut(canvas, x, y, idx);
    });
  }

  function wireOverlay(overlay, idx) {
    overlay.addEventListener('mousedown', e => {
      // Delete button handled by its own click listener
      if (e.target.classList.contains('pdf-el-delete')) return;

      // Clicked empty overlay background
      if (e.target === overlay) {
        if (currentTool === 'text') {
          const { x, y } = relPos(e, overlay);
          addTextEl(x, y, idx);
        } else {
          deselect();
        }
        return;
      }

      const el = e.target.closest('.pdf-overlay-el');
      if (!el) return;

      selectEl(el);
      if (currentTool !== 'select') return;

      // Text content area → let browser handle caret/selection, no drag
      if (e.target.closest('.pdf-text-content')) return;

      // Handle bar on text element OR anywhere on image element → drag
      e.preventDefault();
      startDrag(e, el, idx);
    });
  }

  function relPos(e, el) {
    const r = el.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  /* ── TOOL ──────────────────────────────────────────────────────────────── */
  function setTool(t) {
    currentTool = t;

    document.querySelectorAll('.pdf-tool-btn[data-tool]').forEach(b => {
      b.classList.toggle('active', b.dataset.tool === t);
    });

    const fontBar = document.getElementById('pdfFontBar');
    if (fontBar) fontBar.style.display = t === 'text' ? 'flex' : 'none';

    const cur = t === 'text' ? 'text' : t === 'cut' || t === 'erase' ? 'crosshair' : 'default';
    document.querySelectorAll('.pdf-page-overlay').forEach(o => o.style.cursor = cur);
    document.querySelectorAll('.pdf-page-canvas').forEach(c => {
      c.style.cursor = t === 'cut' || t === 'erase' ? 'crosshair' : 'default';
    });

    deselect();
  }

  /* ── TEXT ELEMENT ──────────────────────────────────────────────────────── */
  function addTextEl(x, y, idx) {
    const fontFamily = document.getElementById('pdfFontFamily').value || 'Arial, sans-serif';
    const fontSize   = (document.getElementById('pdfFontSize').value || 14) + 'px';
    const color      = document.getElementById('pdfFontColor').value || '#000000';
    const bold       = document.getElementById('pdfBoldBtn').classList.contains('active');
    const italic     = document.getElementById('pdfItalicBtn').classList.contains('active');

    const wrap = document.createElement('div');
    wrap.className = 'pdf-overlay-el pdf-text-el';
    wrap.style.left = x + 'px';
    wrap.style.top  = y + 'px';

    const handle = document.createElement('div');
    handle.className   = 'pdf-el-handle';
    handle.textContent = '⠿';
    handle.title       = 'Přetáhnout';

    const content = document.createElement('div');
    content.className       = 'pdf-text-content';
    content.contentEditable = 'true';
    content.spellcheck      = false;
    content.style.fontFamily  = fontFamily;
    content.style.fontSize    = fontSize;
    content.style.color       = color;
    content.style.fontWeight  = bold   ? 'bold'   : 'normal';
    content.style.fontStyle   = italic ? 'italic' : 'normal';
    content.textContent       = '';

    wrap.append(handle, content, makeDeleteBtn(wrap, idx));
    pageData[idx].overlay.appendChild(wrap);
    pageData[idx].overlayEls.push(wrap);

    content.focus();
    selectEl(wrap);
  }

  /* ── CUT TOOL ──────────────────────────────────────────────────────────── */
  function startCut(canvas, x0, y0, idx) {
    cutting    = true;
    cutPageIdx = idx;
    cutStart   = { x: x0, y: y0 };
    cutCanvas  = canvas;

    cutGuide = document.createElement('div');
    cutGuide.className = 'pdf-cut-guide';
    cutGuide.style.left = x0 + 'px';
    cutGuide.style.top  = y0 + 'px';
    pageData[idx].overlay.appendChild(cutGuide);

    const onMove = e => {
      if (!cutting) return;
      const { x, y } = relPos(e, canvas);
      const w = x - cutStart.x, h = y - cutStart.y;
      cutGuide.style.width  = Math.abs(w) + 'px';
      cutGuide.style.height = Math.abs(h) + 'px';
      cutGuide.style.left   = (w < 0 ? x  : cutStart.x) + 'px';
      cutGuide.style.top    = (h < 0 ? y  : cutStart.y) + 'px';
    };

    const onUp = e => {
      if (!cutting) return;
      cutting = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);

      const { x: x1r, y: y1r } = relPos(e, canvas);
      const x1 = Math.min(cutStart.x, x1r), y1 = Math.min(cutStart.y, y1r);
      const w  = Math.abs(x1r - cutStart.x), h = Math.abs(y1r - cutStart.y);

      if (cutGuide) { cutGuide.remove(); cutGuide = null; }
      if (w < 5 || h < 5) return;

      const ctx = canvas.getContext('2d');

      if (currentTool === 'erase') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x1, y1, w, h);
        return;
      }

      /* CUT: capture pixels, white out, make draggable */
      const imgData = ctx.getImageData(x1, y1, w, h);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x1, y1, w, h);

      const tmp = document.createElement('canvas');
      tmp.width = w; tmp.height = h;
      tmp.getContext('2d').putImageData(imgData, 0, 0);

      const wrap = document.createElement('div');
      wrap.className = 'pdf-overlay-el pdf-image-el';
      wrap.style.left   = x1 + 'px';
      wrap.style.top    = y1 + 'px';
      wrap.style.width  = w  + 'px';
      wrap.style.height = h  + 'px';

      const img = new Image();
      img.src = tmp.toDataURL();
      img.style.cssText = 'width:100%;height:100%;display:block;pointer-events:none;';
      wrap.appendChild(img);
      wrap.appendChild(makeDeleteBtn(wrap, cutPageIdx));

      pageData[cutPageIdx].overlay.appendChild(wrap);
      pageData[cutPageIdx].overlayEls.push(wrap);

      selectEl(wrap);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }

  /* ── DRAG ──────────────────────────────────────────────────────────────── */
  function startDrag(e, el, idx) {
    e.preventDefault();
    selectEl(el);
    dragging = true;
    dragEl   = el;

    const elRect = el.getBoundingClientRect();
    dragOffset.x = e.clientX - elRect.left;
    dragOffset.y = e.clientY - elRect.top;
    dragOverlayRect = pageData[idx].overlay.getBoundingClientRect();

    const onMove = e => {
      if (!dragging) return;
      const x = e.clientX - dragOverlayRect.left - dragOffset.x;
      const y = e.clientY - dragOverlayRect.top  - dragOffset.y;
      dragEl.style.left = Math.max(0, x) + 'px';
      dragEl.style.top  = Math.max(0, y) + 'px';
    };
    const onUp = () => {
      dragging = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }

  /* ── SELECTION ─────────────────────────────────────────────────────────── */
  function selectEl(el) {
    deselect();
    selectedEl = el;
    el.classList.add('pdf-el-selected');
  }

  function deselect() {
    if (selectedEl) {
      selectedEl.classList.remove('pdf-el-selected');
      selectedEl = null;
    }
  }

  /* ── DELETE BUTTON ─────────────────────────────────────────────────────── */
  function makeDeleteBtn(wrap, idx) {
    const btn = document.createElement('button');
    btn.className   = 'pdf-el-delete';
    btn.textContent = '×';
    btn.title       = 'Smazat';
    btn.addEventListener('click', e => {
      e.stopPropagation();
      wrap.remove();
      const arr = pageData[idx].overlayEls;
      const i   = arr.indexOf(wrap);
      if (i !== -1) arr.splice(i, 1);
      if (selectedEl === wrap) selectedEl = null;
    });
    return btn;
  }

  /* ── TOGGLE BOLD / ITALIC ──────────────────────────────────────────────── */
  function toggleBold() {
    const btn = document.getElementById('pdfBoldBtn');
    btn.classList.toggle('active');
    if (selectedEl?.classList.contains('pdf-text-el')) {
      const c = selectedEl.querySelector('.pdf-text-content');
      if (c) c.style.fontWeight = btn.classList.contains('active') ? 'bold' : 'normal';
    }
  }

  function toggleItalic() {
    const btn = document.getElementById('pdfItalicBtn');
    btn.classList.toggle('active');
    if (selectedEl?.classList.contains('pdf-text-el')) {
      const c = selectedEl.querySelector('.pdf-text-content');
      if (c) c.style.fontStyle = btn.classList.contains('active') ? 'italic' : 'normal';
    }
  }

  /* ── DOWNLOAD ──────────────────────────────────────────────────────────── */
  async function download() {
    if (!pageData.length) { alert('Nejprve načtěte PDF soubor.'); return; }

    const btn = document.getElementById('pdfSaveBtn');
    btn.disabled     = true;
    btn.textContent  = '⏳ Ukládám…';

    try {
      const { PDFDocument } = PDFLib;
      const doc = await PDFDocument.create();

      for (const pd of pageData) {
        const merged = document.createElement('canvas');
        merged.width  = pd.canvas.width;
        merged.height = pd.canvas.height;
        const ctx = merged.getContext('2d');

        /* base PDF render */
        ctx.drawImage(pd.canvas, 0, 0);

        /* overlay elements */
        for (const el of pd.overlayEls) {
          if (!el.isConnected) continue;
          const x = parseFloat(el.style.left) || 0;
          const y = parseFloat(el.style.top)  || 0;

          if (el.classList.contains('pdf-image-el')) {
            const img = el.querySelector('img');
            if (img?.complete) {
              ctx.drawImage(img, x, y, el.offsetWidth, el.offsetHeight);
            }
          } else if (el.classList.contains('pdf-text-el')) {
            const contentEl = el.querySelector('.pdf-text-content');
            if (!contentEl) continue;
            const cs  = getComputedStyle(contentEl);
            const fSz = parseFloat(cs.fontSize) || 14;
            ctx.font         = `${cs.fontStyle} ${cs.fontWeight} ${fSz}px ${cs.fontFamily}`;
            ctx.fillStyle    = cs.color || '#000';
            ctx.textBaseline = 'top';
            const lineH = fSz * 1.35;
            contentEl.innerText.split('\n').forEach((line, li) => {
              ctx.fillText(line, x, y + li * lineH);
            });
          }
        }

        /* embed as PNG */
        const png = await new Promise(res => {
          merged.toBlob(b => b.arrayBuffer().then(res), 'image/png');
        });
        const pngImg = await doc.embedPng(png);
        const pg     = doc.addPage([merged.width, merged.height]);
        pg.drawImage(pngImg, { x: 0, y: 0, width: merged.width, height: merged.height });
      }

      const bytes = await doc.save();
      const url   = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
      const a     = Object.assign(document.createElement('a'), {
        href: url, download: fileName.replace(/\.pdf$/i, '') + '_upraveny.pdf'
      });
      a.click();
      URL.revokeObjectURL(url);

    } catch (err) {
      console.error(err);
      alert('Chyba při ukládání: ' + err.message);
    }

    btn.disabled    = false;
    btn.textContent = '💾 Uložit PDF';
  }

  /* ── CLOSE ─────────────────────────────────────────────────────────────── */
  function close() {
    document.getElementById('pdfEditorModal').classList.remove('is-open');
    pdfDoc    = null;
    pageData  = [];
    selectedEl = null;
  }

  /* ── PUBLIC API ────────────────────────────────────────────────────────── */
  return { open, close, setTool, download, toggleBold, toggleItalic, loadFromFile };

})();
