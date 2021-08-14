const P_SIZE = 50;
const C_WHITE = '#ffffff';
const C_PINK = '#ff046e';
const C_RED = '#ff2010';

const sleep = t => new Promise(rsv => setTimeout(rsv, t));
const writtenBank0 = '[[417,732],[422,732]]'
const writtenBank1 = '[[417,732],[422,732],[430,729],[438,724],[451,716],[464,707],[475,695],[487,678],[495,660],[503,642],[507,629],[508,616],[509,605],[509,595],[509,584],[508,576],[506,570],[505,566],[502,571],[499,576],[495,584],[489,593],[486,604],[481,615],[478,627],[474,638],[472,648],[470,658],[470,667],[470,675],[473,682],[477,689],[482,696],[488,701],[493,704],[498,705],[504,705],[510,703],[516,700],[522,696],[527,690],[530,685],[533,681],[533,677],[534,674],[529,674],[527,680],[527,687],[527,693],[531,700],[537,706],[544,708],[550,708],[558,704],[565,697],[570,688],[572,677],[572,669],[571,665],[566,661],[561,660],[551,660],[542,664],[535,668],[530,672],[534,675],[541,675],[551,675],[558,675],[595,669],[592,674],[591,682],[590,690],[589,697],[589,702],[592,705],[598,706],[607,704],[614,697],[623,685],[629,671],[633,660],[635,654],[635,660],[634,664],[633,669],[633,673],[633,677],[637,682],[641,682],[647,682],[654,680],[661,676],[666,671],[669,666],[671,661],[669,656],[664,653],[659,653],[653,655],[647,656],[641,660],[638,665],[635,671],[635,677],[635,683],[637,688],[640,693],[645,696],[652,698],[660,698],[670,697],[680,695],[689,692],[694,689],[697,686],[698,683],[794,639],[791,638],[792,645],[792,656],[793,666],[794,678],[795,687],[796,692],[801,693],[806,690],[813,682],[823,674],[833,663],[840,654],[842,647],[842,643],[841,649],[840,654],[840,660],[840,669],[839,678],[838,688],[837,696],[835,705],[832,713],[827,720],[817,728],[805,734],[790,738],[775,742],[763,743],[757,743],[753,743],[753,736],[758,729],[767,721],[782,711],[804,700],[827,689],[850,681],[865,676],[874,672],[882,650],[880,654],[879,663],[877,671],[876,679],[878,684],[884,684],[892,677],[901,665],[909,650],[912,636],[913,629],[904,629],[897,633],[888,638],[881,643],[874,648],[872,651],[876,652],[883,651],[890,650],[922,647],[922,652],[922,658],[922,665],[924,671],[926,674],[929,675],[935,674],[943,669],[951,662],[957,654],[962,646],[965,642],[965,638],[966,642],[963,648],[962,653],[960,661],[959,668],[959,673],[960,677],[964,679],[968,679],[974,677],[979,673],[985,668],[987,663],[988,660],[1110,670],[1106,671],[1101,670],[1097,668],[1094,665],[1091,661],[1089,655],[1088,650],[1086,643],[1084,637],[1084,631],[1082,625],[1082,620],[1082,616],[1083,609],[1087,605],[1091,604],[1096,605],[1099,607],[1103,611],[1105,617],[1106,620],[1108,625],[1109,631],[1109,635],[1110,638],[1109,641],[1110,634],[1113,629],[1117,623],[1121,619],[1124,616],[1127,615],[1131,615],[1135,614],[1140,614],[1144,615],[1148,620],[1149,624],[1150,628],[1150,632],[1150,636],[1149,640],[1146,645],[1144,649],[1139,654],[1136,657],[1131,660],[1126,662],[1121,664],[1117,664],[1113,665],[1109,666],[1106,667],[1101,669],[1097,671]]';
const writtenBank2 = '[[434,761],[442,759],[454,753],[472,743],[493,728],[510,710],[526,687],[538,664],[546,643],[549,623],[549,605],[547,593],[545,585],[542,581],[540,578],[533,583],[528,590],[524,598],[520,610],[519,622],[518,637],[518,652],[519,667],[521,678],[524,687],[529,694],[533,697],[539,697],[546,692],[554,683],[560,673],[566,664],[568,658],[569,654],[569,661],[568,667],[566,671],[566,676],[565,682],[565,688],[567,693],[572,697],[580,698],[591,696],[601,689],[608,680],[611,670],[611,662],[610,658],[606,655],[601,655],[594,655],[587,658],[582,662],[581,665],[584,667],[588,667],[632,666],[630,672],[628,679],[627,687],[628,692],[631,694],[635,694],[642,689],[649,680],[656,668],[659,659],[662,651],[662,656],[661,659],[661,663],[661,668],[661,673],[662,677],[665,680],[668,682],[674,683],[681,683],[689,681],[698,677],[704,671],[708,666],[710,660],[711,655],[710,651],[707,650],[703,650],[698,651],[693,655],[687,662],[682,668],[679,673],[678,678],[683,685],[692,688],[706,690],[720,692],[734,691],[744,690],[748,688],[749,684],[748,679],[748,675],[801,649],[800,654],[800,661],[800,668],[800,673],[804,676],[809,677],[817,677],[827,670],[834,661],[841,649],[843,640],[844,635],[839,644],[836,652],[834,661],[833,670],[833,681],[834,689],[836,698],[840,707],[843,716],[844,722],[844,728],[842,734],[834,740],[825,746],[813,751],[802,754],[795,755],[791,750],[790,742],[790,732],[792,722],[797,714],[805,708],[813,703],[821,700],[827,698],[833,696],[836,695],[839,692],[856,660],[857,666],[859,672],[862,677],[866,679],[870,679],[875,677],[881,670],[886,662],[889,653],[890,645],[890,641],[886,639],[882,639],[876,642],[870,645],[865,647],[862,649],[867,649],[902,649],[902,656],[902,662],[902,670],[902,676],[905,679],[910,679],[918,675],[927,668],[935,662],[941,656],[944,651],[946,648],[946,644],[944,648],[943,653],[943,661],[944,666],[945,670],[946,674],[947,677],[950,680],[954,681],[958,678],[963,675],[967,673],[1070,622],[1081,624],[1093,625],[1106,627],[1114,628],[1115,631],[1115,635],[1111,640],[1104,648],[1096,655],[1085,662],[1076,669],[1067,675],[1065,678],[1074,674],[1085,671],[1099,667],[1109,665],[1116,664],[1119,663],[1122,636],[1122,641],[1122,646],[1123,652],[1126,656],[1129,657],[1137,654],[1143,648],[1148,641],[1152,635],[1154,632],[1152,643],[1150,652],[1147,665],[1144,679],[1142,696],[1140,712],[1138,724],[1136,734],[1134,741],[1131,743],[1126,743],[1117,741],[1109,737],[1101,734],[1098,730],[1095,727],[1094,723],[1206,632],[1204,635],[1201,640],[1196,646],[1191,653],[1184,659],[1180,663],[1177,665],[1176,659],[1176,653],[1176,647],[1179,631],[1182,635],[1187,641],[1192,647],[1201,654],[1208,659],[1212,661],[1281,668],[1277,664],[1272,660],[1269,654],[1267,647],[1266,639],[1265,630],[1266,620],[1267,614],[1271,610],[1277,606],[1284,604],[1289,604],[1296,609],[1299,614],[1301,620],[1302,626],[1302,631],[1302,635],[1300,638],[1297,641],[1295,638],[1297,632],[1301,625],[1309,619],[1316,615],[1323,612],[1327,611],[1330,610],[1334,616],[1336,620],[1337,624],[1337,628],[1337,632],[1337,638],[1335,644],[1331,649],[1328,654],[1324,659],[1320,664],[1316,668],[1312,670],[1308,673],[1303,675],[1298,676],[1293,677],[1289,678],[1286,680]]';

const elementInViewport = el => {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

const HackAllTexts = () => {
  const createML = txt => {
    const m = document.createElement('ML');
    m.innerText = txt;
    return m;
  };
  
  [...document.querySelectorAll('body *:not(style):not(script):not(noscript)')]
    .forEach(e => {
      if (e && e.childNodes && e.children && e.children.length !== e.childNodes.length) {
        e.childNodes.forEach(a => a.nodeName === '#text' && e.replaceChild(createML(a.textContent), a));
      }

      if (e && e.style) {
        const s = getComputedStyle(e);
        (s.color === 'transparent' || s.display === 'none' || `${s.opacity}` === '0') && e.classList.add('xhidden');
      }
    });
  
  const validEles = [...document.querySelectorAll('body :not(.xhidden) *:not(style):not(script):not(noscript)')]
    .filter(e => e && e.offsetParent && !e.children.length && e.innerText && e.innerText.trim())
    .filter(e => elementInViewport(e))

  validEles.forEach(e => (e.innerHTML = Array.from(e.innerText).map(c => c === ' ' ? c : `<mn>${c}</mn>`).join('')));
  return [...document.querySelectorAll('mn')];
}

const CreateCanvas = () => {
  const canvas = document.createElement('canvas');
        canvas.style.height = '100%';
        canvas.style.width = '100%';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '9999999999';
        canvas.onresizecallback = () => {
          canvas.width  = canvas.clientWidth;
          canvas.height = canvas.clientHeight;
        }
        window.addEventListener('resize', () => {
          canvas.onresizecallback();
          mainBank = normalizeBank(mainBank);
        });
        setTimeout(() => {
          canvas.onresizecallback();
        }, 10);
  document.body.appendChild(canvas);

  return canvas;
}

class Asset {
  fetchCache = {};

  fetch(char, style) {
    console.log('char', char);
    const hash = `${char}/${style.fontSize}/${style.fontFamily}/${style.color}`;
    if (this.fetchCache[hash]) return this.fetchCache[hash];

    virtualCtx.clearRect(0, 0, P_SIZE, P_SIZE);
    virtualCtx.font = `${style.fontSize} ${style.fontFamily}`;
    virtualCtx.fillStyle = style.color;
    virtualCtx.fillText(char, P_SIZE / 2, P_SIZE / 2);
    const image = new Image();
    image.src = virtualCanvas.toDataURL();
    this.fetchCache[hash] = image;

    return image;
  }

  // 0 <= t <= 2PI
  pointOnHeart(t) {
    t -= Math.PI;
    return new Point(
      160 * Math.pow(Math.sin(t), 3),
      // 130 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t) + 25,
      - 130 * Math.cos(t) + 50 * Math.cos(2 * t) + 20 * Math.cos(3 * t) + 10 * Math.cos(4 * t) - 25,
    ).scale(8 / 18 * canvas.height / 320);
  }

  // 0 <= t <= 2PI
  pointOnCircle(t) {
    t -= Math.PI;
    return new Point(
      (Math.random() * 140) * Math.sin(t),
      (Math.random() * 140) * Math.cos(t),
    );
  }

  center() {
    return new Point().canvasCentered();
  }

  scaling(v, a, b, x, y) {
    return (v - a) / (b - a) * (y - x) + x;
  }

  // statics
  Shake = [[-1, 0], [0, 1], [1, 0], [0, -1]];
}
const CanvasAsset = new Asset();

class Point {
  constructor(x, y) {
    if (x && x.length) {
      this.x = x[0] || 0;
      this.y = x[1] || 0;
    } else {
      this.x = x || 0;
      this.y = y || 0;
    }
  }

  clone() {
    return new Point(this.x, this.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  set length(length) {
    this.normalize();
    this.x *= length;
    this.y *= length;
  }

  normalize() {
    const length = this.length();
    this.x /= length;
    this.y /= length;
    return this;
  }

  scale(factor) {
    this.x *= factor;
    this.y *= factor;
    return this;
  }

  add(vector) {
    if (vector instanceof Point) {
      this.x += vector.x;
      this.y += vector.y;
    } else {
      this.x += vector[0];
      this.y += vector[1];
    }
    return this;
  }

  sub(vector) {
    return this.add([-(vector.x || vector[0] || 0), -(vector.y || vector[1] || 0)]);
  }

  to(vector) {
    return Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2);
  }

  update(point) {
    this.x = point.x;
    this.y = point.y;
  }

  canvasCentered() {
    this.x += canvas.width / 2;
    this.y += canvas.height / 2;
    return this;
  }
}

class Particle {
  constructor(position, { char='鉂�', style={} } = {}) {
    this.index = Particle.index++;
    Particle.all.push(this);

    this.originalPosition = position || new Point();
    this.position = this.originalPosition.clone();

    style = {
      color: C_WHITE,
      fontSize: '12px',
      fontFamily: 'monospace',
      ...style,
    };
    this.updateAsset(char, style);
    
    this.frame = 0;
    this.age = 0;
    this.opacity = 1;
    this.scale = 1;
  }

  updateAsset(char, style={}) {
    this.char = char;
    this.style = {
      ...this.style,
      ...style,
    };
    this.asset = CanvasAsset.fetch(char, style);
  }

  move(ts) {
    let position = this.position.clone();

    if (ts < 3000) {
      // shake
      position.update(this.originalPosition);
      position.add(CanvasAsset.Shake[parseInt(this.index + this.frame / 2, 10) % 4]);
    }

    if (3000 < ts && ts < 5000) {
      // move in a circle
      const targetPosition = CanvasAsset.pointOnCircle(this.index / Particle.index * Math.PI * 2).canvasCentered();
      targetPosition.sub(this.originalPosition).scale((ts - 3000) / 2000).add(this.originalPosition);
      position.update(targetPosition);
      // shake
      position.add(CanvasAsset.Shake[parseInt(this.index + this.frame / 2, 10) % 4]);
    }

    if (5000 < ts && ts < 7000) {
      // random jump and scale
      const scaleFactor = 1 - ((ts - 5000) / 2000 * (7/8));
      const targetPosition = CanvasAsset.pointOnCircle(Math.random() * Math.PI * 2).scale(scaleFactor).canvasCentered();
      position.update(targetPosition);
      // scale font
      this.scale = Math.min(1, this.scale + 0.001);
      this.opacity = Math.max(0.3, this.opacity - 0.005);
    }

    if (7000 < ts && ts < 9000) {
      const actionIndex = (this.index / Particle.index) * 1000 + 7000;
      if (ts < actionIndex) {
        const frameIndex = parseInt(this.frame / 2, 10);
        position.add(CanvasAsset.Shake[(this.index + frameIndex) % 4]);
      } else {
        // update color
        if (this.state !== 1) {
          this.updateAsset(this.char, { color: 'IiLlOoVvEeUuOoYy'.includes(this.char) ? C_PINK : C_WHITE });
          this.state = 1;
        }
        position = CanvasAsset.pointOnHeart((ts - actionIndex) / 200 * Math.PI * 2 + Math.PI).scale(CanvasAsset.scaling(ts - actionIndex, 0, 2000, 0.2, 5)).canvasCentered();
        position.add(new Point(CanvasAsset.Shake[parseInt(this.index + this.frame / 2, 10) % 4]).scale(Math.random() * 3));
        this.originalPosition = position;
      }
    }

    if (8000 < ts && ts < 9000) {
      // random jump and scale
      const scaleFactor = (ts - 8000) / 1000;
      const targetPosition = CanvasAsset.center().sub(this.originalPosition).scale(scaleFactor).add(this.originalPosition);
      position.update(targetPosition);
      position.add(new Point(CanvasAsset.Shake[parseInt(this.index + this.frame / 2, 10) % 4]).scale(Math.random() * 3));
      // scale font
      this.scale = 1 - scaleFactor;
      this.opacity = 1 - scaleFactor;
      this.endFrame = this.frame;

      canvas.style.backgroundColor = `rgba(0, 0, 0, ${scaleFactor})`;
    }

    // every full animation takes 120 frames
    const P_FRAME = 120;

    // shift heart
    let offsetY = 0;
    if (ts >= 16000) {
      offsetY = 1;
    } else if (ts >= 14000) {
      const x = CanvasAsset.scaling(ts, 14000, 16000, -Math.PI/2, Math.PI/2);
      offsetY = (Math.sin(x) + 1) / 2;
    }

    // generate heart
    if (ts >= 9000) {
      // reset state
      if ((!this.lastStart && (this.frame - this.endFrame) * 1.4 > this.index)
        || (this.lastEnd && this.frame - this.lastEnd > P_FRAME / 2)) { // rest for P_FRAME/2 frames
        this.toPosition = CanvasAsset.pointOnHeart(2 * Math.PI * Math.random()).canvasCentered();
        this.lastStart = this.frame;
        this.lastEnd = null;
      }
      
      // compute
      if (this.toPosition) {
        const x = CanvasAsset.scaling(this.frame - this.lastStart, 0, P_FRAME, 0, 2);
        const v = 1 - Math.pow(x - 1, 2);
        position = this.toPosition.clone().sub(CanvasAsset.center()).scale(v).add(CanvasAsset.center());
        position.y -= offsetY * (3 / 18) * canvas.height;

        this.scale = 1 - Math.abs(x - 1);
        this.opacity = 1 - Math.abs(x - 1);

        if (x >= 2) {
          this.toPosition = null;
          this.lastEnd = this.frame;
        }
      }
    }

    this.position.update(position);
    this.frame += 1;
    this.age = ts;
  }

  draw() {
    const size = this.scale * P_SIZE;
    context.globalAlpha = this.opacity;
    context.drawImage(this.asset, this.position.x - size / 2, this.position.y - size / 2, size, size);
  }
}
Particle.index = 0;
Particle.all = [];
Particle.new = (x, y, char, ext) => new Particle(new Point(x, y), { char, ...ext });

const drawBankPoint = (p, alpha) => {
  context.fillStyle = "#ffffff";
  context.globalAlpha = alpha;
  context.beginPath();
  context.arc(p.x, p.y, 3, 0, 2 * Math.PI);
  context.fill();
}

const normalizeBank = (bank) => {
  let [top, left, bottom, right] = [bank[0].y, bank[0].x, bank[0].y, bank[0].x];
  bank.forEach(b => {
    top = Math.min(top, b.y);
    left = Math.min(left, b.x);
    bottom = Math.max(bottom, b.y);
    right = Math.max(right, b.x);
  });

  const offsetX = canvas.width / 2 - (left + right) / 2;
  const offsetY = canvas.height * (13 / 18) - (top + bottom) / 2;

  bank.forEach(b => b.add([offsetX, offsetY]));
  return bank;
}

let T_START = 0;
let bankFrame = 0;
let startFrame = 0;
function render() {
  requestAnimationFrame(render);

  T_START = T_START || Date.now();
  const ts = Date.now() - T_START;

  Particle.all.forEach(p => p.move(ts));
  setTimeout(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    Particle.all.forEach(p => p.draw());

    // draw main bank
    if (ts > 16000) {
      bankFrame += 1
      const lastIndex = Math.min(mainBank.length, bankFrame);
      for (let i = startFrame; i < lastIndex; i++) {
        mainBank[i].age = mainBank[i].age || 0;
        mainBank[i].age += 1;
        if (mainBank[i].age >= 100) startFrame = i + 1;
        drawBankPoint(mainBank[i], (100 - mainBank[i].age) / 100);
      }

      if (startFrame >= mainBank.length) {
        mainBank.forEach(p => {
          if (p.age > 0) p.age -= 2;
          drawBankPoint(p, (100 - p.age) / 100);
        });
      }
    }

    // draw mouse track
    const activeLen = bank.length;
    for (let i = activeIndex; i < activeLen; i++) {
      bank[i].age = bank[i].age || 0;
      bank[i].age += 1;
      if (bank[i].age >= 100) activeIndex = i + 1;
      drawBankPoint(bank[i], (100 - bank[i].age) / 100);
    }
  }, 0);
}

const eles = HackAllTexts();
const canvas = CreateCanvas();
const context = canvas.getContext('2d');
const virtualCanvas = document.createElement('canvas');
      virtualCanvas.width  = P_SIZE;
      virtualCanvas.height = P_SIZE;
const virtualCtx = virtualCanvas.getContext('2d');
      virtualCtx.font = `${P_SIZE}px monospace`;
      virtualCtx.textBaseline = 'middle';
      virtualCtx.textAlign = 'center';

(async () => {

  context.clearRect(0, 0, canvas.width, canvas.height);
  eles.forEach(el => {
    const elSty = getComputedStyle(el);
    const elPos = el.getBoundingClientRect();
    const elTxt = el.innerText;
    Particle.new(elPos.x + 8, elPos.y + 10, elTxt, {
      style: {
        color: elSty.color,
        fontSize: elSty.fontSize,
        fontFamily: elSty.fontFamily,
      }
    });
  });

  setTimeout(() => {
    const newClass = document.createElement('style');
    newClass.innerHTML = 'mn { color: transparent !important; }';
    document.body.append(newClass);
    
    mainBank = normalizeBank(importBank(writtenBank1));
    render();
  }, 3000);

})();

// track mouse
let activeIndex = 0;
let start = false;
let bank = [];
let lastPoint = new Point();
const exportBank = bank => JSON.stringify(bank.map(b => [b.x, b.y]));
const importBank = str => JSON.parse(str).map(p => new Point(p));
const replayBank = () => { const _bank = bank; bank = []; activeIndex = 0; const sec = setInterval(() => { if (!_bank.length) { clearTimeout(sec); return; } _bank[0].age = 0; bank.push(_bank.shift()) }, 1000 / 60)};
canvas.onmousedown = () => start = true;
canvas.onmouseup = () => start = false;
canvas.onmousemove = e => {
  if (start && window.trackpointer == true) {
    const p = new Point(e.clientX, e.clientY);
    if (p.to(lastPoint) > 9) {
      bank.push(p);
      lastPoint = p;
    }
  }
}

let mainBank = [];