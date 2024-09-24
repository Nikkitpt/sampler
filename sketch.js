let sound1, sound2;
let loopActive = false;
let centerX, centerY;
let boxSize = 100;
let loopLength = 500;  
let dragging = false;
let rotationSpeed = 0;
let baseBoxSize = 100; 
let textGraphics; // Graphics buffer for 2D text
let instructions = "Drag and hold the box to the left or right; then let go.";

function preload() {
    sound1 = loadSound('rhodes.wav'); 
    sound2 = loadSound('rhodes.wav'); 
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);  
    centerX = 0; 
    centerY = 0; 

    sound1.setLoop(true);
    sound1.play(); 

    sound2.setLoop(true);

    // Create a 2D graphics buffer for the text
    textGraphics = createGraphics(windowWidth, windowHeight);
}

function draw() {
    background(0);
    
    // Draw instructions on the 2D graphics buffer
    textGraphics.clear();
    textGraphics.fill(255);  // White text
    textGraphics.textSize(16);
    textGraphics.textAlign(CENTER, TOP); // Center horizontally, align to the top
    textGraphics.text(instructions, textGraphics.width / 2, 20); // Set text at the top center

    // Render the 3D content
    directionalLight(255, 255, 255, 0.5, 1, -0.5);
    ambientLight(50);

    boxSize = baseBoxSize + map(loopLength, 1, 750, -50, 50);

    let boxColor = color(map(loopLength, 1, 750, 0, 255), 0, 255 - map(loopLength, 1, 750, 0, 255));
    fill(boxColor);

    noStroke();
    push();
    translate(centerX, 0, 0); // keep the box centered in the middle
    rotateY(frameCount * rotationSpeed);
    box(boxSize); 
    pop();

    // Overlay the 2D graphics buffer on top of the 3D canvas
    image(textGraphics, -width / 2, -height / 2);
}

function mousePressed() {
    if (dist(mouseX - width / 2, mouseY - height / 2, centerX, centerY) < boxSize / 2) {
        loopActive = !loopActive;
        toggleLooper();
        dragging = true;
    }
}

function mouseDragged() {
    if (dragging) {
        centerX = constrain(mouseX - width / 2, -width / 2 + boxSize / 2, width / 2 - boxSize / 2);
        adjustLoopParameters();
    }
}

function mouseReleased() {
    dragging = false;
    centerX = 0; 
    loopLength = 500; 
    adjustLoopParameters(); 
    if (loopActive) {
        loopActive = false;
        toggleLooper();
    }
}

function toggleLooper() {
    if (loopActive) {
        let currentTime = sound1.currentTime();
        sound1.setVolume(0); 
        sound2.play(0, 1, 1, currentTime, (currentTime + loopLength / 1000)); 
        sound2.jump(currentTime); 
    } else {
        sound1.setVolume(1); 
        sound2.stop();
    }
}

function adjustLoopParameters() {
    let loopDuration = sound2.duration() * 1000; 
    loopLength = map(centerX, -width / 2 + boxSize / 2, width / 2 - boxSize / 2, 1, 750); 
    loopLength = constrain(loopLength, 1, loopDuration);
    rotationSpeed = map(loopLength, 1, 750, 0.1, 0.01);
    let currentTime = sound1.currentTime();
    sound2.stop(); 
    sound2.play(0, 1, 1, currentTime, (currentTime + loopLength / 1000)); 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    textGraphics.resizeCanvas(windowWidth, windowHeight); // Resize the text buffer
}
