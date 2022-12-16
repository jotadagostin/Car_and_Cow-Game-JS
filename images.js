// Images and Song's code:

// Images:

let imageStreet;
let imageActor;
let imageCar;
let imageCar2;
let imageCar3;

// Songs:

let soundTrack;
let soundCollide;
let soundPoints;

function preLoad() {
    imageStreet = loadImage("imgs/street.png");
    imageActor = loadImage("imgs/actor-1.png");
    imageCar = loadImage('imgs/car-1.png');
    imageCar2 = loadImage("imgs/car-2.png");
    imageCar3 = loadImage("imgs/car-3.png");
    imageCars = [imageCar, imageCar2, imageCar3, imageCar, imageCar2, imageCar3];

    soundTrack = loadSound("songs/trilha.mp3");
    soundCollide = loadSound("songs/colidiu.mp3");
    soundPoints = loadSound("songs/pontos.wav");
}