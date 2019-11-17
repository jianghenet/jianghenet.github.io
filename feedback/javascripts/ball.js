class Ball{
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
}

class SecurityBall extends Ball{
  constructor(x, y, r){
    super(x, y, r);
    this.fief = {
      x: x,
      y: y,
      east: 30 + Math.floor(Math.random()* 90),
      west: 30 + Math.floor(Math.random()* 90),
      south: 30 + Math.floor(Math.random()* 90),
      north: 30 + Math.floor(Math.random()* 90)
    };
    this.distance = 0;
  }
  patrol(){
    let f;
    if(this.forward_x){
      f = 1;
    }else{
      f = -1;
    }

    if(this.distance >= this.fief.east){
      this.forward_x = false;
    }

    if(this.distance <= this.fief.west * -1){
      this.forward_x = true;
    }

    this.distance = this.distance + f;
    this.x = this.fief.x + this.distance;
  }
}

class PlayerBall extends Ball{
  constructor(x, y, r){
    super(x, y, r);
    this.start_x = x;
    this.start_y = y;
    this.input_x=0;
    this.input_y=0;
    this.output_x = 0;
    this.output_y = 0;
    this.x = x;
    this.y = y;
  }

  calc_ball(max_x, max_y){
    this.output_x = feedback(this.input_x, this.output_x);
    this.output_y = feedback(this.input_y, this.output_y);

    this.x = this.start_x + Math.floor(this.output_x);
    if(this.x > max_x){this.x= max_x;}

    this.y = this.start_y + Math.floor(this.output_y);
    if(this.y > max_y){this.y = max_y;}
  }

  up(max_x, max_y){
    this.input_y -= 1;
    if(this.input_y < 0){
      this.input_y = 0;
    }
  }
  down(max_x, max_y){
    this.input_y += 1;
    if(this.input_y > max_y/2){
      this.input_y = max_y/2;
    }
  }
  left(max_x, max_y){
    this.input_x -= 1;
    if(this.input_x < 0){
      this.input_x = 0;
    }
  }
  right(max_x, max_y){
    this.input_x += 1;
    if(this.input_x > max_x/2){
      this.input_x = max_x/2;
    }
  }

}
