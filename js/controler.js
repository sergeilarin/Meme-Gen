'use strict'
var gCanvas;
var gCtx;
var gLineInd;
var gCurrFont = 'IMPACT'

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    getLineInd()
    randerGallery(getImges())

}

function randerGallery(imges) {
    var strHTMLS = imges.map((img) => {
        return `<img onclick="setImg(${img.id})" src="${img.url}" alt=""></img>`
    })
    document.querySelector('.grid-container').innerHTML = strHTMLS.join('')
}

function randerGenerator() {
    document.querySelector('.screen').style.display = 'block'
    document.querySelector('.grid-container').style.display = 'none'
    document.querySelector('.search-bar').style.display = 'none'
}

function drawImg() {
    var img = new Image()
    img.src = geImgUrl();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(gMeme.lines[gLineInd].txt, gMeme.lines[gLineInd].height, gMeme.lines[gLineInd].size, gMeme.lines[gLineInd].txtBorder, gMeme.lines[gLineInd].color, gMeme.lines[gLineInd].align)
        if (gLineInd === 1) {
            drawText(gMeme.lines[gLineInd - 1].txt, gMeme.lines[gLineInd - 1].height, gMeme.lines[gLineInd - 1].size, gMeme.lines[gLineInd - 1].txtBorder, gMeme.lines[gLineInd - 1].color, gMeme.lines[gLineInd - 1].align)
        } else {
            drawText(gMeme.lines[gLineInd + 1].txt, gMeme.lines[gLineInd + 1].height, gMeme.lines[gLineInd + 1].size, gMeme.lines[gLineInd + 1].txtBorder, gMeme.lines[gLineInd + 1].color, gMeme.lines[gLineInd + 1].align)

        }

    }
}

function drawText(text, y = 50, size, border, color, alignment) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = border
    gCtx.fillStyle = color
    gCtx.font = size + 'px' + ' ' + gCurrFont
    gCtx.textAlign = alignment
    gCtx.fillText(text, 230, y)
    gCtx.strokeText(text, 230, y)
}


function onTypeInput() {
    gMeme.lines[gLineInd].txt = document.querySelector('input[name=todoTxt]').value
    drawImg()

}
function onSetFilter(txt) {
    setFilter(txt.toLowerCase());
    var images = getImagesForDisplay();
    randerGallery(images)
}

function pageBack() {
    randerGallery(getImges())
    document.querySelector('.screen').style.display = 'none'
    document.querySelector('.search-bar').style.display = 'flex'
    document.querySelector('.grid-container').style.display = 'grid'


}

function getLineInd() {
    gLineInd = lineInd()
}
function switchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx === 0) ? 1 : 0;
    gLineInd = (gLineInd === 0) ? 1 : 0;
    var elInput = document.querySelector('.text')
    elInput.value = gMeme.lines[gLineInd].txt
    drawImg()
}

function setTxtBorder() {
    gMeme.lines[gLineInd].txtBorder = (gMeme.lines[gLineInd].txtBorder === 'black') ? 'transparent' : 'black'
    drawImg()
}

function setColor(color) {
    gMeme.lines[gLineInd].color = color
    drawImg()
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my meme'
}

function onSetFont(val) {
    console.log(val);
    gCurrFont = val
    drawImg()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

