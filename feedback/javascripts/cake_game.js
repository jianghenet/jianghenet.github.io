class CakeGame{
  constructor(){
    this.gameGround = new CakeGround(document.getElementById('main_canvas'));
    this.max_x = Math.floor(this.gameGround.width());
    this.max_y = Math.floor(this.gameGround.height());
  }

  draw_boors(){
    this.boors.forEach((boor)=>{
      boor.patrol();
      this.gameGround.draw_ball(boor, '#EEB422');
    })
  }

  check(x, y, r){
    return this.boors.some(function(coord){
      return (Math.pow((coord.x - x), 2) + Math.pow((coord.y - y), 2)) <= Math.pow((coord.r + r), 2)
    });
  }

  draw() {
    this.gameGround.reset();

    this.draw_boors();

    if(this.check(this.playerBall.x, this.playerBall.y, this.playerBall.r)){
      this.gameGround.draw_ball(this.playerBall, 'red');
    }else{
      this.gameGround.draw_ball(this.playerBall, 'blue');
    }
    this.playerBall.calc_ball(this.max_x, this.max_y);
  }

  run(){
    this.boors = [];
    for(var i = 0; i < 12; i++){
      var x = Math.floor(Math.random()*this.max_x + 50)
      var y = Math.floor(Math.random()*this.max_y + 50);
      var aball = new SecurityBall(x,y, 32);
      this.boors.push(aball);
    }

    this.playerBall = new PlayerBall(0, 0, 16)
    var self = this;
    document.onkeydown = function(evt){
      switch(evt.keyCode){
        case 37:
          self.playerBall.left(self.max_x, self.max_y);
          break;
        case 38:
          self.playerBall.up(self.max_x, self.max_y);
          break;
        case 39:
          self.playerBall.right(self.max_x, self.max_y);
          break;
        case 40:
          self.playerBall.down(self.max_x, self.max_y);
          break;
      }
    }
  }
}
