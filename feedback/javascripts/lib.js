
function feedback(a, b){
  return a + b * 0.9;
}

class CakeGround{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  reset(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  }

  width(){
    return this.canvas.width;
  }

  height(){
    return this.canvas.height;
  }

  draw_ball(a_ball, color){
    this.ctx.beginPath();
    this.ctx.arc(a_ball.x, a_ball.y, a_ball.r, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }
}
