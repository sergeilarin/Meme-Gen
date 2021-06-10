'use strict'


var gImages = [
    {
        id: 1,
        url: 'img/1.jpg',
        keywords: ['happy']
    },
    {
        id: 2,
        url: 'img/2.jpg',
        keywords: ['happy']
    },
    {
        id: 3,
        url: 'img/3.jpg',
        keywords: ['happy']
    },
    {
        id: 4,
        url: 'img/4.jpg',
        keywords: ['happy']
    },
    {
        id: 5,
        url: 'img/5.jpg',
        keywords: ['happy']
    },
    {
        id: 6,
        url: 'img/6.jpg',
        keywords: ['happy']
    },
    {
        id: 7,
        url: 'img/7.jpg',
        keywords: ['happy']
    },
    {
        id: 8,
        url: 'img/8.jpg',
        keywords: ['happy']
    },
    {
        id: 9,
        url: 'img/9.jpg',
        keywords: ['happy']
    },
    {
        id: 10,
        url: 'img/10.jpg',
        keywords: ['happy']
    },
    {
        id: 11,
        url: 'img/11.jpg',
        keywords: ['happy']
    },
    {
        id: 12,
        url: 'img/12.jpg',
        keywords: ['happy']
    },
    {
        id: 13,
        url: 'img/13.jpg',
        keywords: ['happy']
    },
    {
        id: 14,
        url: 'img/14.jpg',
        keywords: ['happy']
    },
]

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 30,
            align: 'left',
            color: 'red',
            height: 50
        }
    ]
}

function setFontSize(num) {
    gMeme.lines[gMeme.selectedLineIdx].size = gMeme.lines[gMeme.selectedLineIdx].size + num
    drawImg()

}
function setLineHight(num) {
    console.log(gMeme.lines[0].height);
    gMeme.lines[gMeme.selectedLineIdx].height = gMeme.lines[gMeme.selectedLineIdx].height + num
    drawImg()
}

function addLine() {
    var elInput = document.querySelector('input')
    elInput.value = ''
    gMeme.selectedLineIdx = 1
    gMeme.lines.push({
        txt: '',
        size: 30,
        align: 'left',
        color: 'red',
        height: 380
    })
    
    getLineInd()
}

function saveAndRestoreExample() {
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    drawText('Before save', 180, 60)
    gCtx.save()
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'red'
    drawText('After save and change', 180, 160)
    gCtx.restore()
    drawText('After restore', 100, 360)
}

function lineInd() {
    return gMeme.selectedLineIdx
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    randerGenerator()
    drawImg()

}
function geImgUrl() {
    var url = gImages.filter((img) => {
        if (gMeme.selectedImgId === img.id) {
            console.log(img.url);
            return img
        }
    })
    return url[0].url
}

function getImges() {
    return gImages
}