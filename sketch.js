const cellSize = 40;
const flowField = [];
const flowParticles = [];

function setup() {
  createCanvas(400, 400);
  // create flow field
  for (let y = 0; y < height; y += cellSize) {
    for (let x = 0; x < width; x += cellSize) {
      // make object and push into flowField array
      flowField.push(new FlowCell(x, y));
    }
  }
  flowParticles.push(new FlowParticle(random(width), random(height)));
}

function draw() {
  background(220);
  // loop through our flow field array...
  for (let i = 0; i < flowField.length; i++) {
    let fc = flowField[i];
    fc.update();
    fc.draw();
    for (let k = 0; k < flowParticles.length; k++) {
      let fp = flowParticles[k];
      if (
        fp.x >= fc.x &&
        fp.x <= fc.x + cellSize &&
        fp.y >= fc.y &&
        fp.y <= fp.y + cellSize
      ) {
        fp.addToForceVector(fc.directionVector);
      }
    }
  }
  // loop through the particles...
  for (let j = 0; j < flowParticles.length; j++) {
    flowParticles[j].update();
    flowParticles[j].draw();
  }
}
