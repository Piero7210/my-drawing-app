function EraserTool() {
  this.name = "eraser";
  this.icon = "assets/eraser.jpeg";

  this.draw = function () {
    if (mouseIsPressed) {
      push();
      fill(255);
      stroke(255);
      ellipse(mouseX, mouseY, 20, 20);
      pop();
    }
  };
}
