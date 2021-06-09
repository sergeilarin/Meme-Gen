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
]

var gMeme = {
    selectedImgId:0,
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

function randerGenerator() {
    document.querySelector('.canvas-container').style.display = 'block'
    document.querySelector('.grid-container').style.display = 'none'

    
}
function setImg(imgId) {
    gMeme.selectedImgId = imgId
    randerGenerator()
    drawImg()

}

function drawImg() {
    var img = new Image()
    console.log(img);
    img.src = geImgUrl();
    console.log(geImgUrl());
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
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