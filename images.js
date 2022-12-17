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

function preload() {
    imageStreet = loadImage("images/street.png");
    imageActor = loadImage("images/actor-1.png");
    imageCar = loadImage('images/car-1.png');
    imageCar2 = loadImage("images/car-2.png");
    imageCar3 = loadImage("images/car-3.png");
    imageCars = [imageCar, imageCar2, imageCar3, imageCar, imageCar2, imageCar3];

    soundTrack = loadSound("songs/trilha.mp3");
    soundCollide = loadSound("songs/colidiu.mp3");
    soundPoints = loadSound("songs/pontos.wav");
}