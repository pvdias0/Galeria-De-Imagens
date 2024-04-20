function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.getElementById("container").addEventListener('click' ,function(ev){
    window.location.assign("Pag"+ (capitalize(ev.target.className))+".html");
});

