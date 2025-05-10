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
// Todas as Div que estão oculta, ao clicar no botão vão aparecer

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

function filterSections() {
  // Obtém o valor da barra de pesquisa
  const query = document.getElementById('search-bar').value.toLowerCase();

  // Seleciona todas as divs e seções da página
  const elements = document.querySelectorAll('main section, main div');

  // Itera por cada elemento (div ou seção)
  elements.forEach(element => {
    // Verifica se o texto do elemento contém a palavra-chave
    if (element.innerText.toLowerCase().includes(query)) {
      element.style.display = 'block'; // Mostra o elemento
    } else {
      element.style.display = 'none'; // Esconde o elemento
    }
  });
}
function filterSections() {
  // Obtém o valor da barra de pesquisa
  const query = document.getElementById('search-bar').value.toLowerCase();

  // Seleciona todas as divs e seções da página
  const elements = document.querySelectorAll('main section, main div');

  // Verifica se a barra de pesquisa está vazia
  if (query === '') {
    // Se estiver vazia, mostra todos os elementos
    elements.forEach(element => {
      element.style.visibility = 'visible'; // Torna o elemento visível
      element.style.opacity = '1'; // Define a opacidade como 100%
      element.style.pointerEvents = 'auto'; // Permite interação com o elemento
    });
  } else {
    // Caso contrário, filtra os elementos com base na palavra-chave
    elements.forEach(element => {
      if (element.innerText.toLowerCase().includes(query)) {
        element.style.visibility = 'visible'; // Torna o elemento visível
        element.style.opacity = '1'; // Define a opacidade como 100%
        element.style.pointerEvents = 'auto'; // Permite interação com o elemento
      } else {
        element.style.visibility = 'hidden'; // Oculta o elemento visualmente
        element.style.opacity = '0'; // Define a opacidade como 0%
        element.style.pointerEvents = 'none'; // Impede interação com o elemento
      }
    });
  }
}