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
            size: 40,
            align: 'left',
            color: 'red',
            txtBorder: 'black',
            height: 50
        }
    ]
}

function setFontSize(num) {
    gMeme.lines[gMeme.selectedLineIdx].size = gMeme.lines[gMeme.selectedLineIdx].size + num
    drawImg()

}
function setLineHight(num) {
    gMeme.lines[gMeme.selectedLineIdx].height = gMeme.lines[gMeme.selectedLineIdx].height + num
    drawImg()
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = 0
    getLineInd()
    console.log(gMeme.lines[0]);
    if (gMeme.lines[0] === undefined) {
        gMeme.lines.push({
            txt: '',
            size: 40,
            align: 'left',
            color: 'red',
            txtBorder: 'black',
            height: 50
        })
        gMeme.selectedLineIdx = 0
    }
    var elInput = document.querySelector('.text')
    elInput.value = gMeme.lines[gMeme.selectedLineIdx].txt
    drawImg()
}

function addLine() {
    if ( gMeme.selectedLineIdx === 0) {
        gMeme.lines.push({
            txt: '',
            size: 40,
            align: 'left',
            color: 'red',
            txtBorder: 'black',
            height: 500
        })
        gMeme.selectedLineIdx = 1
        
    } else if(gMeme.selectedLineIdx === 1) {
        gMeme.lines.push({
            txt: '',
            size: 40,
            align: 'left',
            color: 'red',
            txtBorder: 'black',
            height: 280
        })
        gMeme.selectedLineIdx = 2
        
    }
    var elInput = document.querySelector('.text')
    elInput.value = ''
    getLineInd()
}

function alignLeft() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'left';
    drawImg()
}
function alignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'center';
    drawImg()
}
function alignRigth() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'right';
    drawImg()
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
            return img
        }
    })
    return url[0].url
}

function getImges() {
    return gImages
}