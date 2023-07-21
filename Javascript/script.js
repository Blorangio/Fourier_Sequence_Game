clearCanvas();
arrow(500, 500, 100, 20, 0, "lightgray");
circle(500, 500, 10, "black", 0.3);

function rotatePoint(x, angleInDegrees) {
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    const cosValue = Math.cos(angleInRadians);
    const sinValue = Math.sin(angleInRadians);

    const newX = x * cosValue;
    const newY = x * sinValue;

    return [newX,newY];
}

let degreesRotated = 0;

let arrows = [[200, 0, 1],
              [50, 180, -1]];

function infiniteLoop() {
    let degreesRotated2 = 0;
    let length2 = 500;
    clearCanvas();
    for(i in arrows) {
        if(i==0) {
            arrow(500, 500, arrows[i][0], 20, degreesRotated*arrows[i][2], "lightgray", true);
        } else {
            arrow(rotatePoint(length2, degreesRotated2)[0], rotatePoint(length2, degreesRotated2)[1], arrows[i][0], 20, degreesRotated*arrows[i][2], "lightgray", !(i==arrows.length-1));
        }
        degreesRotated2 += degreesRotated*arrows[i][2];
        length2 += arrows[i][0];
        circle(500, 500, 10, "black", 0.3);
    }
    degreesRotated++;
    setTimeout(infiniteLoop, 20);
  }
  

  infiniteLoop();