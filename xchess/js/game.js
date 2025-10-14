function deepClone(arr) { return JSON.parse(JSON.stringify(arr)); }
const ChessManuals = [
  {
    "name": "八卦阵法",
    "map": [
      [, , , , , , , ,],
      [, , , , 'S0', , , ,],
      [, , , 'S1', , 'J0', , ,],
      [, , 'C0', , , , 'c0', ,],
      [, 'M0', , , , , , 'm0',],
      ['P0', , , , , , , , 'p0'],
      [, 'M1', , , , , , 'm1',],
      [, , 'C1', , , , 'c1', ,],
      [, , , 'Z0', , 'Z1', , ,],
      [, , , , 'j0', , , ,]
    ]
  },
  {
    "name": "很二棋局",
    "map": [
      [, , , , , , , ,],
      [, , , "J0", "m0", "m1", , ,],
      [, , "z1", , , , "p1", ,],
      [, , , , , , "c1", ,],
      [, , , , , "P1", , ,],
      [, , , , "p0", , , ,],
      [, , , "Z0", , , , ,],
      [, , "M0", , , , , ,],
      [, , "c0", "j0", "M1", "C0", "P0", ,],
      [, , , , , , , ,]
    ]
  },
  {
    "name": "七星会阵",
    "map": [
      [, "P0", , , "J0", , , ,],
      [, , , , "S0", , , ,],
      [, , , , "X0", "S1", , ,],
      [, , , , , , , ,],
      [, , , , , , , ,],
      [, , , , , , "p0", ,],
      [, , , , "z0", , , ,],
      [, , , "Z0", , , , ,],
      [, , , , "C0", , , ,],
      [, "c1", , "j0", , "c0", , ,]
    ]
  },

  {
    "name": "测试阵法",
    "map": [
      [, , , , "J0", , , ,],
      [, , , , , , , ,],
      [, , , , , , , ,],
      [, , , , , , , ,],
      [, , , , , , , ,],
      [, , , , , , , ,],
      [, , , , "z0", , , ,],
      [, , , , , , , ,],
      [, , , , , , , ,],
      [, , , "j0", , , , ,]
    ]
  }
]

const OffensiveManual = [
  ['C0', 'M0', 'X0', 'S0', 'J0', 'S1', 'X1', 'M1', 'C1',],
  [, , , , , , , , ,],
  [, 'P0', , , , , , 'P1', ,],
  ['Z0', , 'Z1', , 'Z2', , 'Z3', , 'Z4',],
  [, , , , , , , , ,],
  [, , , , , , , , ,],
  ['z0', , 'z1', , 'z2', , 'z3', , 'z4',],
  [, 'p0', , , , , , 'p1', ,],
  [, , , , , , , , ,],
  ['c0', 'm0', 'x0', 's0', 'j0', 's1', 'x1', 'm1', 'c1',]
];

const DefensiveManual = [
  ['c0', 'm0', 'x0', 's0', 'j0', 's1', 'x1', 'm1', 'c1',],
  [, , , , , , , , ,],
  [, 'p0', , , , , , 'p1', ,],
  ['z0', , 'z1', , 'z2', , 'z3', , 'z4',],
  [, , , , , , , , ,],
  [, , , , , , , , ,],
  ['Z0', , 'Z1', , 'Z2', , 'Z3', , 'Z4',],
  [, 'P0', , , , , , 'P1', ,],
  [, , , , , , , , ,],
  ['C0', 'M0', 'X0', 'S0', 'J0', 'S1', 'X1', 'M1', 'C1',],
]

Talice = {
  speakWin: () => {
    let utterance = new SpeechSynthesisUtterance("恭喜，你赢了！")
    utterance.rate = 1;
    utterance.pitch = 2;
    window.speechSynthesis.speak(utterance)
  },
  speakCap: (key) => {
    let str = key ? key : "";
    let utterance = new SpeechSynthesisUtterance("吃" + str);
    utterance.rate = 1;
    utterance.pitch = 2;
    window.speechSynthesis.speak(utterance)
  }
}

XiangqiRules = {
}

//棋子配置
XiangqiRules.piecesHash = {
  //红子 中文/图片地址/阵营/权重
  'c': { label: "车", img: 'r_c', img1: 'b_c', colour: 1, wayId: "c", valueId: "c" },
  'm': { label: "马", img: 'r_m', img1: 'b_m', colour: 1, wayId: "m", valueId: "m" },
  'x': { label: "相", img: 'r_x', img1: 'b_x', colour: 1, wayId: "x", valueId: "x" },
  's': { label: "仕", img: 'r_s', img1: 'b_s', colour: 1, wayId: "s", valueId: "s" },
  'j': { label: "将", img: 'r_j', img1: 'b_j', colour: 1, wayId: "j", valueId: "j" },
  'p': { label: "炮", img: 'r_p', img1: 'b_p', colour: 1, wayId: "p", valueId: "p" },
  'z': { label: "兵", img: 'r_z', img1: 'b_z', colour: 1, wayId: "z", valueId: "z" },

  //黑子
  'C': { label: "车", img: 'b_c', img1: 'r_c', colour: -1, wayId: "c", valueId: "C" },
  'M': { label: "马", img: 'b_m', img1: 'r_m', colour: -1, wayId: "m", valueId: "M" },
  'X': { label: "象", img: 'b_x', img1: 'r_x', colour: -1, wayId: "x", valueId: "X" },
  'S': { label: "士", img: 'b_s', img1: 'r_s', colour: -1, wayId: "s", valueId: "S" },
  'J': { label: "帅", img: 'b_j', img1: 'r_j', colour: -1, wayId: "j", valueId: "J" },
  'P': { label: "炮", img: 'b_p', img1: 'r_p', colour: -1, wayId: "p", valueId: "P" },
  'Z': { label: "卒", img: 'b_z', img1: 'r_z', colour: -1, wayId: "z", valueId: "Z" }
};

/**大写为黑，小写为红方*/
XiangqiRules.piecesSets = {
  "c0": "c", "c1": "c",
  "m0": "m", "m1": "m",
  "x0": "x", "x1": "x",
  "s0": "s", "s1": "s",
  "j0": "j",
  "p0": "p", "p1": "p",
  "z0": "z", "z1": "z", "z2": "z", "z3": "z", "z4": "z", "z5": "z",

  "C0": "C", "C1": "C",
  "M0": "M", "M1": "M",
  "X0": "X", "X1": "X",
  "S0": "S", "S1": "S",
  "J0": "J",
  "P0": "P", "P1": "P",
  "Z0": "Z", "Z1": "Z", "Z2": "Z", "Z3": "Z", "Z4": "Z", "Z5": "Z",
}

XiangqiRules.RedPiecesImgs = {
  "c0": "c", "c1": "c",
  "m0": "m", "m1": "m",
  "x0": "x", "x1": "x",
  "s0": "s", "s1": "s",
  "j0": "j",
  "p0": "p", "p1": "p",
  "z0": "z", "z1": "z", "z2": "z", "z3": "z", "z4": "z", "z5": "z",

  "C0": "C", "C1": "C",
  "M0": "M", "M1": "M",
  "X0": "X", "X1": "X",
  "S0": "S", "S1": "S",
  "J0": "J",
  "P0": "P", "P1": "P",
  "Z0": "Z", "Z1": "Z", "Z2": "Z", "Z3": "Z", "Z4": "Z", "Z5": "Z",
}

XiangqiRules.BlackPiecesImgs = {
  "C0": "c", "C1": "c",
  "M0": "m", "M1": "m",
  "X0": "x", "X1": "x",
  "S0": "s", "S1": "s",
  "J0": "j",
  "P0": "p", "P1": "p",
  "Z0": "z", "Z1": "z", "Z2": "z", "Z3": "z", "Z4": "z", "Z5": "z",

  "c0": "C", "c1": "C",
  "m0": "M", "m1": "M",
  "x0": "X", "x1": "X",
  "s0": "S", "s1": "S",
  "j0": "J",
  "p0": "P", "p1": "P",
  "z0": "Z", "z1": "Z", "z2": "Z", "z3": "Z", "z4": "Z", "z5": "Z",
}

XiangqiRules.piecesBoard = (() => {
  let board = {};
  for (id in XiangqiRules.piecesSets) {
    board[id] = XiangqiRules.piecesHash[XiangqiRules.piecesSets[id]];
  }
  return board;
})();

//棋子能走的着点,走法
XiangqiRules.ways = {}
//车，无论横线、竖线均可行走，只要无子阻拦，步数不受限制。行进方向棋子不是己方棋子，可以吃子。
XiangqiRules.ways.c = function (piece, map) {
  var x = piece.x;
  var y = piece.y;

  if (map[y][x] != piece.id) {
    return []
  }
  var d = [];

  //左侧检索
  for (var i = x - 1; i >= 0; i--) {
    if (map[y][i]) {
      if (XiangqiTeller.getPiceColor(map[y][i]) != piece.colour) d.push([i, y]);
      break
    } else {
      d.push([i, y])
    }
  }
  //右侧检索
  for (var i = x + 1; i <= 8; i++) {
    if (map[y][i]) {
      if (XiangqiTeller.getPiceColor(map[y][i]) != piece.colour) d.push([i, y]);
      break
    } else {
      d.push([i, y])
    }
  }
  //上检索
  for (var i = y - 1; i >= 0; i--) {
    if (map[i][x]) {
      if (XiangqiTeller.getPiceColor(map[i][x]) != piece.colour) d.push([x, i]);
      break
    } else {
      d.push([x, i])
    }
  }
  //下检索
  for (var i = y + 1; i <= 9; i++) {
    if (map[i][x]) {
      if (XiangqiTeller.getPiceColor(map[i][x]) != piece.colour) d.push([x, i]);
      break
    } else {
      d.push([x, i])
    }
  }
  return d;
}

//马，马走日;马一次可走的选择点可以达到四周的八个点，如果在要去的方向有别的棋子挡住，马就无法走过去。
XiangqiRules.ways.m = function (piece, map) {
  var x = piece.x;
  var y = piece.y;

  if (map[y][x] != piece.id) {
    return []
  }
  var d = [];

  //1点
  if (y - 2 >= 0 && x + 1 <= 8 && !map[y - 1][x] && (!map[y - 2][x + 1] || XiangqiTeller.getPiceColor(map[y - 2][x + 1]) != piece.colour)) d.push([x + 1, y - 2]);
  //2点
  if (y - 1 >= 0 && x + 2 <= 8 && !map[y][x + 1] && (!map[y - 1][x + 2] || XiangqiTeller.getPiceColor(map[y - 1][x + 2]) != piece.colour)) d.push([x + 2, y - 1]);
  //4点
  if (y + 1 <= 9 && x + 2 <= 8 && !map[y][x + 1] && (!map[y + 1][x + 2] || XiangqiTeller.getPiceColor(map[y + 1][x + 2]) != piece.colour)) d.push([x + 2, y + 1]);
  //5点
  if (y + 2 <= 9 && x + 1 <= 8 && !map[y + 1][x] && (!map[y + 2][x + 1] || XiangqiTeller.getPiceColor(map[y + 2][x + 1]) != piece.colour)) d.push([x + 1, y + 2]);
  //7点
  if (y + 2 <= 9 && x - 1 >= 0 && !map[y + 1][x] && (!map[y + 2][x - 1] || XiangqiTeller.getPiceColor(map[y + 2][x - 1]) != piece.colour)) d.push([x - 1, y + 2]);
  //8点
  if (y + 1 <= 9 && x - 2 >= 0 && !map[y][x - 1] && (!map[y + 1][x - 2] || XiangqiTeller.getPiceColor(map[y + 1][x - 2]) != piece.colour)) d.push([x - 2, y + 1]);
  //10点
  if (y - 1 >= 0 && x - 2 >= 0 && !map[y][x - 1] && (!map[y - 1][x - 2] || XiangqiTeller.getPiceColor(map[y - 1][x - 2]) != piece.colour)) d.push([x - 2, y - 1]);
  //11点
  if (y - 2 >= 0 && x - 1 >= 0 && !map[y - 1][x] && (!map[y - 2][x - 1] || XiangqiTeller.getPiceColor(map[y - 2][x - 1]) != piece.colour)) d.push([x - 1, y - 2]);

  return d;
}

//相,象飞田;象不过河，如果田子中间有棋子就不能走。
XiangqiRules.ways.x = function (piece, map) {
  var x = piece.x;
  var y = piece.y;

  if (map[y][x] != piece.id) {
    return []
  }
  var d = [];

  if (piece.isRed()) { //红方
    //4点半
    if (y + 2 <= 9 && x + 2 <= 8 && !map[y + 1][x + 1] && (!map[y + 2][x + 2] || XiangqiTeller.getPiceColor(map[y + 2][x + 2]) != piece.colour)) d.push([x + 2, y + 2]);
    //7点半
    if (y + 2 <= 9 && x - 2 >= 0 && !map[y + 1][x - 1] && (!map[y + 2][x - 2] || XiangqiTeller.getPiceColor(map[y + 2][x - 2]) != piece.colour)) d.push([x - 2, y + 2]);
    //1点半
    if (y - 2 >= 5 && x + 2 <= 8 && !map[y - 1][x + 1] && (!map[y - 2][x + 2] || XiangqiTeller.getPiceColor(map[y - 2][x + 2]) != piece.colour)) d.push([x + 2, y - 2]);
    //10点半
    if (y - 2 >= 5 && x - 2 >= 0 && !map[y - 1][x - 1] && (!map[y - 2][x - 2] || XiangqiTeller.getPiceColor(map[y - 2][x - 2]) != piece.colour)) d.push([x - 2, y - 2]);
  } else {
    //4点半
    if (y + 2 <= 4 && x + 2 <= 8 && !map[y + 1][x + 1] && (!map[y + 2][x + 2] || XiangqiTeller.getPiceColor(map[y + 2][x + 2]) != piece.colour)) d.push([x + 2, y + 2]);
    //7点半
    if (y + 2 <= 4 && x - 2 >= 0 && !map[y + 1][x - 1] && (!map[y + 2][x - 2] || XiangqiTeller.getPiceColor(map[y + 2][x - 2]) != piece.colour)) d.push([x - 2, y + 2]);
    //1点半
    if (y - 2 >= 0 && x + 2 <= 8 && !map[y - 1][x + 1] && (!map[y - 2][x + 2] || XiangqiTeller.getPiceColor(map[y - 2][x + 2]) != piece.colour)) d.push([x + 2, y - 2]);
    //10点半
    if (y - 2 >= 0 && x - 2 >= 0 && !map[y - 1][x - 1] && (!map[y - 2][x - 2] || XiangqiTeller.getPiceColor(map[y - 2][x - 2]) != piece.colour)) d.push([x - 2, y - 2]);
  }
  return d;
}

//士，行棋路径只能是九宫内的斜线；
XiangqiRules.ways.s = function (piece, map) {
  var x = piece.x;
  var y = piece.y;

  if (map[y][x] != piece.id) {
    return []
  }
  var d = [];

  if (piece.isRed()) { //红方
    //4点半
    if (y + 1 <= 9 && x + 1 <= 5 && (!map[y + 1][x + 1] || XiangqiTeller.getPiceColor(map[y + 1][x + 1]) != piece.colour)) d.push([x + 1, y + 1]);
    //7点半
    if (y + 1 <= 9 && x - 1 >= 3 && (!map[y + 1][x - 1] || XiangqiTeller.getPiceColor(map[y + 1][x - 1]) != piece.colour)) d.push([x - 1, y + 1]);
    //1点半
    if (y - 1 >= 7 && x + 1 <= 5 && (!map[y - 1][x + 1] || XiangqiTeller.getPiceColor(map[y - 1][x + 1]) != piece.colour)) d.push([x + 1, y - 1]);
    //10点半
    if (y - 1 >= 7 && x - 1 >= 3 && (!map[y - 1][x - 1] || XiangqiTeller.getPiceColor(map[y - 1][x - 1]) != piece.colour)) d.push([x - 1, y - 1]);
  } else {
    //4点半
    if (y + 1 <= 2 && x + 1 <= 5 && (!map[y + 1][x + 1] || XiangqiTeller.getPiceColor(map[y + 1][x + 1]) != piece.colour)) d.push([x + 1, y + 1]);
    //7点半
    if (y + 1 <= 2 && x - 1 >= 3 && (!map[y + 1][x - 1] || XiangqiTeller.getPiceColor(map[y + 1][x - 1]) != piece.colour)) d.push([x - 1, y + 1]);
    //1点半
    if (y - 1 >= 0 && x + 1 <= 5 && (!map[y - 1][x + 1] || XiangqiTeller.getPiceColor(map[y - 1][x + 1]) != piece.colour)) d.push([x + 1, y - 1]);
    //10点半
    if (y - 1 >= 0 && x - 1 >= 3 && (!map[y - 1][x - 1] || XiangqiTeller.getPiceColor(map[y - 1][x - 1]) != piece.colour)) d.push([x - 1, y - 1]);
  }
  return d;

}

//将，只能在“九宫”之内活动，可上可下，可左可右，每次走动只能按竖线或横线走动一格。帅与将不能在同一直线上直接对面，否则走方判负。
XiangqiRules.ways.j = function (piece, map) {
  var x = piece.x;
  var y = piece.y;

  if (map[y][x] != piece.id) {
    return []
  }
  var d = [];

  let redj0 = XiangqiTeller.getPosition(map, "j0");
  var redX = redj0.x;
  var redY = redj0.y;

  let blackJ0 = XiangqiTeller.getPosition(map, "J0");
  var blackX = blackJ0.x;
  var blackY = blackJ0.y;

  /** 检查两个将之间是否有其他棋子，从黑棋“将”这一行开始 到 红棋“将”这一行之间是否有棋子；如果中间无子，则会出现将对将的局面，称为飞将 */
  // 检查两个将之间是否有其他棋子，从黑棋"将"这一行开始到红棋"将"这一行之间是否有棋子
  let flyingGeneral = false;
  if (redX == blackX) {
    let hasBlockingPiece = false;
    for (let i = Math.min(blackY, redY) + 1; i < Math.max(blackY, redY); i++) {
      if (map[i][blackX]) {
        hasBlockingPiece = true;
        break;
      }
    }
    flyingGeneral = !hasBlockingPiece;
  }

  if (piece.isRed()) { //红方
    if (flyingGeneral && blackY > redY) { // 红将只能向上飞将
      d.push([blackX, blackY]);
    }
    //下
    if (y + 1 <= 9 && (!map[y + 1][x] || XiangqiTeller.getPiceColor(map[y + 1][x]) != piece.colour)) d.push([x, y + 1]);
    //上
    if (y - 1 >= 7 && (!map[y - 1][x] || XiangqiTeller.getPiceColor(map[y - 1][x]) != piece.colour)) d.push([x, y - 1]);
  } else {
    if (flyingGeneral && redY > blackY) { // 黑将只能向下飞将
      d.push([redX, redY]);
    }
    //下
    if (y + 1 <= 2 && (!map[y + 1][x] || XiangqiTeller.getPiceColor(map[y + 1][x]) != piece.colour)) d.push([x, y + 1]);
    //上
    if (y - 1 >= 0 && (!map[y - 1][x] || XiangqiTeller.getPiceColor(map[y - 1][x]) != piece.colour)) d.push([x, y - 1]);
  }
  //右
  if (x + 1 <= 5 && (!map[y][x + 1] || XiangqiTeller.getPiceColor(map[y][x + 1]) != piece.colour)) d.push([x + 1, y]);
  //左
  if (x - 1 >= 3 && (!map[y][x - 1] || XiangqiTeller.getPiceColor(map[y][x - 1]) != piece.colour)) d.push([x - 1, y]);
  return d;
}

//炮，炮在不吃子的时候，走动与车完全相同，但炮在吃子时，必须跳过一个棋子；
XiangqiRules.ways.p = function (piece, map) {
  var x = piece.x;
  var y = piece.y;

  if (map[y][x] != piece.id) {
    return []
  }
  var d = [];

  //左侧检索
  var n = 0;
  for (var i = x - 1; i >= 0; i--) {
    if (map[y][i]) {
      if (n == 0) {
        n++;
        continue;
      } else {
        if (XiangqiTeller.getPiceColor(map[y][i]) != piece.colour) d.push([i, y]);
        break
      }
    } else {
      if (n == 0) d.push([i, y])
    }
  }
  //右侧检索
  var n = 0;
  for (var i = x + 1; i <= 8; i++) {
    if (map[y][i]) {
      if (n == 0) {
        n++;
        continue;
      } else {
        if (XiangqiTeller.getPiceColor(map[y][i]) != piece.colour) d.push([i, y]);
        break
      }
    } else {
      if (n == 0) d.push([i, y])
    }
  }
  //上检索
  var n = 0;
  for (var i = y - 1; i >= 0; i--) {
    if (map[i][x]) {
      if (n == 0) {
        n++;
        continue;
      } else {
        if (XiangqiTeller.getPiceColor(map[i][x]) != piece.colour) d.push([x, i]);
        break
      }
    } else {
      if (n == 0) d.push([x, i])
    }
  }
  //下检索
  var n = 0;
  for (var i = y + 1; i <= 9; i++) {
    if (map[i][x]) {
      if (n == 0) {
        n++;
        continue;
      } else {
        if (XiangqiTeller.getPiceColor(map[i][x]) != piece.colour) d.push([x, i]);
        break
      }
    } else {
      if (n == 0) d.push([x, i])
    }
  }
  return d;
}

//卒，只能向前走，不能后退，在未过河前，不能横走。过河以后还可左、右移动，但也只能一次一步；
XiangqiRules.ways.z = function (piece, map) {
  var x = piece.x;
  var y = piece.y;

  if (map[y][x] != piece.id) {
    return []
  }
  var d = [];

  // 卒子统一移动规则（从玩家视角看都是向上移动）
  const forwardY = y - 1; // 向上移动
  if (forwardY >= 0 && (!map[forwardY][x] || XiangqiTeller.getPiceColor(map[forwardY][x]) != piece.colour)) {
    d.push([x, forwardY]);
  }

  // 过河判断（从玩家视角看，过河是y <= 4）
  console.log(y);
  if (y <= 4) {
    // 右
    if (x + 1 <= 8 && (!map[y][x + 1] || XiangqiTeller.getPiceColor(map[y][x + 1]) != piece.colour)) {
      d.push([x + 1, y]);
    }
    // 左
    if (x - 1 >= 0 && (!map[y][x - 1] || XiangqiTeller.getPiceColor(map[y][x - 1]) != piece.colour)) {
      d.push([x - 1, y]);
    }
  }

  return d;
}

XiangqiRules.RelativeValues = {

  //车价值
  c: [
    [206, 208, 207, 213, 214, 213, 207, 208, 206],
    [206, 212, 209, 216, 233, 216, 209, 212, 206],
    [206, 208, 207, 214, 216, 214, 207, 208, 206],
    [206, 213, 213, 216, 216, 216, 213, 213, 206],
    [208, 211, 211, 214, 215, 214, 211, 211, 208],

    [208, 212, 212, 214, 215, 214, 212, 212, 208],
    [204, 209, 204, 212, 214, 212, 204, 209, 204],
    [198, 208, 204, 212, 212, 212, 204, 208, 198],
    [200, 208, 206, 212, 200, 212, 206, 208, 200],
    [194, 206, 204, 212, 200, 212, 204, 206, 194]
  ],

  //马价值
  m: [
    [90, 90, 90, 96, 90, 96, 90, 90, 90],
    [90, 96, 103, 97, 94, 97, 103, 96, 90],
    [92, 98, 99, 103, 99, 103, 99, 98, 92],
    [93, 108, 100, 107, 100, 107, 100, 108, 93],
    [90, 100, 99, 103, 104, 103, 99, 100, 90],

    [90, 98, 101, 102, 103, 102, 101, 98, 90],
    [92, 94, 98, 95, 98, 95, 98, 94, 92],
    [93, 92, 94, 95, 92, 95, 94, 92, 93],
    [85, 90, 92, 93, 78, 93, 92, 90, 85],
    [88, 85, 90, 88, 90, 88, 90, 85, 88]
  ],

  //相价值
  x: [
    [0, 0, 20, 0, 0, 0, 20, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 23, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 20, 0, 0, 0, 20, 0, 0],

    [0, 0, 20, 0, 0, 0, 20, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [18, 0, 0, 0, 23, 0, 0, 0, 18],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 20, 0, 0, 0, 20, 0, 0]
  ],

  //士价值
  s: [
    [0, 0, 0, 20, 0, 20, 0, 0, 0],
    [0, 0, 0, 0, 23, 0, 0, 0, 0],
    [0, 0, 0, 20, 0, 20, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 20, 0, 20, 0, 0, 0],
    [0, 0, 0, 0, 23, 0, 0, 0, 0],
    [0, 0, 0, 20, 0, 20, 0, 0, 0]
  ],

  //奖价值
  j: [
    [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
    [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
    [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
    [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
    [0, 0, 0, 8888, 8888, 8888, 0, 0, 0]
  ],

  //炮价值
  p: [

    [100, 100, 96, 91, 90, 91, 96, 100, 100],
    [98, 98, 96, 92, 89, 92, 96, 98, 98],
    [97, 97, 96, 91, 92, 91, 96, 97, 97],
    [96, 99, 99, 98, 100, 98, 99, 99, 96],
    [96, 96, 96, 96, 100, 96, 96, 96, 96],

    [95, 96, 99, 96, 100, 96, 99, 96, 95],
    [96, 96, 96, 96, 96, 96, 96, 96, 96],
    [97, 96, 100, 99, 101, 99, 100, 96, 97],
    [96, 97, 98, 98, 98, 98, 98, 97, 96],
    [96, 96, 97, 99, 99, 99, 97, 96, 96]
  ],

  //卒价值
  z: [
    [9, 9, 9, 11, 13, 11, 9, 9, 9],
    [19, 24, 34, 42, 44, 42, 34, 24, 19],
    [19, 24, 32, 37, 37, 37, 32, 24, 19],
    [19, 23, 27, 29, 30, 29, 27, 23, 19],
    [14, 18, 20, 27, 29, 27, 20, 18, 14],

    [7, 0, 13, 0, 16, 0, 13, 0, 7],
    [7, 0, 7, 0, 15, 0, 7, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
}

//黑子为红子价值位置的倒置
XiangqiRules.RelativeValues.C = deepClone(XiangqiRules.RelativeValues.c).reverse();
XiangqiRules.RelativeValues.M = deepClone(XiangqiRules.RelativeValues.m).reverse();
XiangqiRules.RelativeValues.X = XiangqiRules.RelativeValues.x;
XiangqiRules.RelativeValues.S = XiangqiRules.RelativeValues.s;
XiangqiRules.RelativeValues.J = XiangqiRules.RelativeValues.j;
XiangqiRules.RelativeValues.P = deepClone(XiangqiRules.RelativeValues.p).reverse();
XiangqiRules.RelativeValues.Z = deepClone(XiangqiRules.RelativeValues.z).reverse();


XiangqiTeller = {
  getPosition(map, id) {
    for (let row = 0; row < 5; row++) {/** 棋盘只有10行 */
      let row1 = 2 * row;
      let row2 = 2 * row + 1;
      for (let col = 0; col < 9; col++) {/** 棋盘只有9列 */
        if (map[row1][col] == id) {
          let x = col;
          let y = row1;
          return { x, y };
        }
        if (map[row2][col] == id) {
          let x = col;
          let y = row2;
          return { x, y };
        }
      }
    }
    return { x: 0, y: 0 };
  },

  getRowCol(map, id) {
    if (!id) {
      return null;
    }
    for (let row = 0; row < 5; row++) {/** 棋盘只有10行 */
      let row1 = 2 * row;
      let row2 = 2 * row + 1;
      for (let col = 0; col < 9; col++) {/** 棋盘只有9列 */
        if (map[row1][col] == id) {
          return { row: row1, col: col };
        }
        if (map[row2][col] == id) {
          return { row: row2, col: col };
        }
      }
    }
    return { row: 0, col: 0 };
  },

  getPiceColor(id) {
    return XiangqiRules.piecesBoard[id].colour;
  },

  //把坐标生成着法
  makeMovesHumanReadable(piece, x, y, newX, newY) {
    console.log("piece", piece);
    var h = piece.text || piece.label;
    if (piece.colour === 1) {
      var mumTo = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
      newX = 8 - newX;
      h += mumTo[8 - x];
      if (newY > y) {
        h += "退";
        if (piece.name == "m" || piece.name == "s" || piece.name == "x") {
          h += mumTo[newX];
        } else {
          h += mumTo[newY - y - 1];
        }
      } else if (newY < y) {
        h += "进";
        if (piece.name == "m" || piece.name == "s" || piece.name == "x") {
          h += mumTo[newX];
        } else {
          h += mumTo[y - newY - 1];
        }
      } else {
        h += "平";
        h += mumTo[newX];
      }
    } else {
      var mumTo = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      h += mumTo[x];
      if (newY > y) {
        h += "进";
        if (piece.name == "M" || piece.name == "S" || piece.name == "X") {
          h += mumTo[newX];
        } else {
          h += mumTo[newY - y - 1];
        }
      } else if (newY < y) {
        h += "退";
        if (piece.name == "M" || piece.name == "S" || piece.name == "X") {
          h += mumTo[newX];
        } else {
          h += mumTo[y - newY - 1];
        }
      } else {
        h += "平";
        h += mumTo[newX];
      }
    }
    return h;
  },

  //局面评价函数;
  //评估棋局 取得棋盘双方棋子价值差
  evaluate(map, colour) {
    var val = 0;
    for (var row = 0; row < map.length; row++) {
      for (var col = 0; col < map[row].length; col++) {
        var key = map[row][col];
        if (key) {
          val += (new XiangqiPiece(key, row, col).positionValue());
        }
      }
    }
    return val * colour;
  },

  //检查是否长将
  checkFoul(pace) {
    var len = parseInt(pace.length, 10);
    if (len > 11 && pace[len - 1] == pace[len - 5] && pace[len - 5] == pace[len - 9]) {
      return pace[len - 4].split("");
    }
    return false;
  },

  pieceCreatFactory(map, id) {
    let position = this.getRowCol(map, id);
    return new XiangqiPiece(id, position.row, position.col);
  },
}


/**
 * @attr
 *  id: string; #map中棋子的唯一标识；
 *  name: string; #棋子的名字;
 *  label: string; #棋子的文字；
 *  colour:  number;# 1红, -1黑
 */
class XiangqiPiece {

  constructor(id, row, col) {
    this.id = id;
    this.row = row;
    this.col = col;

    /**  转换成旧的x，y认知 */
    this.x = col;
    this.y = row;

    this.name = XiangqiRules.piecesSets[id];
    let piece = XiangqiRules.piecesBoard[id];
    this.label = piece.label;
    this.img = piece.img;
    this.colour = piece.colour;
    this.wayId = piece.wayId;
    this.valueId = piece.valueId;
  }

  getImageKey(playerColour) {
    console.log("playerColour", playerColour, this.id);
    if (playerColour == PlayerColor.red) {
      return XiangqiRules.RedPiecesImgs[this.id];
    } else {
      return XiangqiRules.BlackPiecesImgs[this.id];
    }
  }

  getValue() {
    return XiangqiRules.RelativeValues[this.valueId]
  }

  getWays(map) {
    return XiangqiRules.ways[this.wayId](this, map);
  }

  isRed() {
    return this.colour === 1;
  }

  isBlack() {
    return this.colour === -1;
  }

  positionValue() {
    let value = this.getValue()[this.row][this.col];
    return value * this.colour;
  }

  /* 判断着法是否符合棋子的走法规则
   * 判断将要落子的坐标是否在所有可以落子的坐标中。
   */
  isInDots(map, x, y) {
    let validDots = XiangqiRules.ways[this.wayId](this, map);
    return validDots.some((ps_i) => ps_i[0] == x && ps_i[1] == y);
  }
}
class GameBg {
  constructor(img, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.isShow = true;
    this.bgImg = new Image();
  }
}
class GamePane {
  constructor(img, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.newX = x || 0;
    this.newY = y || 0;
    this.isShow = true;
    this.paneImg = new Image();
  }
}

class GameDot {
  constructor(img, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.isShow = true;
    this.dots = [];
    this.dotImg = new Image();
  }
}


var AI = {
  maxDepth: 6,//搜索深度
  getGoodMove(map, partSide) {
    //人工智能开始运作
    var startedTime = new Date().getTime();
    AI.number = 0;

    var val = getAlphaBeta(-99999, 99999, AI.maxDepth, deepClone(map), partSide);

    //-8888表示被将死
    if (val && val.value != -8888) {
      let piece = XiangqiTeller.pieceCreatFactory(map, val.key);

      // 检查是否是的第一手棋
      var isFirstMove = refereeingOfficer.phaseContext.length === 0;

      // 检查是否是将军移动
      var targetPiece = map[val.y][val.x];
      if (targetPiece && ((targetPiece === 'j0' && !playerIsRed) || (targetPiece === 'J0' && playerIsRed))) {
        // 如果是将军移动且是第一手棋，重新获取一步不将军的走法
        if (isFirstMove) {
          var safeResult = getAlphaBeta(-99999, 99999, AI.maxDepth, deepClone(map), partSide);
          while (safeResult && map[safeResult.y][safeResult.x] &&
            ((map[safeResult.y][safeResult.x] === 'j0' && !playerIsRed) ||
              (map[safeResult.y][safeResult.x] === 'J0' && playerIsRed))) {
            safeResult = getAlphaBeta(-99999, 99999, AI.maxDepth, deepClone(map), partSide);
          }
          if (safeResult) {
            val = safeResult;
            piece = XiangqiTeller.pieceCreatFactory(map, val.key);
          }
        }
      }

      var nowTime = new Date().getTime();
      console.log('最佳着法：' + XiangqiTeller.makeMovesHumanReadable(piece, piece.x, piece.y, val.x, val.y) +
        ' 搜索深度：' + AI.maxDepth +
        ' 搜索分支：' + AI.number + '个' +
        ' 最佳着法评估：' + val.value + '分' +
        ' 搜索用时：' + (nowTime - startedTime) + '毫秒')
      return [piece.x, piece.y, val.x, val.y]
    } else {
      return null;
    }
  },
  getMoves(map, colour) {
    var moves = [];

    //检查是否长将
    var foul = XiangqiTeller.checkFoul(refereeingOfficer.phaseContext);

    //取得棋盘上所有棋子
    for (var row = 0; row < map.length; row++) {
      for (var col = 0; col < map[row].length; col++) {
        var key = map[row][col];

        if (key) {
          let piece = new XiangqiPiece(key, row, col);
          if (piece.colour == colour) {
            let ways = piece.getWays(map);
            ways.forEach(way => {
              let oldX = piece.x;
              let oldY = piece.y;
              let newX = way[0];
              let newY = way[1];
              //仅收录非长将着法
              if (!foul || foul[0] != oldX || foul[1] != oldY || foul[2] != newX || foul[3] != newY) {
                moves.push({ oldX, oldY, newX, newY, key });
              }
            });
          }
        }
      }
    }

    return moves;
  }

};

/**
 *@params
 * aValue: 我方棋手value
 * bValue: 对方棋手value
 * depth: 层级
 * map: 棋局
 * side: side ∈{1,-1}代表选手
 */
function getAlphaBeta(aValue, bValue, depth, map, side) {
  var rootKey;
  if (depth == 0) {
    return { "value": XiangqiTeller.evaluate(map, side) };
  }

  //根据棋盘情况，获取可用棋子的走法;
  var moves = AI.getMoves(map, side);
  for (var i = 0; i < moves.length; i++) {
    var move = moves[i];
    let mapCopy = deepClone(map)
    mapCopy[move.newY][move.newX] = move.key;
    mapCopy[move.oldY][move.oldX] = null;
    move.value = XiangqiTeller.evaluate(mapCopy, side);
    AI.number++;
  }

  moves = moves.sort((a, b) => b.value - a.value).slice(0, 10)

  //这里排序以后会增加效率
  for (var i = 0; i < moves.length; i++) {
    //走这个走法;
    var move = moves[i];
    var { key, oldX, oldY, newX, newY } = { ...move };

    var clearKey = map[newY][newX] || "";
    map[newY][newX] = key;
    map[oldY][oldX] = null;

    if (clearKey == "j0" || clearKey == "J0") {//被吃老将,撤消这个走法;
      map[oldY][oldX] = key;
      map[newY][newX] = null;
      if (clearKey) {
        map[newY][newX] = clearKey;
      }
      return { "key": key, "x": newX, "y": newY, "value": 8888 };
    } else {
      var val = -getAlphaBeta(-bValue, -aValue, depth - 1, map, -side).value;
      //撤消这个走法;　
      map[oldY][oldX] = key;
      map[newY][newX] = null;
      if (clearKey) {
        map[newY][newX] = clearKey;
      }
      if (val >= bValue) {
        //将这个走法记录到历史表中;
        return { "key": key, "x": newX, "y": newY, "value": bValue };
      }
      if (val > aValue) {
        aValue = val; //设置最佳走法;
        if (AI.maxDepth == depth) rootKey = { "key": key, "x": newX, "y": newY, "value": aValue };
      }
    }
  }
  //将这个走法记录到历史表中;
  if (AI.maxDepth == depth) {//已经递归回根了
    if (!rootKey) {
      //没有最佳走法，说明被将死了，返回null
      return null;
    } else {
      return rootKey;
    }
  }
  return { "key": key, "x": newX, "y": newY, "value": aValue };
}

const PlayerColor = {
  red: 1,
  black: -1
}

class GameRoom {
  constructor() {
    this.currentPlayer = new Player();
    this.otherPlayer = new Player();;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.colour = PlayerColor.red;
    this.imgColour = PlayerColor.red;
  }

  AutoPlay() {
    var pace = AI.getGoodMove(contestHandler.map, this.colour);
    if (!pace) {
      gameHolder.showWin(1);
      return;
    }
    refereeingOfficer.addPhaseContext(pace.join(""));
    var attacker = contestHandler.map[pace[1]][pace[0]];
    var targetKey = contestHandler.map[pace[3]][pace[2]];
    if (targetKey) {
      this.AutoClickMan(attacker, pace[0], pace[1], targetKey, pace[2], pace[3]);
    } else {
      this.AutoClickPoint(attacker, pace[0], pace[1], pace[2], pace[3]);
    }
    jOlly.getEle("clickAudio").play();
    // 走棋之后，将控制交给玩家
    refereeingOfficer.isPlay = true;
  }

  AutoClickMan(attacker, oldX, oldY, target, newX, newY) {
    contestHandler.map[oldY][oldX] = null;
    contestHandler.map[newY][newX] = attacker;
    gameHolder.showPane(oldX, oldY, newX, newY);
    contestHandler.nowManKey = null;
    gameHolder.drawPieces()
    if (target == "j0") gameHolder.showWin(-1);
    if (target == "J0") gameHolder.showWin(1);
  }

  //吃子
  AutoClickPoint(key, oldX, oldY, newX, newY) {
    contestHandler.map[oldY][oldX] = null;
    contestHandler.map[newY][newX] = key;
    gameHolder.showPane(oldX, oldY, newX, newY);
    contestHandler.nowManKey = null;
    gameHolder.drawPieces();
  }
}

/*
游戏架构设计:
1、样式管理
样式包括：游戏主题、棋盘大小、棋子大小、棋子外框大小、棋子外框位置、棋子外框颜色、棋子外框边框颜色、棋子外框边框大小、棋子外框边框位置、棋子外框边框颜色、棋子外框边框大小、棋子外框边框位置、棋子外框边框颜色、棋子外框边框大小、棋子外框边框位置、棋子外框边框颜色、棋子外框边框大小、棋子外框边框位置、棋子外框边框颜色、棋子外框边框大小、棋子外框边框位置、棋子外框边框颜色、棋子外框边框大小、棋子外框边框位置、棋子外框边框颜色、棋子外框边框大小、棋子外框边框位置、棋子外框边框颜色、棋子外框边框大小、棋子外框边框位置、棋子外框边框颜色、棋子外框边框大小、棋子外框边框位置、棋子外框边框颜色、棋子外框边框大小。
2、棋子管理
棋子包括：棋子类型、棋子名称、棋子可走位置、棋子的权重、棋子状态
3、棋盘管理
棋盘包括：绘画、点击事件
4、棋子移动管理
移动：棋子权值计算、棋子走棋、棋子吃子、规则判断、输赢判断
5、玩家：玩家可以是人，也可以是AI
玩家可以执黑，也可以执红
6、页面交互管理
 */

//游戏主题样式
const GameThemes = {
  stype1: {
    width: 325,  //画布宽度
    height: 402,   //画布高度
    spaceX: 35,  //着点X跨度
    spaceY: 36,  //着点Y跨度
    pointStartX: 5,  //第一个着点X坐标;
    pointStartY: 19,  //第一个着点Y坐标;
    page: "stype_1" //图片目录
  },
  stype2: {
    width: 523,  //画布宽度
    height: 580,   //画布高度
    spaceX: 57,  //着点X跨度
    spaceY: 57,  //着点Y跨度
    pointStartX: 3,  //第一个着点X坐标;
    pointStartY: 5,  //第一个着点Y坐标;
    page: "stype_2" //图片目录
  },
  stype3: {
    width: 530,  //画布宽度
    height: 567,   //画布高度
    spaceX: 57,  //着点X跨度
    spaceY: 57,  //着点Y跨度
    pointStartX: -2,  //第一个着点X坐标;
    pointStartY: 0,  //第一个着点Y坐标;
    page: "stype_3" //图片目录
  }
}

class ArbiterOfficer {
  constructor() {
    this.phaseContext = [];//记录每一步
    this.isPlay = true;  //是否能走棋
  }

  reset() {
    this.phaseContext = [];
  }

  addPhaseContext(phaseContext) {
    this.phaseContext.push(phaseContext);
  }
}

// 发布/订阅系统
class PubSub {
  constructor() {
    this.subscribers = {};
  }

  // 订阅事件
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
    return () => this.unsubscribe(event, callback); // 返回取消订阅的函数
  }

  // 取消订阅
  unsubscribe(event, callback) {
    if (!this.subscribers[event]) return;
    this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback);
  }

  // 发布事件
  publish(event, data) {
    if (!this.subscribers[event]) return;
    this.subscribers[event].forEach(callback => {
      callback(data);
    });
  }
}

// 创建全局事件总线
const eventBus = new PubSub();

const aiTracer = {
  // 初始化，订阅行动事件
  // IYT 表示 it's your turn
  // 在AI走棋之前，先订阅IYT事件，然后在AI走棋之后，发布IYT事件，让玩家走棋
  init() {
    eventBus.subscribe('IYT', () => {
      setTimeout(() => gameRoom.otherPlayer.AutoPlay(), 500);
    });
  },
}

class ContestHandler {
  init(map) {
    this.mapBackup = deepClone(map);
    this.map = deepClone(map); //初始化棋盘
    this.nowManKey = null;  //现在要操作的棋子
    this.selectedPos = null; // 当前选中棋子的位置
    refereeingOfficer.isPlay = true;  //是否能走棋
    gameHolder.pane.isShow = false;  //隐藏方块
    gameHolder.drawBg();
    gameHolder.drawPieces();

    //绑定点击事件
    gameHolder.canvas.addEventListener("click", (evt) => { this.clickCanvas(evt) });
  }

  //悔棋
  regret() {
    var map = deepClone(this.mapBackup);
    var pace = refereeingOfficer.phaseContext;
    pace.pop();
    pace.pop();

    for (var i = 0; i < pace.length; i++) {
      var p = pace[i].split("")
      var x = parseInt(p[0], 10);
      var y = parseInt(p[1], 10);
      var newX = parseInt(p[2], 10);
      var newY = parseInt(p[3], 10);
      var key = map[y][x];
      map[newY][newX] = key;
      map[y][x] = null;
      if (i == pace.length - 1) {
        gameHolder.showPane(newX, newY, x, y)
      }
    }
    this.map = map;
    refereeingOfficer.isPlay = true;
    gameHolder.drawPieces();
  }

  //点击棋盘事件
  clickCanvas(e) {
    console.log(this)
    if (!refereeingOfficer.isPlay) return false;
    var key = this.getClickMan(e);
    var point = this.getClickPoint(e);

    var x = point.x;
    var y = point.y;
    if (key) {
      this.manualClickMan(key, x, y);
    } else {
      //点击到棋盘空白着点
      let rowcol = XiangqiTeller.getRowCol(this.map, this.nowManKey)
      if (rowcol) {
        this.manualClickPoint(this.nowManKey, rowcol.col, rowcol.row, x, y);
      }

    }
  }

  //点击棋子，两种情况，选中或者吃子
  manualClickMan(key, newX, newY) {
    // 不是玩家的轮次，不允许玩家操作
    if (!refereeingOfficer.isPlay) return false;

    console.log(key, newX, newY);
    if (this.nowManKey && this.nowManKey != key && XiangqiTeller.getPiceColor(this.nowManKey) != XiangqiTeller.getPiceColor(key)) {
      //吃子
      let rowcol = XiangqiTeller.getRowCol(this.map, this.nowManKey);
      this.manualCapture(this.nowManKey, rowcol.col, rowcol.row, key, newX, newY);
    } else {// 选中棋子
      this.manualPickup(key, newX, newY);
    }
  }

  manualPickup(key, newX, newY) {
    // 不是玩家的轮次，不允许玩家操作
    if (!refereeingOfficer.isPlay) return false;

    let piece = new XiangqiPiece(key, newY, newX);
    if (piece.colour == gameRoom.currentPlayer.colour) {
      gameHolder.pane.isShow = false;
      this.nowManKey = key;
      // 保存选中棋子的位置
      this.selectedPos = { x: newX, y: newY };
      gameHolder.dot.dots = piece.getWays(this.map);
      gameHolder.drawPieces();
      jOlly.getEle("selectAudio").play();
    }
  }

  //点击着点
  manualClickPoint(attackerKey, oldX, oldY, newX, newY) {
    // 如果不是玩家轮次，不允许玩家操作
    if (!refereeingOfficer.isPlay) return false;

    if (attackerKey) {
      let piece = new XiangqiPiece(attackerKey, oldY, oldX);
      if (piece.isInDots(this.map, newX, newY)) {
        var pace = oldX + "" + oldY + newX + newY;
        this.map[oldY][oldX] = null;
        this.map[newY][newX] = attackerKey;
        gameHolder.showPane(oldX, oldY, newX, newY);
        refereeingOfficer.addPhaseContext(pace);
        this.nowManKey = null;
        this.selectedPos = null; // 清除选中状态
        gameHolder.dot.dots = [];
        gameHolder.drawPieces();
        jOlly.getEle("clickAudio").play();
        // 发布回合事件
        refereeingOfficer.isPlay = false;
        eventBus.publish('IYT');
      }
    }
  }

  manualCapture(attackerKey, oldX, oldY, targetKey, newX, newY) {
    // 如果不是玩家轮次，不允许玩家操作
    if (!refereeingOfficer.isPlay) return false;

    let attacker = new XiangqiPiece(attackerKey, oldY, oldX);

    //man为被吃掉的棋子
    if (attacker.isInDots(this.map, newX, newY)) {
      var pace = oldX + "" + oldY + newX + newY;
      refereeingOfficer.addPhaseContext(pace);

      this.map[oldY][oldX] = null;
      this.map[newY][newX] = this.nowManKey;
      gameHolder.showPane(oldX, oldY, newX, newY);

      this.nowManKey = null;
      this.selectedPos = null; // 清除选中状态
      gameHolder.pane.isShow = false;
      gameHolder.dot.dots = [];
      gameHolder.drawPieces();
      jOlly.getEle("clickAudio").play();

      if (targetKey == "j0") {
        gameHolder.showWin(-1);
      } else if (targetKey == "J0") {
        gameHolder.showWin(1);
      } else {
        // 发布回合事件
        refereeingOfficer.isPlay = false;

        eventBus.publish('IYT');

      }
    }
  }


  //获得点击的着点
  getClickPoint(e) {
    var domXY = jOlly.getDomXY(gameHolder.canvas);
    var x = Math.round((e.pageX - domXY.x - gameHolder.theme.pointStartX - 20) / gameHolder.theme.spaceX)
    var y = Math.round((e.pageY - domXY.y - gameHolder.theme.pointStartY - 20) / gameHolder.theme.spaceY)
    return { "x": x, "y": y }
  }



  //获得棋子
  getClickMan(e) {
    var clickXY = this.getClickPoint(e);
    var x = clickXY.x;
    var y = clickXY.y;
    if (x < 0 || x > 8 || y < 0 || y > 9) return false;
    return (this.map[y][x] && this.map[y][x] != "0") ? this.map[y][x] : false;
  }


}

class GameHolder {
  constructor() {
    this.stype = "stype2";
    this.canvas = jOlly.getEle("chess"); //画布
    this.ct = this.canvas.getContext("2d");
    this.theme = {
      ...GameThemes[this.stype]
    }
    this.bg = new GameBg();
    this.dot = new GameDot();
    this.pane = new GamePane();
    this.pane.isShow = false;
    this.mans = {};  //棋子集合
  }

  resetTheme(stype) {
    this.stype = stype || "stype2";
    this.theme = {
      ...GameThemes[this.stype]
    }
    this.chessImages = {};
    this.canvas.width = this.theme.width;
    this.canvas.height = this.theme.height;
    this.loadImages();//载入图片/图片目录
  }

  showWin(partSide) {
    refereeingOfficer.isPlay = false;
    if (partSide === 1) {
      Talice.speakWin();
      alert("恭喜，你赢了！");
    } else {
      alert("很遗憾，你输了！");
    }
  }

  //载入图片
  loadImages() {
    //绘制棋盘
    this.bg.bgImg.src = "img/" + this.theme.page + "/bg.png";
    //提示点
    this.dot.dotImg.src = "img/" + this.theme.page + "/dot.png";

    //棋子外框
    this.pane.paneImg.src = "img/" + this.theme.page + "/r_box.png";

    //棋子
    for (var i in XiangqiRules.piecesHash) {
      console.log("piece key", i);
      this.chessImages[i] = {};
      this.chessImages[i].img = new Image();
      this.chessImages[i].img.src = "img/" + this.theme.page + "/" + XiangqiRules.piecesHash[i].img + ".png";
    }

    document.body.style.background = "url(img/" + this.theme.page + "/bg.jpg)";
  }

  drawBg() {
    if (this.bg.isShow) {
      this.ct.drawImage(this.bg.bgImg, this.theme.spaceX * this.bg.x, this.theme.spaceY * this.bg.y);
    }
  }

  drawDots() {
    this.dot.dots.forEach((dot) => {
      if (this.dot.isShow) {
        this.ct.drawImage(this.dot.dotImg,
          this.theme.spaceX * dot[0] + 10 + this.theme.pointStartX,
          this.theme.spaceY * dot[1] + 10 + this.theme.pointStartY);
      }
    });
  }

  drawPane() {
    if (this.pane.isShow) {
      this.ct.drawImage(this.pane.paneImg,
        this.theme.spaceX * this.pane.x + this.theme.pointStartX,
        this.theme.spaceY * this.pane.y + this.theme.pointStartY);
      this.ct.drawImage(this.pane.paneImg,
        this.theme.spaceX * this.pane.newX + this.theme.pointStartX,
        this.theme.spaceY * this.pane.newY + this.theme.pointStartY);
    }
  }

  drawEach() {
    for (let row = 0; row < contestHandler.map.length; row++) {
      for (let col = 0; col < contestHandler.map[row].length; col++) {
        let key = contestHandler.map[row][col];
        if (key) {
          let piece = new XiangqiPiece(key, row, col);
          piece.isShow = true;
          if (piece.isShow) {
            this.ct.save();
            this.ct.globalAlpha = piece.alpha || 1;

            // 绘制棋子
            let imgKey = piece.getImageKey(gameRoom.currentPlayer.imgColour);
            console.log("imgKey", imgKey);
            this.ct.drawImage(this.chessImages[imgKey].img,
              this.theme.spaceX * piece.x + this.theme.pointStartX,
              this.theme.spaceY * piece.y + this.theme.pointStartY);

            // 如果是当前选中的棋子，添加选中效果
            if (contestHandler.selectedPos && contestHandler.selectedPos.x === piece.x && contestHandler.selectedPos.y === piece.y) {
              // 绘制选中效果（发光边框）
              this.ct.beginPath();
              this.ct.lineWidth = 3;
              this.ct.strokeStyle = "#ffff00"; // 黄色高亮

              // 计算棋子的位置和大小
              const pieceSize = Math.min(this.theme.spaceX, this.theme.spaceY) - 2;
              const centerX = this.theme.spaceX * piece.x + this.theme.pointStartX + pieceSize / 2;
              const centerY = this.theme.spaceY * piece.y + this.theme.pointStartY + pieceSize / 2;

              // 绘制圆形选中效果
              this.ct.arc(centerX, centerY, pieceSize / 2, 0, Math.PI * 2);
              this.ct.stroke();
            }

            this.ct.restore();
          }
        }
      }
    }
  }
  //显示列表
  drawPieces() {
    this.ct.clearRect(0, 0, this.theme.width, this.theme.height);

    this.drawBg();
    this.drawDots();
    this.drawPane();
    this.drawEach();
  }

  //显示移动的棋子外框
  showPane(x, y, newX, newY) {
    this.pane.isShow = true;
    this.pane.x = x;
    this.pane.y = y;
    this.pane.newX = newX;
    this.pane.newY = newY;
  }
}

var jOlly = {
  getEle: (id) => document.getElementById(id),
  getDepth: () => document.querySelector("input[name='depth']:checked").value,
  getClasli: () => document.querySelector("input[name='clasli']:checked").value,
  getPlayerSide: () => document.querySelector("input[name='playerSide']:checked").value,
  getDomXY: (dom) => {
    //获取元素距离页面左侧的距离
    var left = dom.offsetLeft;
    var top = dom.offsetTop;
    var current = dom.offsetParent;
    while (current !== null) {
      left += current.offsetLeft;
      top += current.offsetTop;
      current = current.offsetParent;
    }
    return { x: left, y: top };
  },
}

//开始对弈
function playBtn(e) {
  refereeingOfficer.isPlay = true;
  var depth = parseInt(jOlly.getDepth(), 10) || 3;
  AI.maxDepth = depth;
  var playerSide = jOlly.getPlayerSide() || 'first';
  gameRoom.currentPlayer.colour = PlayerColor.red;
  gameRoom.otherPlayer.colour = PlayerColor.black;
  gameRoom.currentPlayer.imgColour = PlayerColor.red;
  gameRoom.otherPlayer.imgColour = PlayerColor.black;
  contestHandler.init(OffensiveManual);

  if (playerSide != 'first') {
    gameRoom.currentPlayer.imgColour = PlayerColor.black;
    gameRoom.otherPlayer.imgColour = PlayerColor.red;
    setTimeout(() => {
      gameRoom.otherPlayer.AutoPlay();
    }, 300);
  }
  jOlly.getEle("chessBox").style.display = "block";
  jOlly.getEle("menuBox").style.display = "none";
}

//开始挑战
function clasliBtn(e) {
  refereeingOfficer.isPlay = true;
  var clasli = parseInt(jOlly.getClasli(), 10) || 0;
  contestHandler.init(ChessManuals[clasli].map);
  jOlly.getEle("chessBox").style.display = "block";
  jOlly.getEle("menuBox").style.display = "none";
}

function regretBtn(e) {
  contestHandler.regret();
}

function gohomeBtn(e) {
  jOlly.getEle("chessBox").style.display = "none";
  jOlly.getEle("menuBox").style.display = "block";
  jOlly.getEle("indexBox").style.display = "block";
  jOlly.getEle("menuQj").style.display = "none";
  jOlly.getEle("menuDy").style.display = "none";
}

function menuFh(e) {
  jOlly.getEle("indexBox").style.display = "block";
  jOlly.getEle("menuQj").style.display = "none";
  jOlly.getEle("menuDy").style.display = "none";
}

function menuGb(e) {
  jOlly.getEle("indexBox").style.display = "block";
  jOlly.getEle("menuQj").style.display = "none";
  jOlly.getEle("menuDy").style.display = "none";
}

function restartBtn(e) {
  if (confirm("是否确定要重新开始？")) {
    refereeingOfficer.isPlay = true;
    contestHandler.init(contestHandler.mapBackup);
  }
}

function indexDy(e) {
  jOlly.getEle("indexBox").style.display = "none";
  jOlly.getEle("menuQj").style.display = "none";
  jOlly.getEle("menuDy").style.display = "block";
}

function indexQj(e) {
  jOlly.getEle("indexBox").style.display = "none";
  jOlly.getEle("menuQj").style.display = "block";
  jOlly.getEle("menuDy").style.display = "none";
}

const styles = ["stype1", "stype2", "stype3"];

function stypeBtn(e) {
  let stype = gameHolder.stype || "stype1";
  let index = (styles.indexOf(stype) + 1) % styles.length;
  gameHolder.resetTheme(styles[index]);
  gameHolder.drawBg();
}

var contestHandler = new ContestHandler();
var gameHolder = new GameHolder();
var refereeingOfficer = new ArbiterOfficer();
var gameRoom = new GameRoom();

// 玩家是否执红棋（先手），默认为true
var playerIsRed = true;

window.onload = function () {
  // 初始化回合追踪器，订阅事件
  aiTracer.init();
  gameHolder.resetTheme('stype2');
  //开始对弈
  jOlly.getEle("playBtn").addEventListener("click", playBtn)

  //开始挑战
  jOlly.getEle("clasliBtn").addEventListener("click", clasliBtn)

  // 悔棋
  jOlly.getEle("regretBtn").addEventListener("click", regretBtn)

  //返回首页
  jOlly.getEle("gohomeBtn").addEventListener("click", gohomeBtn)

  //返回
  jOlly.getEle("menuFh").addEventListener("click", menuFh)

  //返回关闭
  jOlly.getEle("menuGb").addEventListener("click", menuGb)

  //重新开始棋局
  jOlly.getEle("restartBtn").addEventListener("click", restartBtn)

  //人机对弈
  jOlly.getEle("indexDy").addEventListener("click", indexDy)

  //挑战棋局
  jOlly.getEle("indexQj").addEventListener("click", indexQj)

  //换肤
  jOlly.getEle("stypeBtn").addEventListener("click", stypeBtn)
}


