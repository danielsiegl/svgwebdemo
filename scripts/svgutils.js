export function moveSection(idStr, xOffset, yOffset) {
    var domElemnt = document.getElementById(idStr);
    if (domElemnt) {
        var transformAttr = ' translate(' + xOffset + ',' + yOffset + ')';
        domElemnt.setAttribute('transform', transformAttr);
    }
}

export function colorSection(idStr, color) {
    var domElemnt = document.getElementById(idStr);
    if (domElemnt) {
        domElemnt.setAttribute("fill", color); 
    }
}

// Load the SVG dynamically
export function loadSVG(idStr, svgPath) {
    document.getElementById(idStr).innerHTML ="started"
    fetch(svgPath) // Replace with your actual SVG file path
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    }) // Get the SVG as text
    .then(svgText => {
        // //remove the SVG header and add a new one
        // let svgLines = svgText.split('\n');
        // svgLines.splice(0, 3, '<svg id="svgCanvas" xmlns="http://www.w3.org/2000/svg" version="1.1" height="200" width="200" viewBox="0 0 200 200">');
        // let updatedSVG = svgLines.join('\n');
        // console.info(updatedSVG);
        // // Inject the SVG into the container
        document.getElementById(idStr).innerHTML = svgText; // Inject SVG
    })
    .catch(error => {
        console.error("Error loading SVG:", error);
        document.getElementById(idStr).innerHTML = "Failed to load SVG";
    });
}