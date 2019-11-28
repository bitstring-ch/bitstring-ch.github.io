var digitWidthPx;
const digitHeightPx = 13;

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
//    setInterval(updateRandomDigit, 200);
}

function drawSplash() {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    ctx = canvas.getContext("2d");
    ctx.font = "normal " + digitHeightPx + "pt Monospace";
    const measures = ctx.measureText("0");
    digitWidthPx = Math.ceil(measures.width);
    colNumber = Math.floor(canvas.width / digitWidthPx);
    colMargin = Math.floor((canvas.width - colNumber * digitWidthPx) / 2);
    rowNumber = Math.floor(canvas.height / digitHeightPx);
    rowMargin = Math.floor((canvas.height - rowNumber * digitHeightPx) / 2) - 2;
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
    ctx.textBaseline = "top";
    for (var row = 0; row < rowNumber; row++) {
	for (var col = 0; col < colNumber; col++) {
	    const r = Math.floor(Math.random() * 2).toString();
	    const x = colMargin + col * digitWidthPx;
	    const y = rowMargin + row * digitHeightPx;
	    ctx.fillText(r, x, y);
	}
    }
}

function updateRandomDigit() {
    const r = Math.floor(Math.random() * 2).toString();
    const x = colMargin + Math.floor(Math.random() * colNumber) * digitWidthPx;
    const y = rowMargin + Math.floor(Math.random() * rowNumber) * digitHeightPx;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(x, y + 1, digitWidthPx, digitHeightPx - 2);
    ctx.fillStyle = foregroundColor;
    ctx.fillText(r, x, y);
}    
