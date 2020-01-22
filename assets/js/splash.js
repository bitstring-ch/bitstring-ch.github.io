var digitWidthPx;
const fontSizePx = 14;

const backgroundColor = "black";
const foregroundColor = "orange";

var canvas, container, ctx;
var rowNumber, colNumber;
var rowMargin, colMargin;

window.onload = initSplash;
window.onresize = drawSplash;

function initSplash() {
    canvas = document.getElementById("splash");
    container = canvas.parentElement;
    drawSplash();
}

function drawSplash() {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    ctx = canvas.getContext("2d");
    ctx.font = "normal " + fontSizePx + "pt Monospace";
    const measures = ctx.measureText("0");
    digitWidthPx = Math.ceil(measures.width);
    colNumber = Math.floor(canvas.width / digitWidthPx);
    colMargin = (canvas.width - colNumber * digitWidthPx)/2.0;
    rowNumber = Math.floor(canvas.height / fontSizePx);
    rowMargin = (canvas.height - rowNumber * fontSizePx)/2.0;
    console.log("Row margin:", rowMargin, ", size:", rowNumber);
    console.log("Column margin:", colMargin, ", size:", colNumber);
    clearCanvas();
    drawRandomDigits();
}

function clearCanvas() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawRandomDigits() {
    ctx.fillStyle = foregroundColor;
    ctx.textBaseline = "middle";
    for (var row = 0; row < rowNumber; row++) {
	for (var col = 0; col < colNumber; col++) {
	    const r = Math.floor(Math.random() * 2).toString();
	    const x = colMargin + col * digitWidthPx;
	    const y = rowMargin + (row + 0.5) * fontSizePx;
	    ctx.fillText(r, x, y);
	}
    }
}
