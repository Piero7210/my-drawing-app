function TextTool() {
  this.name = "text";
  this.icon = "assets/text.jpg";

  this.draw = function () {
    if (mouseIsPressed) {
      stroke(0);
      strokeWeight(1);
      textSize(30);
      var input = prompt("Enter text: ");
      text(input, mouseX, mouseY);
    }
  };
}
