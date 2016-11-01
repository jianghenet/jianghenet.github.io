function Ball(x, y, r){
  this.x = x;
  this.y = y;
  this.r = r;
}

Ball.prototype.down = function(){
  this.y = this.y + 1;
};

Ball.prototype.renew = function(){
  this.y = 0;
};
