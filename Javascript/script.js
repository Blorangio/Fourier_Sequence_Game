clearCanvas();
arrow(500, 500, 100, 20, 0, "lightgray");
circle(500, 500, 10, "black", 0.3);

let degreesRotated = 0;

let squareLength = 50*(1-Math.sqrt(2)/2);

let arrows = [[50, 0, 1],
              [squareLength, 180, -3],
              [100, 0, 1]];

function infiniteLoop() {
    let length2 = 0;
    let xPoint = 0;
    let yPoint = 0;
    clearCanvas();
    for(i in points) {
        circle(points[i][0], points[i][1], 10, "black", 1.0);
    }
    for(j in arrows) {
        if(j==0) {
            arrow(500, 500, arrows[j][0], 20, degreesRotated*arrows[j][2], "lightgray", false);
        } else {
            arrow(xPoint+500, yPoint+500, arrows[j][0], 20, degreesRotated*arrows[j][2]+arrows[j][1], "lightgray", j==arrows.length-1&&degreesRotated<=360);
        }
        xPoint += rotatePoints(arrows[j][0], 0, degreesRotated*arrows[j][2]+arrows[j][1])[0];
        yPoint += rotatePoints(arrows[j][0], 0, degreesRotated*arrows[j][2]+arrows[j][1])[1];
        length2 += arrows[j][0];
        circle(500, 500, 10, "black", 0.3);
    }
    degreesRotated++;
    setTimeout(infiniteLoop, 20);
  }
  
  infiniteLoop();