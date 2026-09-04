const colorPicker = document.querySelector("#color-picker");
const colorPreview = document.querySelector(".color-preview")
// Value Displays
const hexDisplay = document.querySelector("#hex-value")
const rgbDisplay = document.querySelector("#rgb-value")
// Buttons 
const randomColorButton = document.querySelector("#random-color")
const copyHex = document.getElementById("copy-hex")
const copyRgb = document.getElementById("copy-rgb")
// Values
let hexValue
let rgbValue

function updateColor() {
    colorPreview.style.background = hexValue;
    hexDisplay.textContent = hexValue;
    rgbDisplay.textContent = rgbValue;
};

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const rgb = `R: ${red} G: ${green} B: ${blue}`;

    const redHex = red.toString(16).padStart(2, "0");
    const greenHex = green.toString(16).padStart(2, "0");
    const blueHex = blue.toString(16).padStart(2, "0");

    const hex = `#${redHex}${greenHex}${blueHex}`;

    return [hex, rgb];
};

colorPicker.addEventListener("input", function () {
    hexValue = colorPicker.value;
    rgbValue = hex2rgb(hexValue)

    updateColor()
});

function hex2rgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    let rgb = `R: ${r} G: ${g} B: ${b}`;

    console.log(rgb)

    return rgb
};


randomColorButton.addEventListener("click", function () {
    [hexValue, rgbValue] = randomColor();

    colorPicker.value = hexValue;
    updateColor();
});

copyHex.addEventListener("click", function () {
    if (!hexValue) {
        alert("error, no HEX value found");
        return;
    }
    navigator.clipboard.writeText(hexValue);
});

copyRgb.addEventListener("click", function () {
    if (!rgbValue) {
        alert("error, no RGB values found");
        return;
    }
    navigator.clipboard.writeText(rgbValue);
});
