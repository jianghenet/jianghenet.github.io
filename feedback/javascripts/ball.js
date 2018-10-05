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
