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
        { icon:'🌿', title:'Části rostliny',  desc:'Kořen, stonek, list a květ',  c:'#4caf50',
          files:[
            { icon:'📄', name:'Pracovní list – části rostliny.pdf',  type:'PDF',      size:'1.2 MB' },
            { icon:'🖼️', name:'Diagram – stavba rostliny.jpg',       type:'Obrázek',  size:'560 KB' },
            { icon:'📝', name:'Doplňovačka – pojmy rostlin.docx',    type:'Dokument', size:'240 KB' },
            { icon:'🎯', name:'Kvíz – poznej části rostliny.pdf',    type:'Test',     size:'185 KB' },
          ]},
        { icon:'🐾', title:'Zvířata v lese',  desc:'Poznáváme lesní zvířata',      c:'#4caf50',
          files:[
            { icon:'📄', name:'Encyklopedie lesních zvířat.pdf',     type:'PDF',      size:'4.2 MB' },
            { icon:'🖼️', name:'Fotoalbum – zvířata lesa.jpg',        type:'Obrázek',  size:'3.1 MB' },
            { icon:'📝', name:'Pracovní list – kdo kde žije.docx',   type:'Dokument', size:'380 KB' },
            { icon:'🎯', name:'Test – urči lesní zvíře.pdf',         type:'Test',     size:'290 KB' },
            { icon:'🎬', name:'Video – život v lese.mp4',            type:'Video',    size:'12 MB'  },
          ]},
        { icon:'🍂', title:'Roční období',    desc:'Jaro, léto, podzim, zima',     c:'#4caf50',
          files:[
            { icon:'📊', name:'Přehled – roční období.pptx',         type:'Prezentace', size:'3.1 MB' },
            { icon:'📝', name:'Pracovní list – jaro a léto.pdf',     type:'PDF',        size:'1.4 MB' },
            { icon:'📝', name:'Pracovní list – podzim a zima.pdf',   type:'PDF',        size:'1.1 MB' },
            { icon:'🎯', name:'Kvíz – roční období.pdf',             type:'Test',       size:'210 KB' },
          ]},
        { icon:'👨‍👩‍👧', title:'Rodina',        desc:'Členové rodiny a jejich role', c:'#4caf50',
          files:[
            { icon:'📝', name:'Pracovní list – moje rodina.pdf',     type:'PDF',      size:'980 KB' },
            { icon:'🖼️', name:'Šablona – rodinný strom.pdf',         type:'PDF',      size:'540 KB' },
            { icon:'📖', name:'Čtení – příběh o rodině.pdf',         type:'Dokument', size:'720 KB' },
          ]},
      ],
      'Čtení': [
        { icon:'🐢', title:'Želvák a zajíček', desc:'Čtení s porozuměním',   c:'#2196f3',
          files:[
            { icon:'📄', name:'Pohádka – Želvák a zajíček.pdf',      type:'PDF',      size:'920 KB' },
            { icon:'📝', name:'Otázky k textu.docx',                 type:'Dokument', size:'180 KB' },
            { icon:'🎯', name:'Test porozumění – pohádka.pdf',       type:'Test',     size:'220 KB' },
          ]},
        { icon:'📝', title:'Abeceda',          desc:'Procvičujeme písmenka', c:'#2196f3',
          files:[
            { icon:'📄', name:'Abeceda – přehledná tabulka.pdf',     type:'PDF',      size:'680 KB' },
            { icon:'🖼️', name:'Písmena – ilustrovaná abeceda.jpg',   type:'Obrázek',  size:'2.4 MB' },
            { icon:'📝', name:'Cvičení – řazení slov dle abecedy.docx', type:'Dokument', size:'315 KB' },
            { icon:'🎯', name:'Kvíz – znáš abecedu?.pdf',            type:'Test',     size:'195 KB' },
          ]},
        { icon:'🌙', title:'Pohádka na noc',   desc:'Čteme nahlas',          c:'#2196f3',
          files:[
            { icon:'📄', name:'Pohádky – sbírka pro nejmenší.pdf',   type:'PDF',      size:'2.1 MB' },
            { icon:'🎵', name:'Nahrávka – pohádka na noc.mp3',       type:'Audio',    size:'8.4 MB' },
            { icon:'📝', name:'Otázky k pohádce.docx',               type:'Dokument', size:'140 KB' },
          ]},
      ],
      'Psaní': [
        { icon:'✍️', title:'Velká písmena',    desc:'Psaní tiskacích písmen', c:'#ff9800',
          files:[
            { icon:'📄', name:'Pracovní list – velká tiskací písmena.pdf', type:'PDF',      size:'1.5 MB' },
            { icon:'📝', name:'Cvičení – opis vět s velkými písmeny.docx', type:'Dokument', size:'270 KB' },
            { icon:'🖼️', name:'Vzory písma – ukázky.png',                  type:'Obrázek',  size:'780 KB' },
            { icon:'🎯', name:'Test – velká a malá písmena.pdf',            type:'Test',     size:'200 KB' },
          ]},
        { icon:'📋', title:'Diktát – zvířata', desc:'Procvičujeme pravopis',  c:'#ff9800',
          files:[
            { icon:'📄', name:'Diktát – zvířata (text).pdf',         type:'PDF',      size:'420 KB' },
            { icon:'🎵', name:'Diktát – zvukový záznam.mp3',         type:'Audio',    size:'5.2 MB' },
            { icon:'📝', name:'Klíč – správné odpovědi.docx',        type:'Dokument', size:'160 KB' },
          ]},
      ],
      'Matematika': [
        { icon:'🔢', title:'Sčítání do 10',     desc:'Základní sčítání',           c:'#e91e63',
          files:[
            { icon:'📄', name:'Pracovní list – sčítání do 10 (sada 1).pdf',  type:'PDF',      size:'1.1 MB' },
            { icon:'📄', name:'Pracovní list – sčítání do 10 (sada 2).pdf',  type:'PDF',      size:'980 KB' },
            { icon:'📄', name:'Pracovní list – sčítání do 10 (sada 3).pdf',  type:'PDF',      size:'1.0 MB' },
            { icon:'📊', name:'Součtová tabulka 1–10.xlsx',                  type:'Tabulka',  size:'185 KB' },
            { icon:'📊', name:'Číselná osa – přehledová tabulka.xlsx',       type:'Tabulka',  size:'210 KB' },
            { icon:'🎯', name:'Cvičení – příklady do 10 (lehké).pdf',        type:'Test',     size:'620 KB' },
            { icon:'🎯', name:'Cvičení – příklady do 10 (těžší).pdf',        type:'Test',     size:'760 KB' },
            { icon:'🎯', name:'Písemná práce – sčítání.pdf',                 type:'Test',     size:'430 KB' },
            { icon:'🎬', name:'Video – sčítání na příkladech.mp4',           type:'Video',    size:'18 MB'  },
            { icon:'🎬', name:'Video – sčítání pomocí prstů.mp4',            type:'Video',    size:'11 MB'  },
            { icon:'📝', name:'Domácí úkol – sčítání.docx',                  type:'Dokument', size:'140 KB' },
            { icon:'🖼️', name:'Plakát – čísla a počty 1–10.jpg',             type:'Obrázek',  size:'2.4 MB' },
          ]},
        { icon:'➖', title:'Odčítání do 20',    desc:'Procvičujeme odčítání',      c:'#e91e63',
          files:[
            { icon:'📄', name:'Pracovní list – odčítání do 20.pdf',  type:'PDF',      size:'1.2 MB' },
            { icon:'📝', name:'Cvičení – odčítací příklady.docx',    type:'Dokument', size:'225 KB' },
            { icon:'🎯', name:'Test – odčítání do 20.pdf',           type:'Test',     size:'640 KB' },
            { icon:'🎬', name:'Video – odčítání na číselné ose.mp4', type:'Video',    size:'14 MB'  },
          ]},
        { icon:'🔺', title:'Geometrické tvary', desc:'Čtverec, kruh, trojúhelník', c:'#e91e63',
          files:[
            { icon:'📄', name:'Přehled geometrických tvarů.pdf',     type:'PDF',      size:'2.3 MB' },
            { icon:'🖼️', name:'Plakát – tvary v okolí.jpg',          type:'Obrázek',  size:'3.8 MB' },
            { icon:'📝', name:'Pracovní list – rozpoznávání tvarů.docx', type:'Dokument', size:'310 KB' },
            { icon:'🎯', name:'Kvíz – pojmenuj tvar.pdf',            type:'Test',     size:'390 KB' },
          ]},
        { icon:'📏', title:'Měření délky',      desc:'Centimetry a metry',         c:'#e91e63',
          files:[
            { icon:'📄', name:'Pracovní list – měření délky.pdf',    type:'PDF',      size:'980 KB' },
            { icon:'📝', name:'Úlohy – převody cm a m.docx',         type:'Dokument', size:'195 KB' },
            { icon:'🎯', name:'Test – měření a délky.pdf',           type:'Test',     size:'450 KB' },
          ]},
      ],
      'Hudební Vv': [
        { icon:'🎶', title:'Písnička o jaru', desc:'Naučíme se novou písničku', c:'#9c27b0',
          files:[
            { icon:'🎵', name:'Písnička o jaru – nahrávka.mp3',      type:'Audio',    size:'6.8 MB' },
            { icon:'📄', name:'Noty a text – Přišlo jaro.pdf',       type:'PDF',      size:'820 KB' },
            { icon:'🎬', name:'Video – zpíváme spolu.mp4',           type:'Video',    size:'22 MB'  },
          ]},
        { icon:'🥁', title:'Rytmus',          desc:'Tleskáme rytmus',           c:'#9c27b0',
          files:[
            { icon:'📄', name:'Rytmická cvičení – pracovní list.pdf', type:'PDF',     size:'740 KB' },
            { icon:'🎵', name:'Ukázky rytmu – poslechové příklady.mp3', type:'Audio', size:'9.2 MB' },
            { icon:'📝', name:'Rytmické notace – doplňovačka.docx',  type:'Dokument', size:'210 KB' },
          ]},
      ],
      'Výtvarná Vv': [
        { icon:'🖌️', title:'Barvy duhy',          desc:'Míchání barev',  c:'#ff5722',
          files:[
            { icon:'📊', name:'Prezentace – barevný kruh.pptx',      type:'Prezentace', size:'5.4 MB' },
            { icon:'🖼️', name:'Fotopostup – míchání barev.jpg',      type:'Obrázek',    size:'2.8 MB' },
            { icon:'📝', name:'Pracovní list – primární barvy.docx', type:'Dokument',   size:'295 KB' },
          ]},
        { icon:'🌻', title:'Malujeme slunečnici', desc:'Krok za krokem', c:'#ff5722',
          files:[
            { icon:'📄', name:'Postup malování – slunečnice.pdf',    type:'PDF',      size:'1.6 MB' },
            { icon:'🎬', name:'Video – malujeme spolu.mp4',          type:'Video',    size:'34 MB'  },
            { icon:'🖼️', name:'Referenční obrázek – slunečnice.jpg', type:'Obrázek',  size:'1.2 MB' },
          ]},
      ],
      'Tělesná Vv': [
        { icon:'🤸', title:'Ranní rozcvička', desc:'Zahřívací cviky',       c:'#00bcd4',
          files:[
            { icon:'🎬', name:'Video – ranní rozcvička 10 min.mp4',  type:'Video',    size:'28 MB'  },
            { icon:'📄', name:'Popis cviků – ilustrovaný postup.pdf', type:'PDF',     size:'2.1 MB' },
            { icon:'📝', name:'Deník pohybu – šablona.docx',         type:'Dokument', size:'165 KB' },
          ]},
        { icon:'⚽', title:'Míčové hry',      desc:'Pravidla her s míčem', c:'#00bcd4',
          files:[
            { icon:'📄', name:'Pravidla míčových her.pdf',           type:'PDF',      size:'1.4 MB' },
            { icon:'🖼️', name:'Hřiště – nákres hřiště.png',         type:'Obrázek',  size:'640 KB' },
            { icon:'📝', name:'Bezpečnostní pravidla – karta.docx',  type:'Dokument', size:'190 KB' },
          ]},
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
        { icon:'📖', title:'Podstatná jména', desc:'Vzory podstatných jmen',         c:'#37474f',
          files:[
            { icon:'📄', name:'Vzory podstatných jmen – přehled.pdf',     type:'PDF',        size:'1.8 MB' },
            { icon:'📊', name:'Prezentace – skloňování vzorů.pptx',       type:'Prezentace', size:'4.2 MB' },
            { icon:'📝', name:'Cvičení – doplňování vzorů.docx',          type:'Dokument',   size:'285 KB' },
            { icon:'🎯', name:'Test – podstatná jména a vzory.pdf',       type:'Test',       size:'520 KB' },
            { icon:'📖', name:'Výpisky – gramatická pravidla.pdf',        type:'PDF',        size:'740 KB' },
          ]},
        { icon:'✍️', title:'Slohové práce',   desc:'Vypravování a popis',            c:'#37474f',
          files:[
            { icon:'📄', name:'Vypravování – ukázkové práce.pdf',         type:'PDF',        size:'1.4 MB' },
            { icon:'📝', name:'Osnova – jak psát popis.docx',             type:'Dokument',   size:'220 KB' },
            { icon:'📊', name:'Prezentace – druhy slohových prací.pptx',  type:'Prezentace', size:'3.6 MB' },
            { icon:'🎯', name:'Zadání – slohová práce (zkoušková).pdf',   type:'Test',       size:'180 KB' },
          ]},
        { icon:'📜', title:'Jan Neruda',       desc:'Malostranské povídky – rozbor', c:'#37474f',
          files:[
            { icon:'📄', name:'Literární rozbor – Malostranské povídky.pdf', type:'PDF',     size:'2.1 MB' },
            { icon:'📝', name:'Výpisky – Jan Neruda (životopis).docx',    type:'Dokument',   size:'340 KB' },
            { icon:'📊', name:'Prezentace – dílo J. Nerudy.pptx',         type:'Prezentace', size:'6.8 MB' },
            { icon:'🎯', name:'Test – Literatura 19. století.pdf',         type:'Test',       size:'380 KB' },
          ]},
        { icon:'🔤', title:'Pravopis – i/y',  desc:'Pravidla a procvičení',          c:'#37474f',
          files:[
            { icon:'📄', name:'Pravidla pravopisu i/y – přehled.pdf',     type:'PDF',        size:'960 KB' },
            { icon:'📝', name:'Cvičení – vyjmenovaná slova.docx',         type:'Dokument',   size:'310 KB' },
            { icon:'🎯', name:'Diktát – pravopis i/y (1).pdf',            type:'Test',       size:'280 KB' },
            { icon:'🎯', name:'Diktát – pravopis i/y (2).pdf',            type:'Test',       size:'265 KB' },
            { icon:'📊', name:'Tabulka – vyjmenovaná slova.xlsx',         type:'Tabulka',    size:'195 KB' },
          ]},
      ],
      'Matematika': [
        { icon:'📐', title:'Pythagorova věta',     desc:'Výpočty pravoúhlého trojúhelníku', c:'#1a3a5c',
          files:[
            { icon:'📄', name:'Pythagorova věta – teorie a příklady.pdf', type:'PDF',        size:'2.4 MB' },
            { icon:'📊', name:'Prezentace – odvození věty.pptx',          type:'Prezentace', size:'5.1 MB' },
            { icon:'📝', name:'Pracovní list – výpočty.docx',             type:'Dokument',   size:'290 KB' },
            { icon:'🎯', name:'Test – Pythagorova věta.pdf',              type:'Test',       size:'420 KB' },
            { icon:'🎬', name:'Video – řešené příklady.mp4',              type:'Video',      size:'25 MB'  },
          ]},
        { icon:'📊', title:'Lineární rovnice',     desc:'Rovnice s jednou neznámou',         c:'#1a3a5c',
          files:[
            { icon:'📄', name:'Lineární rovnice – postup řešení.pdf',     type:'PDF',        size:'1.7 MB' },
            { icon:'📝', name:'Sbírka úloh – lineární rovnice.docx',      type:'Dokument',   size:'380 KB' },
            { icon:'🎯', name:'Písemná práce – rovnice.pdf',              type:'Test',       size:'310 KB' },
            { icon:'🎬', name:'Video – rovnice krok za krokem.mp4',       type:'Video',      size:'19 MB'  },
          ]},
        { icon:'%',  title:'Procenta',             desc:'Výpočet procent ze základu',        c:'#1a3a5c',
          files:[
            { icon:'📄', name:'Procenta – teorie a vzorce.pdf',           type:'PDF',        size:'1.3 MB' },
            { icon:'📝', name:'Slovní úlohy – procenta (sada 1).docx',    type:'Dokument',   size:'265 KB' },
            { icon:'📝', name:'Slovní úlohy – procenta (sada 2).docx',    type:'Dokument',   size:'240 KB' },
            { icon:'🎯', name:'Test – procenta a úroky.pdf',              type:'Test',       size:'350 KB' },
          ]},
        { icon:'🔢', title:'Mocniny a odmocniny', desc:'Základní operace',                   c:'#1a3a5c',
          files:[
            { icon:'📄', name:'Mocniny – přehled pravidel.pdf',           type:'PDF',        size:'880 KB' },
            { icon:'📊', name:'Tabulka mocnin a odmocnin.xlsx',           type:'Tabulka',    size:'145 KB' },
            { icon:'🎯', name:'Procvičování – mocniny.pdf',               type:'Test',       size:'290 KB' },
          ]},
      ],
      'Angličtina': [
        { icon:'💬', title:'Present Perfect', desc:'Předpřítomný čas – pravidla',   c:'#2d6a4f',
          files:[
            { icon:'📄', name:'Present Perfect – gramatika.pdf',          type:'PDF',        size:'1.5 MB' },
            { icon:'📊', name:'Prezentace – tvorba a použití.pptx',       type:'Prezentace', size:'4.4 MB' },
            { icon:'📝', name:'Cvičení – doplňování vazeb.docx',          type:'Dokument',   size:'275 KB' },
            { icon:'🎯', name:'Test – Present Perfect.pdf',               type:'Test',       size:'320 KB' },
          ]},
        { icon:'📚', title:'Slovní zásoba',   desc:'Škola a vzdělávání – 50 slov', c:'#2d6a4f',
          files:[
            { icon:'📄', name:'Slovní zásoba – School (50 words).pdf',    type:'PDF',        size:'780 KB' },
            { icon:'🎵', name:'Výslovnost – poslech slov.mp3',            type:'Audio',      size:'4.6 MB' },
            { icon:'🎯', name:'Kvíz – přeložte slova.pdf',               type:'Test',       size:'210 KB' },
          ]},
        { icon:'🎧', title:'Listening',       desc:'Konverzace u lékaře',           c:'#2d6a4f',
          files:[
            { icon:'🎵', name:'Listening – At the doctor\'s.mp3',         type:'Audio',      size:'7.2 MB' },
            { icon:'📝', name:'Otázky k poslechu.docx',                   type:'Dokument',   size:'185 KB' },
            { icon:'📄', name:'Přepis – At the doctor\'s.pdf',            type:'PDF',        size:'340 KB' },
          ]},
      ],
      'Dějepis': [
        { icon:'⚔️', title:'Husitské hnutí', desc:'Příčiny a průběh husitských válek', c:'#5d4037',
          files:[
            { icon:'📄', name:'Husitské hnutí – výpisky.pdf',             type:'PDF',        size:'2.6 MB' },
            { icon:'📊', name:'Prezentace – Husité a jejich boje.pptx',   type:'Prezentace', size:'8.4 MB' },
            { icon:'🖼️', name:'Mapa – bitevní pole husitů.jpg',           type:'Obrázek',    size:'3.2 MB' },
            { icon:'🎯', name:'Test – husitské hnutí.pdf',                type:'Test',       size:'460 KB' },
          ]},
        { icon:'🏰', title:'Středověk',       desc:'Feudalismus a život na hradě',    c:'#5d4037',
          files:[
            { icon:'📄', name:'Středověk – přehled období.pdf',           type:'PDF',        size:'3.1 MB' },
            { icon:'📊', name:'Prezentace – život na hradě.pptx',         type:'Prezentace', size:'9.2 MB' },
            { icon:'🖼️', name:'Schéma – feudální pyramida.jpg',           type:'Obrázek',    size:'1.8 MB' },
            { icon:'🎯', name:'Test – středověká společnost.pdf',         type:'Test',       size:'390 KB' },
          ]},
        { icon:'⛵', title:'Velké objevy',    desc:'Columbus, Vasco da Gama',         c:'#5d4037',
          files:[
            { icon:'📄', name:'Velké zámořské objevy – přehled.pdf',      type:'PDF',        size:'2.4 MB' },
            { icon:'🖼️', name:'Mapa – cesty mořeplavců.jpg',             type:'Obrázek',    size:'4.1 MB' },
            { icon:'📝', name:'Referát – Columbus a jeho cesty.docx',     type:'Dokument',   size:'410 KB' },
          ]},
      ],
      'Zeměpis': [
        { icon:'🌍', title:'Afrika',             desc:'Podnebí, řeky a hory Afriky', c:'#1565c0',
          files:[
            { icon:'📄', name:'Afrika – přehled fyzické geografie.pdf',   type:'PDF',        size:'3.4 MB' },
            { icon:'🖼️', name:'Mapa Afriky – řeky a hory.jpg',           type:'Obrázek',    size:'5.2 MB' },
            { icon:'📝', name:'Výpisky – podnebné pásy Afriky.docx',      type:'Dokument',   size:'360 KB' },
            { icon:'🎯', name:'Slepá mapa – Afrika.pdf',                  type:'Test',       size:'1.1 MB' },
          ]},
        { icon:'🌋', title:'Litosférické desky', desc:'Pohyb desek a zemětřesení',   c:'#1565c0',
          files:[
            { icon:'📄', name:'Litosférické desky – teorie.pdf',          type:'PDF',        size:'2.8 MB' },
            { icon:'🖼️', name:'Schéma – pohyb desek.jpg',                type:'Obrázek',    size:'2.4 MB' },
            { icon:'🎬', name:'Video – tektonika desek.mp4',              type:'Video',      size:'31 MB'  },
            { icon:'🎯', name:'Test – zemětřesení a sopky.pdf',           type:'Test',       size:'340 KB' },
          ]},
        { icon:'🗺️', title:'Česká republika',   desc:'Krajské a okresní rozdělení', c:'#1565c0',
          files:[
            { icon:'📄', name:'Kraje ČR – přehled.pdf',                   type:'PDF',        size:'1.9 MB' },
            { icon:'🖼️', name:'Mapa krajů a okresů ČR.jpg',              type:'Obrázek',    size:'4.8 MB' },
            { icon:'🎯', name:'Slepá mapa ČR.pdf',                        type:'Test',       size:'1.4 MB' },
          ]},
      ],
      'Fyzika': [
        { icon:'⚡', title:'Ohmův zákon',      desc:'U = R × I – vzorce a příklady', c:'#4527a0',
          files:[
            { icon:'📄', name:'Ohmův zákon – vzorce a příklady.pdf',      type:'PDF',        size:'1.6 MB' },
            { icon:'📊', name:'Prezentace – elektrické obvody.pptx',       type:'Prezentace', size:'4.8 MB' },
            { icon:'📝', name:'Výpočty – příklady k Ohmovu zákonu.docx',  type:'Dokument',   size:'315 KB' },
            { icon:'🎯', name:'Test – Ohmův zákon.pdf',                   type:'Test',       size:'280 KB' },
          ]},
        { icon:'💡', title:'Elektrický obvod', desc:'Sériové a paralelní zapojení',  c:'#4527a0',
          files:[
            { icon:'📄', name:'Zapojení obvodů – teorie.pdf',             type:'PDF',        size:'1.9 MB' },
            { icon:'🖼️', name:'Schémata – sériové a paralelní zapojení.jpg', type:'Obrázek', size:'1.4 MB' },
            { icon:'🎬', name:'Video – sestavujeme obvod.mp4',            type:'Video',      size:'22 MB'  },
          ]},
        { icon:'🌡️', title:'Teplo a teplota', desc:'Tepelná roztažnost těles',       c:'#4527a0',
          files:[
            { icon:'📄', name:'Tepelná roztažnost – přehled.pdf',         type:'PDF',        size:'1.4 MB' },
            { icon:'📝', name:'Laboratorní protokol – teplotní roztažnost.docx', type:'Dokument', size:'240 KB' },
            { icon:'🎯', name:'Test – teplo a teplota.pdf',               type:'Test',       size:'295 KB' },
          ]},
      ],
      'Chemie': [
        { icon:'⚗️', title:'Kyseliny a zásady',  desc:'pH, neutralizace, indikátory', c:'#00695c',
          files:[
            { icon:'📄', name:'Kyseliny a zásady – teorie.pdf',           type:'PDF',        size:'2.2 MB' },
            { icon:'📊', name:'Prezentace – pH a neutralizace.pptx',      type:'Prezentace', size:'5.6 MB' },
            { icon:'📝', name:'Laboratorní protokol – lakmusové papírky.docx', type:'Dokument', size:'290 KB' },
            { icon:'🎯', name:'Test – kyseliny, zásady, pH.pdf',          type:'Test',       size:'370 KB' },
          ]},
        { icon:'🧪', title:'Periodická tabulka', desc:'Hlavní skupiny prvků',          c:'#00695c',
          files:[
            { icon:'📄', name:'Periodická tabulka – pdf verze.pdf',       type:'PDF',        size:'3.4 MB' },
            { icon:'🖼️', name:'Periodická tabulka – plakát A3.jpg',       type:'Obrázek',    size:'6.1 MB' },
            { icon:'📝', name:'Cvičení – vlastnosti prvků.docx',          type:'Dokument',   size:'320 KB' },
            { icon:'🎯', name:'Test – periodická tabulka.pdf',            type:'Test',       size:'410 KB' },
          ]},
        { icon:'💧', title:'Voda H₂O',           desc:'Vlastnosti a složení vody',    c:'#00695c',
          files:[
            { icon:'📄', name:'Voda – fyzikální a chemické vlastnosti.pdf', type:'PDF',      size:'1.8 MB' },
            { icon:'🎬', name:'Video – elektrolýza vody.mp4',             type:'Video',      size:'16 MB'  },
            { icon:'📝', name:'Laboratorní pokus – vlastnosti vody.docx', type:'Dokument',   size:'265 KB' },
          ]},
      ],
      'Biologie': [
        { icon:'🧬', title:'Buňka – stavba',   desc:'Rostlinná vs. živočišná buňka', c:'#2e7d32',
          files:[
            { icon:'📄', name:'Stavba buňky – přehled.pdf',               type:'PDF',        size:'2.9 MB' },
            { icon:'🖼️', name:'Schéma – rostlinná buňka.jpg',             type:'Obrázek',    size:'4.2 MB' },
            { icon:'🖼️', name:'Schéma – živočišná buňka.jpg',            type:'Obrázek',    size:'3.8 MB' },
            { icon:'📝', name:'Porovnání – buňky tabulka.docx',           type:'Dokument',   size:'240 KB' },
            { icon:'🎯', name:'Test – stavba buňky.pdf',                  type:'Test',       size:'395 KB' },
          ]},
        { icon:'🫀', title:'Oběhová soustava', desc:'Srdce, cévy a krev',             c:'#2e7d32',
          files:[
            { icon:'📄', name:'Oběhová soustava – anatomie.pdf',          type:'PDF',        size:'3.6 MB' },
            { icon:'🖼️', name:'Diagram – průtok krve srdcem.jpg',         type:'Obrázek',    size:'5.1 MB' },
            { icon:'🎬', name:'Video – jak bije srdce.mp4',               type:'Video',      size:'28 MB'  },
            { icon:'🎯', name:'Test – oběhová soustava.pdf',              type:'Test',       size:'440 KB' },
          ]},
        { icon:'🌿', title:'Systém rostlin',   desc:'Třídění a klasifikace',           c:'#2e7d32',
          files:[
            { icon:'📄', name:'Systém rostlinné říše – přehled.pdf',      type:'PDF',        size:'2.2 MB' },
            { icon:'📊', name:'Prezentace – klasifikace rostlin.pptx',    type:'Prezentace', size:'7.3 MB' },
            { icon:'🎯', name:'Test – systém rostlin.pdf',                type:'Test',       size:'350 KB' },
          ]},
      ],
    },
  },
};

// ─── STATE ──────────────────────────────────────────────────────────
let stage      = 1;
let hesloIdx   = 0;
let isErasing  = false;
let writeTimer = null;

// active cards for the binder
let currentCards = [];

// ─── INIT ────────────────────────────────────────────────────────────
function init() {
  renderBg();
  renderTabs(stage);
  renderContent(stage, DATA[stage].tabs[0].name);
  setTimeout(writeHeslo, 600);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBinder(); });
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

// ─── CONTENT – binder grid ───────────────────────────────────────────
function renderContent(s, name) {
  const box   = document.getElementById('contentBox');
  const tab   = DATA[s].tabs.find(t => t.name === name);
  const cards = DATA[s].cards[name] || [];
  currentCards = cards;

  box.innerHTML = `
    <div class="subj-header">
      <h2>${tab.icon} ${name}</h2>
    </div>
    <div class="materials-grid">
      ${cards.map((c, i) => binderCardHTML(c, i)).join('')}
    </div>
  `;
}

function binderCardHTML(c, i) {
  const n = (c.files || []).length;
  const label = n === 1 ? '1 soubor' : n < 5 ? `${n} soubory` : `${n} souborů`;
  return `
    <div class="binder-wrap" style="animation-delay:${i * .07}s" onclick="openBinder(${i})">
      <div class="binder-card" style="background:${c.c}">
        <div class="binder-spine">
          <div class="binder-ring"></div>
          <div class="binder-ring"></div>
          <div class="binder-ring"></div>
        </div>
        <div class="binder-cover">
          <span class="binder-icon">${c.icon}</span>
          <div class="binder-title">${c.title}</div>
          <div class="binder-file-count">${label}</div>
        </div>
        <div class="binder-pages"></div>
      </div>
    </div>`;
}

// ─── BINDER STATE ────────────────────────────────────────────────────
const FILES_PER_PAGE = 5;

const binder = { page: 0, all: [], filtered: [], filter: '', search: '', color: '#888' };

// ─── OPEN BINDER ─────────────────────────────────────────────────────
function openBinder(idx) {
  const card    = currentCards[idx];
  if (!card) return;

  binder.all      = card.files || [];
  binder.filtered = [...binder.all];
  binder.page     = 0;
  binder.filter   = '';
  binder.search   = '';
  binder.color    = card.c;

  const modal   = document.getElementById('binderModal');
  const cardEls = document.querySelectorAll('.binder-wrap');
  if (cardEls[idx]) {
    // Store where the card lives so closing can fly the book back there.
    const r   = cardEls[idx].getBoundingClientRect();
    const vw  = window.innerWidth;
    const vh  = window.innerHeight;
    const bookW = Math.min(860, vw * 0.94);
    const bookH = Math.min(560, vh * 0.86);
    const tx  = (r.left + r.width  / 2) - vw / 2;
    const ty  = (r.top  + r.height / 2) - vh / 2;
    const sc  = Math.min(r.width / bookW, r.height / bookH) * 0.75;
    modal.style.setProperty('--close-tx',    tx + 'px');
    modal.style.setProperty('--close-ty',    ty + 'px');
    modal.style.setProperty('--close-scale', sc);
  }

  modal.style.setProperty('--modal-color', card.c);

  document.getElementById('bookLeft').style.background = card.c;
  document.getElementById('bookLeftIcon').textContent  = card.icon;
  document.getElementById('bookLeftTitle').textContent = card.title;
  document.getElementById('bookLeftDesc').textContent  = card.desc;

  const n = binder.all.length;
  document.getElementById('bookLeftCount').textContent =
    n === 1 ? '1 soubor' : n < 5 ? `${n} soubory` : `${n} souborů`;

  document.getElementById('bookSearch').value = '';

  buildFilters(card.c);
  renderFileList();
  renderPagination();

  modal.classList.remove('is-closing');
  void modal.offsetWidth;
  modal.classList.add('is-open');
}

// ─── CLOSE BINDER ────────────────────────────────────────────────────
function closeBinder() {
  const modal = document.getElementById('binderModal');
  if (!modal.classList.contains('is-open')) return;
  modal.classList.add('is-closing');
  setTimeout(() => modal.classList.remove('is-open', 'is-closing'), 580);
}

// ─── FILTERS ─────────────────────────────────────────────────────────
function buildFilters(color) {
  const types = [...new Set(binder.all.map(f => f.type))];
  const el    = document.getElementById('bookFilters');

  el.innerHTML = [
    btnHTML('Vše', true, color),
    ...types.map(t => btnHTML(t, false, color)),
  ].join('');
}

function btnHTML(label, active, color) {
  const style = active
    ? `style="background:${color};border-color:${color};color:#fff"`
    : '';
  return `<button class="book-filter-btn${active?' active':''}" ${style}
    onclick="setFilter('${label === 'Vše' ? '' : label}', this)">${label}</button>`;
}

function setFilter(type, btn) {
  binder.filter = type;
  document.querySelectorAll('.book-filter-btn').forEach(b => {
    b.classList.remove('active');
    b.style.background  = '';
    b.style.borderColor = '';
    b.style.color       = '';
  });
  btn.classList.add('active');
  btn.style.background  = binder.color;
  btn.style.borderColor = binder.color;
  btn.style.color       = '#fff';
  applyFilter();
}

function onSearchInput(val) {
  binder.search = val.toLowerCase();
  applyFilter();
}

function applyFilter() {
  const q = binder.search;
  const t = binder.filter;
  binder.filtered = binder.all.filter(f =>
    (!q || f.name.toLowerCase().includes(q)) &&
    (!t || f.type === t)
  );
  binder.page = 0;
  renderFileList();
  renderPagination();
}

// ─── FILE LIST ───────────────────────────────────────────────────────
function renderFileList() {
  const el    = document.getElementById('bookFileList');
  const start = binder.page * FILES_PER_PAGE;
  const page  = binder.filtered.slice(start, start + FILES_PER_PAGE);

  if (page.length === 0) {
    el.innerHTML = `<div class="book-empty"><span style="font-size:1.8rem">🔍</span>Žádné materiály nebyly nalezeny</div>`;
    return;
  }

  el.innerHTML = page.map(f => `
    <div class="book-file" onclick="openFile('${esc(f.name)}')">
      <span class="book-file-icon">${f.icon}</span>
      <div class="book-file-info">
        <div class="book-file-name">${esc(f.name)}</div>
        <div class="book-file-meta">${f.size}</div>
      </div>
      <span class="book-file-type" style="background:${binder.color}">${f.type}</span>
    </div>`
  ).join('');
}

// ─── PAGINATION ──────────────────────────────────────────────────────
function renderPagination() {
  const total   = Math.ceil(binder.filtered.length / FILES_PER_PAGE);
  const current = binder.page;
  const el      = document.getElementById('bookPagination');

  if (total <= 1) { el.innerHTML = ''; return; }

  const prevDis = current === 0 ? 'disabled' : '';
  const nextDis = current === total - 1 ? 'disabled' : '';

  el.innerHTML = `
    <button class="page-arrow" onclick="turnPage(${current - 1})" ${prevDis}>‹</button>
    ${Array.from({length: total}, (_, i) =>
      `<div class="page-leaf${i === current ? ' active' : ''}" onclick="turnPage(${i})">${i + 1}</div>`
    ).join('')}
    <button class="page-arrow" onclick="turnPage(${current + 1})" ${nextDis}>›</button>
  `;
}

// ─── PAGE TURN ───────────────────────────────────────────────────────
// The leaf is appended to .open-book (NOT to .book-right) so it lives
// outside the overflow:hidden container that would flatten 3D transforms.
//
// Effect:
//   1. Transparent paper leaf appears over the file list.
//   2. It rotates (from the binding edge) AND fades out simultaneously.
//   3. At the mid-point the new content is swapped in underneath and
//      fades up through the dissolving leaf — nice overlap moment.
//
function turnPage(newPage) {
  const total = Math.ceil(binder.filtered.length / FILES_PER_PAGE);
  if (newPage < 0 || newPage >= total || newPage === binder.page) return;

  const fwd  = newPage > binder.page;
  const DUR  = 520;   // total leaf animation (ms)
  const MID  = 210;   // when to swap + start fading in new content (ms)

  const openBook = document.getElementById('openBook');
  const fileList = document.getElementById('bookFileList');
  const bookRect = openBook.getBoundingClientRect();
  const listRect = fileList.getBoundingClientRect();

  // ── Leaf: covers exactly the file-list area ───────────────────────
  const leaf = document.createElement('div');
  leaf.className = `turn-leaf ${fwd ? 'fwd' : 'back'}`;
  leaf.style.left   = `${listRect.left - bookRect.left}px`;
  leaf.style.top    = `${listRect.top  - bookRect.top}px`;
  leaf.style.width  = `${listRect.width}px`;
  leaf.style.height = `${listRect.height}px`;
  // start flat and fully opaque
  leaf.style.transform = `perspective(1100px) rotateY(0deg)`;
  leaf.style.opacity   = '1';
  openBook.appendChild(leaf);

  // double-RAF: let browser paint the initial state before transitioning
  requestAnimationFrame(() => requestAnimationFrame(() => {
    // turn rotates past 75° while opacity kicks in after a small delay
    leaf.style.transition =
      `transform ${DUR}ms cubic-bezier(.38,0,.72,.62),` +
      `opacity   ${Math.round(DUR * .72)}ms ease-in ${Math.round(DUR * .12)}ms`;
    leaf.style.transform = `perspective(1100px) rotateY(${fwd ? -78 : 78}deg)`;
    leaf.style.opacity   = '0';
  }));

  // ── Mid-point: swap content, fade it up through the dissolving leaf ─
  setTimeout(() => {
    // instant hide → render new content → then fade in
    fileList.style.transition = 'none';
    fileList.style.opacity    = '0';

    binder.page = newPage;
    renderFileList();
    renderPagination();

    requestAnimationFrame(() => requestAnimationFrame(() => {
      fileList.style.transition = `opacity ${DUR - MID}ms ease-out`;
      fileList.style.opacity    = '1';
    }));
  }, MID);

  // ── Cleanup ───────────────────────────────────────────────────────
  setTimeout(() => {
    leaf.remove();
    fileList.style.transition = '';
    fileList.style.opacity    = '';
  }, DUR + 80);
}

function openFile(name) {
  alert(`📂 Otevírám materiál:\n„${name}"\n\nZde by se zobrazil obsah souboru.`);
}

function esc(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
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
function autoErase() {
  if (isErasing) return;
  isErasing = true;

  const surface = document.getElementById('boardSurface');
  const textEl  = document.getElementById('chalkText');
  const W = surface.offsetWidth;
  const H = surface.offsetHeight;
  const surfR = surface.getBoundingClientRect();

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
  if (!isFinite(minX)) {
    const r = textEl.getBoundingClientRect();
    minX = r.left; minY = r.top; maxX = r.right; maxY = r.bottom;
  }

  const PAD_X = 22, PAD_Y = 14;
  const boxL = Math.max(0, minX - surfR.left - PAD_X);
  const boxR = Math.min(W, maxX - surfR.left + PAD_X);
  const boxT = Math.max(0, minY - surfR.top  - PAD_Y);
  const boxB = Math.min(H, maxY - surfR.top  + PAD_Y);
  const boxW = boxR - boxL;

  const EW = Math.min(92, W * 0.13);
  const EH = Math.round(EW * 0.37);

  const canvas = document.createElement('canvas');
  canvas.width  = W;
  canvas.height = H;
  canvas.style.cssText = 'position:absolute;top:0;left:0;z-index:6;pointer-events:none;';
  surface.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  const eraser = document.createElement('div');
  eraser.className = 'eraser-el';
  eraser.style.width   = `${EW}px`;
  eraser.style.height  = `${EH}px`;
  eraser.style.display = 'none';
  surface.appendChild(eraser);

  const numCols = Math.max(4, Math.min(7, Math.ceil(boxW / (EW * 0.85)) + 1));
  const colStep = numCols > 1 ? boxW / (numCols - 1) : 0;
  const COL_DUR   = 720;
  const COL_DELAY = 500;

  for (let i = 0; i < numCols; i++) {
    const colX  = boxL + i * colStep;
    const dir   = i % 2 === 0 ? 1 : -1;
    const alpha = 0.44 + i * (0.30 / Math.max(numCols - 1, 1));

    setTimeout(() => {
      const startY = dir > 0 ? boxT - EH : boxB + EH;
      const endY   = dir > 0 ? boxB + EH : boxT - EH;
      const t0     = performance.now();
      eraser.style.display = '';

      function frame(now) {
        const t    = Math.min((now - t0) / COL_DUR, 1);
        const ease = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
        const cy   = startY + (endY - startY) * ease;
        const wobble = Math.sin(t * Math.PI * 3.5) * 6;
        const drawX  = colX + wobble;
        const jx = (Math.random() - 0.5) * 2.4;
        const jy = (Math.random() - 0.5) * 2.4;
        eraser.style.left = `${drawX - EW / 2 + jx}px`;
        eraser.style.top  = `${cy    - EH / 2 + jy}px`;
        ctx.fillStyle = `rgba(36,59,39,${alpha})`;
        ctx.fillRect(drawX - EW / 2, cy - EH / 2, EW, EH);
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
