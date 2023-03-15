// flow field cell object
class FlowCell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.noiseChange = 0.01;
    this.noiseValue = 0;
    this.directionVector = createVector(x + cellSize / 2, y + cellSize / 2);
    this.vectorAngle = 0;
  }

  // just so we can see it
  draw() {
    fill(255 * this.noiseValue);
    noStroke();
    square(this.x, this.y, cellSize);
    push();
    translate(this.x + cellSize / 2, this.y + cellSize / 2);
    stroke(255);
    line(0, 0, this.directionVector.x, this.directionVector.y);
    pop();
  }

  // we will update the object here!
  update() {
    this.noiseValue = noise(this.x * 0.01, this.y * 0.01, this.noiseChange);
    this.noiseChange += 0.01;
    this.vectorAngle = this.noiseValue * TWO_PI;
    this.directionVector.setHeading(this.vectorAngle);
    this.directionVector.limit(cellSize / 2);
  }
}
