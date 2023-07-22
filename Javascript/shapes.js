const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

let points = [];

function rotatePoint(x, angleInDegrees) {
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    const cosValue = Math.cos(angleInRadians);
    const sinValue = Math.sin(angleInRadians);

    const newX = x * cosValue;
    const newY = x * sinValue;

    return [newX,newY];
}

function rotatePoints(x, y, angleInDegrees) {
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    const cosValue = Math.cos(angleInRadians);
    const sinValue = Math.sin(angleInRadians);

    const newX = x * cosValue - y * sinValue;
    const newY = x * sinValue + y * cosValue;

    return [newX, newY];
}


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function circle(x, y, r, color, opacity) {
    if(color!=null) {
        ctx.fillStyle = color;
    }
    if(opacity!=null) {
        ctx.globalAlpha = opacity;
    }
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

function any(array, item) {
    for(i in array) {
        if(array[i][0]==item[0]&&array[i][1]==item[1]) {
            return true;
        }
    }
    return false;
}

function arrow(x, y, length, lineWidth, rotation, color, isDrawing) {
    ctx.globalAlpha = 1.0;
    ctx.save();
    
    if(isDrawing) {
        circle(x+rotatePoint(length, rotation)[0], y+rotatePoint(length, rotation)[1], 10);
        if(!any(points, [x+rotatePoint(length, rotation)[0], y+rotatePoint(length, rotation)[1]])) {
            points.push([x+rotatePoint(length, rotation)[0], y+rotatePoint(length, rotation)[1]])
        }
    }

    // Translate to the arrow's position
    ctx.translate(x, y);

    // Rotate the canvas to match the arrow's rotation
    ctx.rotate((rotation * Math.PI) / 180);

    const arrowheadWidth = 10;
    const arrowheadLength = 20;

    // Draw the arrow
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(length-arrowheadLength, 0);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(length - arrowheadLength*2, -arrowheadWidth / 2);
    ctx.lineTo(length-arrowheadLength, 0);
    ctx.lineTo(length - arrowheadLength*2, arrowheadWidth / 2);
    ctx.stroke();

    ctx.restore();
}