//Load random image from .../img/bg for background image
var bgs = [
        'img/bg/bg.jpg', 'img/bg/bg2.jpg', 'img/bg/bg3.jpg' , 
		'img/bg/bg4.jpg' , 'img/bg/bg5.jpg'
		//'https://source.unsplash.com/collection/1368747/1600x900'
    ];

    window.onload = function () {
        var n = Math.floor(Math.random()*bgs.length);
        document.body.style.backgroundImage = 'url(' + bgs[n] + ')';
    }