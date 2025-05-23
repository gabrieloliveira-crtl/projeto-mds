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
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const firstSection = document.querySelector(".secti1");

  window.addEventListener("scroll", () => {
    const firstSectionBottom = firstSection.getBoundingClientRect().bottom;

    if (firstSectionBottom <= 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

// Função do botão de VER MAIS
function aparecer() {
    // Se a Div estiver oculta(display='none')
    if (document.getElementById('oculta').style.display = 'none') {
        // Faça ela aparecer normalmente
        document.getElementById('oculta').style.display = 'block'

        // Se o Botão estiver aparecendo (display='block')
        document.getElementById('oculta-botao').style.display = 'block'
        // Faça ele ser ocultado
        document.getElementById('oculta-botao').style.display = 'none'
    };
};

// -------------------------------------------BOTÃO PARA OCULTAR - (SESSÃO2)-----------------------------------------------
// Todas as Div que estão aparecendo, ao clicar no botão vão de ocultar novamente
// Função do botão VOLTAR
function voltar() {
    // Se a Div estiver aparecendo
    if (document.getElementById('oculta').style.display = 'block') {
        // Faça que ele se oculta
        document.getElementById('oculta').style.display = 'none'

        if (
            // Se o botão estiver oculto
            document.getElementById('aparecer-botao').style.display = 'none')
            // Faça que ele apareça 
            document.getElementById('aparecer-botao').style.display = 'block'
        // e quando a Div aparecer faça que o botão VER MAIS apareça 
        document.getElementById('oculta-botao').style.display = 'block'

    };
};

