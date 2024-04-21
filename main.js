function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function containsSpecialChar(string){
    return string.indexOf("@") == -1 ? false : string.indexOf(".com")== -1 ? false:true;
}
document.getElementById("container").addEventListener('click' ,function(ev){
    window.location.assign("Pag"+ (capitalize(ev.target.className))+".html");
});

function btnClicked(){
    let mailVar = document.getElementById("mail").value;
    (mailVar != "" && containsSpecialChar(mailVar)) ? alert("Email cadastrado com sucesso !") : alert("Insira um endereço de Email válido !"); 
}