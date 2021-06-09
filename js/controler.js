'use strict'
var gCanvas;
var gCtx;

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    randerGallery()

    

}

function randerGallery() {
    var imges = getImges()
    var strHTMLS = imges.map((img) => {
        return `<img onclick="setImg(${img.id})" src="${img.url}" alt="" srcset=""></img>`
    })
    document.querySelector('.grid-container').innerHTML = strHTMLS
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

function draw(ev) {
    const offsetX = ev.offsetX
    const offsetY = ev.offsetY

    drawText(gMeme.lines[0].txt, offsetX, offsetY)
    
}

function onTypeInput() {
    gMeme.lines[0].txt = document.querySelector('input[name=todoTxt]').value
    randerGenerator()
}
function pageBack() {
    document.querySelector('.canvas-container').style.display = 'none'
    document.querySelector('.grid-container').style.display = 'grid'
}