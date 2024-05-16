function RectangleTool() {
  this.name = "rectangle";
  this.icon = "assets/rectangle.jpeg";

  var startMouseX = -1;
  var startMouseY = -1;
  var drawing = false;

  this.draw = function () {
    if (mouseIsPressed) {
      if (startMouseX == -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        //p5.js native function
        //explanation on the website...
        loadPixels();
      } else {
        //same as loadPixels() they need to be used
        //in tandem
        updatePixels();
        rectMode(CORNERS);
        noFill();
        rect(startMouseX, startMouseY, mouseX, mouseY);
      }
    } else if (drawing) {
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}
