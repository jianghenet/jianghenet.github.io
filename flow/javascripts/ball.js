function Ball(x, y, r){
  this.x = x;
  this.y = y;
  this.r = r;
}

Ball.prototype.down = function(){
  this.y = this.y + this.speed;
};

Ball.prototype.renew = function(x, speed){
  this.y = 0;
  if(speed){
    this.speed = speed;
  }
  if(x){
    this.x=x;
  }
};

function Bullet(x, y, r){
  this.x = x;
  this.y = y;
  this.r = r;
  this.timeout = 0;
}

Bullet.prototype.constructor = Ball;
