'use strict'
var gCanvas;
var gCtx;
var gLineInd;

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    getLineInd()
    randerGallery()

}

function randerGallery() {
    var imges = getImges()
    var strHTMLS = imges.map((img) => {
        return `<img onclick="setImg(${img.id})" src="${img.url}" alt=""></img>`
    })
    document.querySelector('.grid-container').innerHTML = strHTMLS.join('')
}

function randerGenerator() {
    document.querySelector('.canvas-container').style.display = 'block'
    document.querySelector('.grid-container').style.display = 'none'
}

function drawImg() {
    var img = new Image()
    console.log(img);
    img.src = geImgUrl();
    console.log(geImgUrl());
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(gMeme.lines[0].txt ,gMeme.lines[0].height)
        drawText(gMeme.lines[gLineInd].txt)

    }
}

function drawText(text,y=gMeme.lines[gLineInd].height) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'yellow'
    gCtx.font = gMeme.lines[gLineInd].size + 'px IMPACT'
    gCtx.textAlign = 'left'
    gCtx.fillText(text, 50, y)
    gCtx.strokeText(text, 50, y)
}


function onTypeInput() {
    gMeme.lines[gLineInd].txt = document.querySelector('input[name=todoTxt]').value
    drawImg()

}
function pageBack() {
    document.querySelector('.canvas-container').style.display = 'none'
    document.querySelector('.grid-container').style.display = 'grid'
}

function getLineInd() {
    gLineInd = lineInd()
}
function switchLine(num) {
    gLineInd = num
    var elInput = document.querySelector('input')
    elInput.value = gMeme.lines[gLineInd].txt
}