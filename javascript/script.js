var start = new Date().getTime();

function getRandomPosition() {
    var screenWidth = window.innerWidth - 200; // Adjust for shape width
    var screenHeight = window.innerHeight - 200; // Adjust for shape height
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);
    return { x: randomX, y: randomY };
}

function makeshapeappear() {
    var shape = document.getElementById("shape");
    var position = getRandomPosition();
    shape.style.left = position.x + "px";
    shape.style.top = position.y + "px";
    shape.style.display = "block";
    start = new Date().getTime(); // Update the start time
}

function showNextShape() {
    makeshapeappear();
    setTimeout(makeshapeappear, 1000); // Show the next shape after 1 second
}

document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    showNextShape(); // Show the next shape immediately after clicking
};

// Initial shape appearance
makeshapeappear();