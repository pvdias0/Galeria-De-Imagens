fetch("links.json").then(response => response.json()).then(data => {
    let images = document.querySelectorAll(".figuras");
    for(let i =0;i < images.length;i++){
        images[i].src = data.paisagens[i];
    }
})