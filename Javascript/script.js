clearCanvas();
arrow(500, 500, 100, 20, 0, "lightgray");
circle(500, 500, 10, "black", 0.3);

let degreesRotated = 0;

function infiniteLoop() {
    clearCanvas();
    arrow(500, 500, 200, 20, degreesRotated, "lightgray");
    circle(500, 500, 10, "black", 0.3);
    setTimeout(infiniteLoop, 20);
    degreesRotated++;
  }
  

  infiniteLoop();