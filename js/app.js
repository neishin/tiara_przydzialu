var house = '';

function sorting() {

    var random = Math.floor(Math.random() * 4 + 1);
    if (random === 1) {
        house = 'gryffindor';
    } else if (random === 2) {
        house = 'slytherin';
    } else if (random === 3) {
        house = 'hufflepuff';
    } else if (random === 4) {
        house = 'ravenclaw';
    }
    createCrest(house);
}

var returnButton = document.createElement('button')

function createCrest(house) {
    var body = document.querySelector('body');
    var fullScreen = document.createElement('div');
    var imgCrest = document.createElement('img');
    var returnButton = document.createElement('button');
    var main = document.querySelector('.main');
    body.removeChild(main);
    returnButton.classList.add('button', 'return');
    returnButton.innerText = 'Jeszcze raz?';
    fullScreen.classList.add('flex');
    imgCrest.classList.add('crest');
    imgCrest.setAttribute('src', 'img/' + house + '.png');
    if (document.querySelector('.flex')) {
        var fullScreen2 = document.querySelector('.flex');
        body.removeChild(fullScreen2);
    }
    body.appendChild(fullScreen);
    fullScreen.appendChild(imgCrest);
    fullScreen.appendChild(returnButton);
    returnButton.addEventListener ('click', function () {
        window.location.reload()
    } );
}

//function again () {
//    returnButton.addEventListener('click', function () {
//        var body = document.querySelector('body');
//        var flex = document.querySelector('flex');
//        var imgCrest = document.querySelector('img');
//        var returnButton = document.querySelector('return');
//        body.removeChild(fullScreen);
//
//    })
//}

function mainDisable() {
    var main = document.querySelector('main');
    body.removeChild('main');
}
