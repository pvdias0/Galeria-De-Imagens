function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function containsSpecialWord(string){
    const mail = ["hotmail.com","proton.me","gmail.com","outlook.com"]
    const splittedString = string.split("@");
    return mail.includes(splittedString[1]);

}
document.getElementById("container").addEventListener('click' ,function(ev){
    window.location.assign("Pag"+ (capitalize(ev.target.className))+".html");
});

function btnClicked(){
    let mailVar = document.getElementById("mail").value;
    (containsSpecialWord(mailVar)) ? alert("Email cadastrado com sucesso !") : alert("Insira um endereço de Email válido !"); 
}