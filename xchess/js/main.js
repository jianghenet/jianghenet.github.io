
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

var contestHandler = {};

contestHandler.init = function (map) {
    contestHandler.my = 1;  //玩家方
    contestHandler.mapBackup = DeepClone(map);
    contestHandler.map = DeepClone(map); //初始化棋盘
    contestHandler.nowManKey = false;  //现在要操作的棋子
    contestHandler.selectedPos = null; // 当前选中棋子的位置
    contestHandler.pace = [];  //记录每一步
    contestHandler.isPlay = true;  //是否能走棋
    contestHandler.isOffensive = true;  //是否先手
    gameHolder.pane.isShow = false;  //隐藏方块
    gameHolder.drawBg();
    gameHolder.drawPieces();

    //绑定点击事件
    gameHolder.canvas.addEventListener("click", contestHandler.clickCanvas);
}

//悔棋
contestHandler.regret = function () {
    var map = DeepClone(BasicInitManual);
    var pace = contestHandler.pace;
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
    contestHandler.map = map;
    contestHandler.my = 1;
    contestHandler.isPlay = true;
    gameHolder.drawPieces();
}

//点击棋盘事件
contestHandler.clickCanvas = function (e) {
    if (!contestHandler.isPlay) return false;
    var key = contestHandler.getClickMan(e);
    var point = contestHandler.getClickPoint(e);

    var x = point.x;
    var y = point.y;
    if (key) {
        contestHandler.manualClickMan(key, x, y);
    } else {
        //点击到棋盘空白着点
        let rowcol = XiangqiTeller.getRowCol(contestHandler.map, contestHandler.nowManKey)
        if (rowcol) {
            contestHandler.manualClickPoint(contestHandler.nowManKey, rowcol.col, rowcol.row, x, y);
        }

    }
}

//点击棋子，两种情况，选中或者吃子
contestHandler.manualClickMan = function (key, newX, newY) {
    console.log(key, newX, newY);
    if (contestHandler.nowManKey && contestHandler.nowManKey != key && XiangqiTeller.getPiceColor(contestHandler.nowManKey) != XiangqiTeller.getPiceColor(key)) {
        //吃子
        let rowcol = XiangqiTeller.getRowCol(contestHandler.map, contestHandler.nowManKey);
        contestHandler.manualCapture(contestHandler.nowManKey, rowcol.col, rowcol.row, key, newX, newY);
    } else {// 选中棋子
        contestHandler.manualPickup(key, newX, newY);
    }
}

contestHandler.manualPickup = (key, newX, newY) => {
    let piece = new XiangqiPiece(key, newY, newX);
    if (piece.isRed()) {
        gameHolder.pane.isShow = false;
        contestHandler.nowManKey = key;
        // 保存选中棋子的位置
        contestHandler.selectedPos = { x: newX, y: newY };
        gameHolder.dot.dots = piece.getWays(contestHandler.map);
        gameHolder.drawPieces();
        jLibr.getEle("selectAudio").play();
    }

}

contestHandler.manualCapture = (attackerKey, oldX, oldY, targetKey, newX, newY) => {
    let attacker = new XiangqiPiece(attackerKey, oldY, oldX);

    //man为被吃掉的棋子
    if (attacker.isInDots(contestHandler.map, newX, newY)) {
        var pace = oldX + "" + oldY + newX + newY;
        contestHandler.pace.push(pace);

        contestHandler.map[oldY][oldX] = null;
        contestHandler.map[newY][newX] = contestHandler.nowManKey;
        gameHolder.showPane(oldX, oldY, newX, newY);

        contestHandler.nowManKey = false;
        contestHandler.selectedPos = null; // 清除选中状态
        gameHolder.pane.isShow = false;
        gameHolder.dot.dots = [];
        gameHolder.drawPieces();
        jLibr.getEle("clickAudio").play();
        setTimeout(contestHandler.AIPlay, 500);
        if (targetKey == "j0") contestHandler.showWin(-1);
        if (targetKey == "J0") contestHandler.showWin(1);
    }
}

//点击着点
contestHandler.manualClickPoint = function (attackerKey, oldX, oldY, newX, newY) {
    if (attackerKey) {
        let piece = new XiangqiPiece(attackerKey, oldY, oldX);
        if (piece.isInDots(contestHandler.map, newX, newY)) {
            var pace = oldX + "" + oldY + newX + newY;
            contestHandler.map[oldY][oldX] = null;
            contestHandler.map[newY][newX] = attackerKey;
            gameHolder.showPane(oldX, oldY, newX, newY);
            contestHandler.pace.push(pace);
            contestHandler.nowManKey = null;
            contestHandler.selectedPos = null; // 清除选中状态
            gameHolder.dot.dots = [];
            gameHolder.drawPieces();
            jLibr.getEle("clickAudio").play();
            setTimeout(contestHandler.AIPlay, 500);
        }
    }
}

//Ai自动走棋
contestHandler.AIPlay = function () {
    //return
    contestHandler.my = -1;
    var pace = AI.getGoodMove();
    if (!pace) {
        contestHandler.showWin(1);
        return;
    }
    contestHandler.pace.push(pace.join(""));
    var attacker = contestHandler.map[pace[1]][pace[0]];
    var targetKey = contestHandler.map[pace[3]][pace[2]];
    if (targetKey) {
        contestHandler.AIclickMan(attacker, pace[0], pace[1], targetKey, pace[2], pace[3]);
    } else {
        contestHandler.AIclickPoint(attacker, pace[0], pace[1], pace[2], pace[3]);
    }
    jLibr.getEle("clickAudio").play();
}

//吃子
contestHandler.AIclickMan = function (attacker, oldX, oldY, target, newX, newY) {
    contestHandler.map[oldY][oldX] = null;
    contestHandler.map[newY][newX] = attacker;
    gameHolder.showPane(oldX, oldY, newX, newY);
    contestHandler.nowManKey = false;
    gameHolder.drawPieces()
    if (target == "j0") contestHandler.showWin(-1);
    if (target == "J0") contestHandler.showWin(1);
}


contestHandler.AIclickPoint = (key, oldX, oldY, newX, newY) => {
    contestHandler.map[oldY][oldX] = null;
    contestHandler.map[newY][newX] = key;
    gameHolder.showPane(oldX, oldY, newX, newY);
    contestHandler.nowManKey = false;
    gameHolder.drawPieces();
}

//获得点击的着点
contestHandler.getClickPoint = function (e) {
    var domXY = getDomXY(gameHolder.canvas);
    var x = Math.round((e.pageX - domXY.x - gameHolder.theme.pointStartX - 20) / gameHolder.theme.spaceX)
    var y = Math.round((e.pageY - domXY.y - gameHolder.theme.pointStartY - 20) / gameHolder.theme.spaceY)
    return { "x": x, "y": y }
}

//获得棋子
contestHandler.getClickMan = function (e) {
    var clickXY = contestHandler.getClickPoint(e);
    var x = clickXY.x;
    var y = clickXY.y;
    if (x < 0 || x > 8 || y < 0 || y > 9) return false;
    return (contestHandler.map[y][x] && contestHandler.map[y][x] != "0") ? contestHandler.map[y][x] : false;
}

contestHandler.showWin = function (my) {
    contestHandler.isPlay = false;
    if (my === 1) {
        Talice.speakWin();
        alert("恭喜你，你赢了！");
    } else {
        alert("很遗憾，你输了！");
    }
}

/**
 * @attr
 *  id: "c0"; map中棋子的唯一标识；
 *  name: "c"; 棋子的名字;
 *  label: "车"; 棋子的文字；
 *  color: 1; 1红方, -1黑方
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
        this.color = piece.color;
        this.wayId = piece.wayId;
        this.valueId = piece.valueId;
    }

    getValue() {
        return XiangqiRules.RelativeValues[this.valueId]
    }

    getWays(map) {
        return XiangqiRules.ways[this.wayId](this, map);
    }

    isRed() {
        return this.color === 1;
    }

    isBlack() {
        return this.color === -1;
    }

    positionValue() {
        let value = this.getValue()[this.row][this.col];
        return value * this.color;
    }

    /* 判断着法是否符合棋子的走法规则
     * 判断将要落子的坐标是否在所有可以落子的坐标中。
     */
    isInDots(map, x, y) {
        let validDots = XiangqiRules.ways[this.wayId](this, map);
        return validDots.some((ps_i) => ps_i[0] == x && ps_i[1] == y);
    }
}

XiangqiTeller = {}

XiangqiTeller.getPosition = (map, id) => {
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
}

XiangqiTeller.getRowCol = (map, id) => {
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
}

XiangqiTeller.getPiceColor = (id) => {
    return XiangqiRules.piecesBoard[id].color;
}

//把坐标生成着法
XiangqiTeller.makeMovesHumanReadable = function (piece, x, y, newX, newY) {
    var h = piece.text || piece.label;
    if (piece.my === 1) {
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
}

//局面评价函数;
//评估棋局 取得棋盘双方棋子价值差
XiangqiTeller.evaluate = function (map, my) {
    var val = 0;
    for (var row = 0; row < map.length; row++) {
        for (var col = 0; col < map[row].length; col++) {
            var key = map[row][col];
            if (key) {
                val += (new XiangqiPiece(key, row, col).positionValue());
            }
        }
    }
    AI.number++;
    return val * my;
}

//检查是否长将
XiangqiTeller.checkFoul = function (pace) {
    var len = parseInt(pace.length, 10);
    if (len > 11 && pace[len - 1] == pace[len - 5] && pace[len - 5] == pace[len - 9]) {
        return pace[len - 4].split("");
    }
    return false;
}

XiangqiTeller.showTheMap = (map) => {
    let html = map.map((mi) => mi.map((mii) => !!mii ? mii : "**").join("|")).join("\n")
    return html;
}

XiangqiTeller.getAvailableMoves = (id, map) => {
    let position = XiangqiTeller.getRowCol(map, id);
    return new XiangqiPiece(id, position.row, position.col).way(map)
}

XiangqiTeller.getValuesById = (id) => {
    let piece = XiangqiRules.piecesBoard[id];
    return XiangqiRules.RelativeValues[piece.valueId];
}

XiangqiTeller.pieceCreatFactory = (map, id) => {
    let position = XiangqiTeller.getRowCol(map, id);
    return new XiangqiPiece(id, position.row, position.col);
}

XiangqiTeller.piecesCount = (map, color) => {
    let counter = 0;
    for (let row = 0; row < 5; row++) {/** 棋盘只有10行 */
        let row1 = 2 * row;
        let row2 = 2 * row + 1;
        for (let col = 0; col < 9; col++) {/** 棋盘只有9列 */
            let p1 = XiangqiRules.piecesBoard[map[row1][col]];
            if (p1 && p1.color == color) {
                counter++;
            }

            let p2 = XiangqiRules.piecesBoard[map[row2][col]];
            if (p2 && p2.color == color) {
                counter++;
            }
        }
    }
    return counter;
}

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

class GameHolder {
    constructor() {
        this.stype = "stype2";
        this.bg = new GameBg();
        this.dot = new GameDot();
        this.pane = new GamePane();
        this.pane.isShow = false;

        this.mans = {};  //棋子集合
    }

    resetGame(stype) {
        this.stype = stype || "stype2";
        this.theme = {
            ...GameThemes[this.stype]
        }
        this.chessImages = {};

        this.canvas = jLibr.getEle("chess"); //画布
        this.ct = this.canvas.getContext("2d");
        this.canvas.width = this.theme.width;
        this.canvas.height = this.theme.height;
        this.loadImages();//载入图片/图片目录
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
                        this.ct.drawImage(this.chessImages[piece.name].img,
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
var gameHolder = new GameHolder();

function initialGame(stype) {
    gameHolder.resetGame(stype);
}

//获取元素距离页面左侧的距离
function getDomXY(dom) {
    var left = dom.offsetLeft;
    var top = dom.offsetTop;
    var current = dom.offsetParent;
    while (current !== null) {
        left += current.offsetLeft;
        top += current.offsetTop;
        current = current.offsetParent;
    }
    return { x: left, y: top };
}

window.onload = function () {
    //开始对弈
    jLibr.getEle("playBtn").addEventListener("click", function (e) {
        contestHandler.isPlay = true;
        var depth = parseInt(jLibr.getDepth(), 10) || 3;

        AI.maxDepth = depth;
        contestHandler.init(BasicInitManual);
        jLibr.getEle("chessBox").style.display = "block";
        jLibr.getEle("menuBox").style.display = "none";
    })

    //开始挑战
    jLibr.getEle("clasliBtn").addEventListener("click", function (e) {
        contestHandler.isPlay = true;
        var clasli = parseInt(jLibr.getClasli(), 10) || 0;
        contestHandler.init(4, ChessManuals[clasli].map);
        jLibr.getEle("chessBox").style.display = "block";
        jLibr.getEle("menuBox").style.display = "none";
    })

    // 悔棋
    jLibr.getEle("regretBtn").addEventListener("click", function (e) {
        contestHandler.regret();
    })

    //返回首页
    jLibr.getEle("gohomeBtn").addEventListener("click", function (e) {
        jLibr.getEle("chessBox").style.display = "none";
        jLibr.getEle("menuBox").style.display = "block";
        jLibr.getEle("indexBox").style.display = "block";
        jLibr.getEle("menuQj").style.display = "none";
        jLibr.getEle("menuDy").style.display = "none";
    })

    //返回
    jLibr.getEle("menuFh").addEventListener("click", function (e) {
        jLibr.getEle("indexBox").style.display = "block";
        jLibr.getEle("menuQj").style.display = "none";
        jLibr.getEle("menuDy").style.display = "none";
    })

    //返回关闭
    jLibr.getEle("menuGb").addEventListener("click", function (e) {
        jLibr.getEle("indexBox").style.display = "block";
        jLibr.getEle("menuQj").style.display = "none";
        jLibr.getEle("menuDy").style.display = "none";
    })

    //重新开始棋局
    jLibr.getEle("restartBtn").addEventListener("click", function (e) {
        if (confirm("是否确定要重新开始？")) {
            contestHandler.isPlay = true;
            contestHandler.init(4, contestHandler.mapBackup);
        }
    })

    //人机对弈
    jLibr.getEle("indexDy").addEventListener("click", function (e) {
        jLibr.getEle("indexBox").style.display = "none";
        jLibr.getEle("menuQj").style.display = "none";
        jLibr.getEle("menuDy").style.display = "block";
    })

    //挑战棋局
    jLibr.getEle("indexQj").addEventListener("click", function (e) {
        jLibr.getEle("indexBox").style.display = "none";
        jLibr.getEle("menuQj").style.display = "block";
        jLibr.getEle("menuDy").style.display = "none";
    })

    //换肤
    jLibr.getEle("stypeBtn").addEventListener("click", function (e) {
        var stype = gameHolder.stype;
        if (stype == "stype3") stype = "stype2";
        else if (stype == "stype2") stype = "stype1";
        else if (stype == "stype1") stype = "stype3";
        initialGame(stype);
        gameHolder.drawPieces();

        document.cookie = "stype=" + stype;
        clearInterval(timer);
        var i = 0;
        var timer = setInterval(function () {
            gameHolder.drawPieces();
            if (i++ >= 5) clearInterval(timer);
        }, 2000);
    })
}

initialGame();

