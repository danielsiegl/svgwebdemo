import { moveSection } from './svgutils.js';

function moveSpaceShipRight() {
     moveSection('spaceship', 20, 0);
}

        
          // Load the SVG dynamically
          function loadSVG() {
            document.getElementById("svg-Container").innerHTML ="started"
            fetch("images/spaceship.svg") // Replace with your actual SVG file path
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                }) // Get the SVG as text
                .then(svgText => {
                    //remove the SVG header and add a new one
                    let svgLines = svgText.split('\n');
                    svgLines.splice(0, 3, '<svg id="svgCanvas" xmlns="http://www.w3.org/2000/svg" version="1.1" height="200" width="200" viewBox="0 0 200 200">');
                    updatedSVG = svgLines.join('\n');
                    document.getElementById("svg-Container").innerHTML = updatedSVG; // Inject SVG
                })
                .catch(error => {
                    console.error("Error loading SVG:", error);
                    document.getElementById("svgC-ontainer").innerHTML = "Failed to load SVG";
                });
        }

        // Change the color of a specific element inside the SVG
        function changeSVGColor() {
            var domElemnt = document.getElementById("spaceshipWindow");
            if (domElemnt) {
                domElemnt.setAttribute("fill", "red"); 
            }
        }

        window.onload = loadSVG;