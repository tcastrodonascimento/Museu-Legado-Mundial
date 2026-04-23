// Configurações do Carrossel
var radius = window.innerWidth < 768 ? 160 : 320;
var autoRotate = true;
var rotateSpeed = -60; // segundos por volta
var imgWidth = window.innerWidth < 768 ? 120 : 190;
var imgHeight = window.innerWidth < 768 ? 170 : 270;

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');

// Inicializa tamanho do container
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
    for (var i = 0; i < aImg.length; i++) {
        aImg[i].style.transform = "rotateY(" + (i * (360 / aImg.length)) + "deg) translateZ(" + radius + "px)";
        aImg[i].style.transition = "transform 1s";
        aImg[i].style.transitionDelay = delayTime || (aImg.length - i) / 4 + "s";
    }
}


function applyTransform(obj) {
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;
    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

var sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 10;

// Auto rotate
if (autoRotate) {
    var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// Interação de Arrastar
document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX, sY = e.clientY;

    this.onpointermove = function (e) {
        e = e || window.event;
        var nX = e.clientX, nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag);
        sX = nX;
        sY = nY;
    };

    this.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTransform(odrag);
            playSpin(false);
            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                clearInterval(odrag.timer);
                playSpin(true);
            }
        }, 17);
        this.onpointermove = this.onpointerup = null;
    };
    return false;
};

// Scroll do Mouse para aumentar/diminuir raio
odrag.onmousewheel = function(e) {
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
};

// Inicia após 1 segundo
setTimeout(init, 1000);
