var AI = {
  maxDepth: 4,//搜索深度
};

/**
 *@params
 * aValue: 当前棋手value
 * bValue: 对手value
 * depth: 层级
 * map: 棋局
 * my: my == 1代表玩家
 */
function getAlphaBeta(aValue, bValue, depth, map, my) {
  var rootKey;
  if (depth == 0) {
    return { "value": XiangqiTeller.evaluate(map, my) };
  }

  //根据棋盘情况，获取可用棋子的走法;
  var moves = AI.getMoves(map, my);
  for (var i = 0; i < moves.length; i++) {
    var move = moves[i];
    let mapCopy = DeepClone(map)
    mapCopy[move.newY][move.newX] = move.key;
    mapCopy[move.oldY][move.oldX] = null;
    move.value = XiangqiTeller.evaluate(mapCopy, my)
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
      var val = -getAlphaBeta(-bValue, -aValue, depth - 1, map, -my).value;
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
        if (AI.treeDepth == depth) rootKey = { "key": key, "x": newX, "y": newY, "value": aValue };
      }
    }
  }
  //将这个走法记录到历史表中;
  if (AI.treeDepth == depth) {//已经递归回根了
    if (!rootKey) {
      //AI没有最佳走法，说明AI被将死了，返回null
      return null;
    } else {
      return rootKey;
    }
  }
  return { "key": key, "x": newX, "y": newY, "value": aValue };
}


//人工智能初始化
AI.getGoodMove = function () {
  //人工智能开始运作
  var startedTime = new Date().getTime();
  AI.treeDepth = AI.maxDepth;
  AI.number = 0;

  var val = getAlphaBeta(-99999, 99999, AI.treeDepth, DeepClone(contestHandler.map), contestHandler.my);

  //-8888表示AI被将死
  if (val && val.value != -8888) {
    let piece = XiangqiTeller.pieceCreatFactory(contestHandler.map, val.key);
    var nowTime = new Date().getTime();
    console.log('最佳着法：' + XiangqiTeller.makeMovesHumanReadable(piece, piece.x, piece.y, val.x, val.y) +
      ' 搜索深度：' + AI.treeDepth +
      ' 搜索分支：' + AI.number + '个' +
      ' 最佳着法评估：' + val.value + '分' +
      ' 搜索用时：' + (nowTime - startedTime) + '毫秒')
    return [piece.x, piece.y, val.x, val.y]
  } else {
    return null;
  }
}

//取得棋谱所有己方棋子的着法
AI.getMoves = function (map, color) {
  var moves = [];

  //检查是否长将
  var foul = XiangqiTeller.checkFoul(contestHandler.pace);

  //取得棋盘上所有棋子
  for (var row = 0; row < map.length; row++) {
    for (var col = 0; col < map[row].length; col++) {
      var key = map[row][col];

      if (key) {
        let piece = new XiangqiPiece(key, row, col);
        if (piece.color == color) {
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



