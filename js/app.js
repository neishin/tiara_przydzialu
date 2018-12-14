var house = '';

function sorting() {

    var random = Math.floor(Math.random()*4 +1);
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

function createCrest (house) {
    var body = document.querySelector('body');
    var fullScreen = document.createElement('div');
    var imgCrest = document.createElement('img');
    imgCrest.classList.add('crest');
    imgCrest.setAttribute('src', 'img/'+house+'.webp');
    if (document.querySelector('div')) {
        var fullScreen2 = document.querySelector('div');
        body.removeChild(fullScreen2);
        }
    body.appendChild(fullScreen);
    fullScreen.appendChild(imgCrest);
}

