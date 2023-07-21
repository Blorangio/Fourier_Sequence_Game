const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

let drawingPoints = [];

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

function arrow(x, y, length, lineWidth, rotation, color, isDrawing) {
    ctx.globalAlpha = 1.0;
    ctx.save();

    // Translate to the arrow's position
    ctx.translate(x, y);

    // Rotate the canvas to match the arrow's rotation
    ctx.rotate((rotation * Math.PI) / 180);

    const arrowheadWidth = 10;
    const arrowheadLength = 20;

    if(isDrawing) {
        drawingPoints.push([(rotation * Math.PI) / 180], length, x, y);
    }

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