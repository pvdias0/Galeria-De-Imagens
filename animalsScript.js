let images = document.querySelectorAll(".figuras");
let imageChunkSize = 5; // Adjust this value based on performance needs

document.addEventListener("DOMContentLoaded", () => {
  fetch("links.json").then(response => response.json()).then(data => {
    let imageCount = data.animais.length;
    let processedImages = 0;

    function loadImages(startIndex) {
      for (let i = startIndex; i < Math.min(startIndex + imageChunkSize, imageCount); i++) {
        const image = new Image();
        image.src = data.paisagens[i]; // Load image outside loop

        image.onload = function() {
          images[i].src = this.src;
        };

        processedImages++;
      }

      if (processedImages < imageCount) {
        setTimeout(function() {
          loadImages(processedImages);
        }, 1000); // Adjust timeout as needed
      }
    }

    loadImages(0);
  });
});
