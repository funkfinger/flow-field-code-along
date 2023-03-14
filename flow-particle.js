class FlowParticle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.v = createVector(x, y);
    }
  
    draw() {
      fill("white");
      circle(this.v.x, this.v.y, 10);
    }
  
    update() {
      this.v.add(createVector(random(-10,10), random(-10,10)));
      if(this.v.x > width) {
        this.v.x = 0;
      }
      if(this.v.y > height) {
        this.v.y = 0;
      }
      if(this.v.x < 0) {
        this.v.x = width;
      }
      if(this.v.y < 0) {
        this.v.y = height;
      }
    }
  }
  