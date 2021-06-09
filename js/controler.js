'use strict'
var gCanvas;
var gCtx;

var gImages = [
    {
        id: 1,
        url: 'img/1.jpg',
        keywords: ['happy']
    }
]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}
console.log(gMeme.lines[0].txt);
function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    console.log(gCtx);
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'yellow'
    gCtx.font = '40px IMPACT'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function drawImg(imge) {
    var img = new Image()
    console.log(img);
    img.src = 'img/1.jpg';
    console.log(img.src);
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}
function draw(ev) {
    const offsetX = ev.offsetX
    const offsetY = ev.offsetY

    drawText(gMeme.lines[0].txt, offsetX, offsetY)
    // switch (gCurrShape) {
    //     case 'triangle':
    //         drawTriangle(offsetX, offsetY)
    //         break;
    //     case 'rect':
    //         drawRect(offsetX, offsetY)
    //         break;
    //     case 'text':
    //         drawText('Puki', offsetX, offsetY)
    //         break;
    //     case 'line':
    //         drawLine(offsetX, offsetY)
    //         break;
    // }
}

function onTypeInput() {
    gMeme.lines[0].txt = document.querySelector('input[name=todoTxt]').value
}