var numSquares = 6;
var colors = []
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init()

function init() {
    setupModeButtons();
    setupSquareListenters();
    reset();
}

function setupModeButtons() {
    //mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function setupSquareListenters() {
    //listeners for squares
    for (var i = 0; i < squares.length; i++) {
        //add click listeners
        squares[i].addEventListener("click", function () {
            //grab color
            var clickedColor = this.style.backgroundColor
            //compare color
            if (clickedColor === pickedColor) {
                changeColor(clickedColor);
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?"

            } else {
                this.style.backgroundColor = "rgb(23, 23, 23)";
                messageDisplay.textContent = ("Try Again");
            }
        });
    }
}


function reset() {
    colors = generateRandomColors(numSquares);
    //pick new rand color
    pickedColor = pickColor();
    //chnage color to match picked color
    colorDisplay.textContent = pickedColor;
    //change squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";

        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function () {
    reset();
});

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make array
    arr = []
    //add num colors
    for (var i = 0; i < num; i++) {
        //random color - push to array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    // pick red 0-255
    var r = Math.floor(Math.random() * 256);
    // pick green 0-255
    var g = Math.floor(Math.random() * 256);
    //pick blue 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}