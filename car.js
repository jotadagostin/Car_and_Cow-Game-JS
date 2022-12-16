// Car's code:

let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let speedCars= [2, 2.5, 3.2, 4, 3.3, 2.3];
let widthCar = 50;
let heightCar = 40;

function showCar(){
    for (let i = 0; i < imageCars.length; i++) {
        image(imageCars[i], xCars[i], yCars[i], widthCar, heightCar)
    }
}

function moveCar() {
    for (let i = 0; i < imageCars.length; i++) {
        xCars[i] -= speedCars[i];
    }  
}

function carStartPosition() {
    for (let i = 0; i < imageCars.length; i++) {
        if(passTheScreen(xCars[i])) {
            xCars[i] = 600;
        }
    }
}

function passTheScreen(xCars) {
    return xCars < -50;
}