"use strict";

window.addEventListener("DOMContentLoaded", start);

// Start
function start() {
  console.log("start");
  const color = document.querySelector("#color").value;
  getColor(color);
  document.querySelector("#color").addEventListener("input", getColor);
}

// Get the colors
function getColor() {
  const color = document.querySelector("#color").value; // value = hex
  console.log(color);
  displayPickedColor(color);
  displayHex(color);
  hexToRGB(color);
}
// Display the picked color
function displayPickedColor(hex) {
  document.querySelector(".box").style.backgroundColor = hex;
}

// Display hex
function displayHex(hex) {
  document.querySelector("#hex").textContent = `HEX: ${hex}`;
}

// Display rgb from function
function displayRGB(r, g, b) {
  document.querySelector("#rgb").textContent = `R: ${r} G: ${g} B: ${b}`;
}

// Display hsl from function rgbToHSL
function displayHSL(h, s, l) {
  document.querySelector("#hsl").textContent = `H: ${h} S: ${s}% L: ${l}%`;
}

// Change hex to RGB
// Exercise color convert hexToRGB
function hexToRGB(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  console.log({ r, g, b });
  displayRGB(r, g, b);
  rgbToHSL(r, g, b);
}

function rgbToCss() {}

function rgbToHex() {}

// Change rgb to HSL
function rgbToHSL(r, g, b) {
  // Given exercise code
  // The algorithm for conversion from RGB to HSL as described on the HSL
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  // My code
  h = Math.round(h);
  s = Math.round(s);
  l = Math.round(l);

  // Given code
  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  // My code
  displayHSL(h, s, l);
}
