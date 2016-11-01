function feedback(a, b){
  return a + 30;
}

function draw_ball(a_ball, color){
  ctx.beginPath();
  ctx.arc(a_ball.x, a_ball.y, a_ball.r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}
