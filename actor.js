// Actor's code:

let xActor = 85;
let yActor = 366;
let collide = false;
let myPoints = 0;

function showActor() {
    image(imageActor, xActor, yActor,30, 30);
}

function moveActor() {
    if (keyIsDown(UP_ARROW)) {
        yActor -= 3;
      }
    if (keyIsDown(DOWN_ARROW)) {
        if (canMove()) {
          yActor += 3;
        }  
    }
}

function verifyCollide() {
    for (i = 0; i < imageCars.length; i++) {
        collide = collideRectCircle(xCars[i], yCars[i], widthCar, heightCar, xActor, yActor, 15)
        if (collide) {
          returnActorStartPosition();
          soundCollide.play();
          if (pointsBiggerZero()) {
            myPoints -= 1; 
          }
        }
      }
    }
    
function returnActorStartPosition() {
    yActor = 366;
}

function showPoints() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(myPoints, width / 5, 27);
}

function markPoints() {
    if (yActor < 15) {
        myPoints += 1;
        soundPoints.play();
        returnActorStartPosition();
    }
}

function pointsBiggerZero() {
    return myPoints > 0;
}

function canMove() {
    return yActor < 366;
}