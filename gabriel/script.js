ScrollReveal().reveal('#texto',{
    duration: 3000, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'left', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})
ScrollReveal().reveal('.sect2',{
    duration: 1000, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'left', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})
ScrollReveal().reveal('.sect1',{
    duration: 1000, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'bottom', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})
ScrollReveal().reveal('#img',{
    duration: 3000, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'left', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Alterna a classe 'dark-mode' no body
    document.querySelector('header').classList.toggle('dark-mode'); // Alterna no header
    document.querySelector('footer').classList.toggle('dark-mode'); // Alterna no footer
  });




