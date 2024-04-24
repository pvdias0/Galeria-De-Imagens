let show = document.getElementById("show");
document.addEventListener("click",function(ev){
    let event = ev.target;
    if(event.className == "figuras"){
        show.style.display = "flex";
        show.style.backgroundImage = `url(${event.src})`;
        show.style.backgroundSize = "cover";
    }else{
        show.style.display = "none";
    }
})