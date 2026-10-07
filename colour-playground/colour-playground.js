const colorPicker = document.querySelector("#color-picker");
const colorPreview = document.querySelector(".color-preview")
// Value Displays
const hexTextDisplay = document.querySelector("#hex-value")
const rgbTextDisplay = document.querySelector("#rgb-value")
// Buttons 
const randomColorButton = document.querySelector("#random-color")
const copyHex = document.getElementById("copy-hex")
const copyRgb = document.getElementById("copy-rgb")
// Error Messages
const errorHex = document.getElementById("error-hex")
const errorRgb = document.getElementById("error-rgb")

//////////////////////////////////////////////////////////////////////////

function genColor() {

    const rgbRed = Math.floor(Math.random() * 256);
    const rgbGreen = Math.floor(Math.random() * 256);
    const rgbBlue = Math.floor(Math.random() * 256);

    const hexRed = rgbRed.toString(16).padStart(2, "0");
    const hexGreen = rgbGreen.toString(16).padStart(2, "0");
    const hexBlue = rgbBlue.toString(16).padStart(2, "0");

    const rgb = `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`
    const hex = `#${hexRed}${hexGreen}${hexBlue}`

    return [hex, rgb];
}

// Values
let hexValue
let rgbValue

function updateDisplay() {
    colorPreview.style.background = hexValue;
    hexTextDisplay.textContent = hexValue;
    rgbTextDisplay.textContent = rgbValue;
    errorHex.style.display = "none";
    errorRgb.style.display = "none";
}

randomColorButton.addEventListener("click", function () {
    [hexValue, rgbValue] = genColor();
    colorPicker.value = hexValue
    updateDisplay()
});

colorPicker.addEventListener("input", function () {
    hexValue = colorPicker.value;
    rgbValue = hex2rgb(hexValue)

    updateDisplay()
});

function hex2rgb(hex) {
    const red = parseInt(hex.slice(1, 3), 16);
    const green = parseInt(hex.slice(3, 5), 16);
    const blue = parseInt(hex.slice(5, 7), 16);

    const rgb = `rgb(${red}, ${green}, ${blue})`

    console.log(rgb)

    return rgb
};

copyHex.addEventListener("click", function () {
    if (!hexValue) {
        errorHex.style.display = "Block";
        return;
    }
    navigator.clipboard.writeText(hexValue);
});

copyRgb.addEventListener("click", function () {
    if (!rgbValue) {
        errorRgb.style.display = "Block";
        return;
    }
    navigator.clipboard.writeText(rgbValue);
});