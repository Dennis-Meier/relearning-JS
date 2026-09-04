const colorPicker = document.querySelector("#color-picker");
const colorPreview = document.querySelector(".color-preview")
const hexDisplay = document.querySelector("#hex-value")
const RandomColorButton = document.querySelector("#random-color")

let selectedColour

function updateColor() {
    colorPreview.style.background = selectedColour;
    hexDisplay.textContent = selectedColour;
};

function randomColor() {
    red = Math.floor(Math.random() * 256).toString(16);
    green = Math.floor(Math.random() * 256).toString(16);
    blue = Math.floor(Math.random() * 256).toString(16);

    rgb = "#" + red + green + blue

    return rgb
};

colorPicker.addEventListener("input", function () {
    selectedColour = colorPicker.value;
    updateColor()
});


RandomColorButton.addEventListener("click", function () {
    selectedColour = randomColor()
    colorPicker.value = selectedColour
    updateColor()
});