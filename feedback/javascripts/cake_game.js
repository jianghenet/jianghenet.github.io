class CakeGame{
  constructor(){
    this.gameGround = new CakeGround(document.getElementById('main_canvas'));
    this.max_x = Math.floor(this.gameGround.width());
    this.max_y = Math.floor(this.gameGround.height());
  }

  draw_gems(){
    this.gems.forEach((gem)=>{
      this.gameGround.draw_ball(gem, 'green');
    });
  }

  draw_boors(){
    this.boors.forEach((boor)=>{
      boor.patrol();
      this.gameGround.draw_ball(boor, '#EEB422');
    });
  }

  check(x, y, r){
    return this.boors.some(function(coord){
      return (Math.pow((coord.x - x), 2) + Math.pow((coord.y - y), 2)) <= Math.pow((coord.r + r), 2);
    });
  }

  indexGem(x, y, r){
    return game.gems.findIndex((gem)=>{ return (Math.pow((gem.x - x), 2) + Math.pow((gem.y - y), 2)) <= Math.pow((gem.r + r), 2) });
  }

  draw() {
    this.gameGround.reset();

    this.draw_boors();
    this.draw_gems();

    if(this.check(this.playerBall.x, this.playerBall.y, this.playerBall.r)){
      this.gameGround.draw_ball(this.playerBall, 'red');
      this.gameOver = true;
    }else{
      this.gameOver = false;
      this.gameGround.draw_ball(this.playerBall, 'blue');
    }
    var gemIndex = this.indexGem(this.playerBall.x, this.playerBall.y, this.playerBall.r);
    if(gemIndex > -1){
      var theGem = this.gems.splice(gemIndex, 1)[0];
      var theBall = this.boors.splice(gemIndex, 1)[0];
    }

    this.playerBall.calc_ball(this.max_x, this.max_y);
    if(this.gameOver){
      if(!this.reloading){
        alert("oops Game over");
        this.reloading = true;
      }
      if(this.reloading){
        window.location.reload();
      }
    }
  }

  run(){
    this.boors = [];
    this.gems = [];
    for(var i = 0; i < 12; i++){
      var x = Math.floor(Math.random()*this.max_x + 50)
      var y = Math.floor(Math.random()*this.max_y + 50);
      var aball = new SecurityBall(x,y, 32);
      this.boors.push(aball);
      var agem = new GemBall(x, y, 10);
      this.gems.push(agem);
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
