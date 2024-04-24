
// função do hover nas imagens pelo botão abrir
const botoes = document.querySelectorAll('.botoesAparecem');

botoes.forEach((botao) => {
    botao.addEventListener('mouseover', function () {
    var elementoPai = this.parentNode;
    var imgCorrespondente = elementoPai.previousElementSibling;
    imgCorrespondente.classList.add('figuras-hover');
    })
    botao.addEventListener('mouseout', function () {
    var elementoPai = this.parentNode;
    var imgCorrespondente = elementoPai.previousElementSibling;
    imgCorrespondente.classList.remove('figuras-hover')
    })

})


// Função do botão de voltar ao topo
document.addEventListener('DOMContentLoaded', function(){
    const botaoSeta = document.querySelector('#botaoSeta');
    const ancoraSeta = document.getElementById('animalSection');

    botaoSeta.addEventListener('click', function(){
    window.scrollTo({
        top:ancoraSeta.offsetTop, behavior:"smooth"
    });
    })
})