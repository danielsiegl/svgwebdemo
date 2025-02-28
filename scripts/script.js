import { moveSection, colorSection, loadSVG } from './svgutils.js';

// Attach functions to the window object
window.moveSpaceShipRight = moveSpaceShipRight;
window.moveSpaceShipLeft = moveSpaceShipLeft;
window.changeSpaceShipWindowColor = changeSpaceShipWindowColor;

// Load the spaceship SVG into the html div tag on page load
window.onload = loadSpaceShip();

// Move the spaceship right by 20 units
export function moveSpaceShipRight() {
    moveSection('spaceship', 20, 0);
}

// Move the spaceship left by 20 units
export function moveSpaceShipLeft() {
    moveSection('spaceship', -20, 0);
}

// Change the color of the spaceship window to red
export function changeSpaceShipWindowColor() {
    colorSection('spaceshipWindow', 'red');
}

// Load the spaceship SVG into the html div tag on page load
export function loadSpaceShip() {
    loadSVG("svg-Container", "images/spaceship.svg");
}





     