        // function moveCircle() {
        //     let circle = document.getElementById("myCircle");
        //     let currentX = parseInt(circle.getAttribute("cx"));
        //     circle.setAttribute("cx", currentX + 20);
        // }

        function moveCircle() {

             moveSection('myCircle', 20, 0);
           }

        function moveSection(idStr, xOffset, yOffset) {
            var domElemnt = document.getElementById(idStr);
            if (domElemnt) {
                var transformAttr = ' translate(' + xOffset + ',' + yOffset + ')';
                domElemnt.setAttribute('transform', transformAttr);
            }
        }
          // Load the SVG dynamically
          function loadSVG() {
            document.getElementById("svgContainer").innerHTML ="started"
            fetch("images/example.svg") // Replace with your actual SVG file path
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                }) // Get the SVG as text
                .then(svgText => {
                    document.getElementById("svgContainer").innerHTML = svgText; // Inject SVG
                })
                .catch(error => {
                    console.error("Error loading SVG:", error);
                    document.getElementById("svgContainer").innerHTML = "Failed to load SVG";
                });
        }

        // Change the color of a specific element inside the SVG
        function changeSVGColor() {
            let svgElement = document.querySelector("#svgContainer svg"); // Select the SVG
            if (svgElement) {
                let circle = svgElement.querySelector("myCircle"); // Select the circle inside the SVG
                if (circle) {
                    circle.setAttribute("fill", "red"); // Change color
                }
            }
        }

        window.onload = loadSVG;