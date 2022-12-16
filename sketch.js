function setup() {
    createCanvas(500, 400);
    soundTrack.loop();
}

function draw() {
    background(imageStreet);
    showActor();
    showCar();
    moveCar();
    moveActor();
    carStartPosition();
    verifyCollide();
    showPoints();
    markPoints();
}