var bgs = [
        'img/bg/bg.jpg', 'img/bg/bg2.jpg', 'img/bg/bg3.jpg' , 'img/bg/bg4.jpg'
    ];

    window.onload = function () {
        var n = Math.floor(Math.random()*bgs.length);
        document.body.style.backgroundImage = 'url(' + bgs[n] + ')';
    }