class FlowParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.moveVector = createVector(x, y);
    this.forceVector = createVector(0, 0);
    this.limit = 2;
  }

  draw() {
    fill("white");
    circle(this.moveVector.x, this.moveVector.y, 10);
  }

  update() {
    this.moveVector.add(this.forceVector);
    // this.v.add(createVector(random(-10, 10), random(-10, 10)));
    if (this.moveVector.x > width) {
      this.moveVector.x = 0;
    }
    if (this.moveVector.y > height) {
      this.moveVector.y = 0;
    }
    if (this.moveVector.x < 0) {
      this.moveVector.x = width;
    }
    if (this.moveVector.y < 0) {
      this.moveVector.y = height;
    }
  }

  addToForceVector(v) {
    this.forceVector.add(v);
    this.forceVector.limit(this.limit);
  }
}
