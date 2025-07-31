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
ScrollReveal().reveal('.texto1',{
    duration: 3000, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'right', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})
ScrollReveal().reveal('.img1',{
    duration: 1000, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'right', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})
ScrollReveal().reveal('.col-md-4',{
    duration: 1000, // duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'right', // origem do efeito: o conteudo virá da direita para a esquerda
    distance : '50px', // distancia que o elemento "viaja" antes de aparecer
})
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const firstSection = document.querySelector(".sect1");
  
    window.addEventListener("scroll", () => {
      const firstSectionBottom = firstSection.getBoundingClientRect().bottom;
  
      if (firstSectionBottom <= 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });
  window.addEventListener("load", () => {
    document.body.style.visibility = "visible";
  });

// ...existing code...

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const firstSection = document.querySelector(".sect1");
    const hamburger = document.getElementById('hamburgerButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeButton = document.getElementById('closeButton');

    window.addEventListener("scroll", () => {
      const firstSectionBottom = firstSection.getBoundingClientRect().bottom;
      if (firstSectionBottom <= 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // MOBILE MENU
    hamburger.addEventListener('click', () => {
      mobileMenu.style.display = 'flex';
      hamburger.style.display = 'none';
    });

    closeButton.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
      hamburger.style.display = 'block';
    });
});
// ...existing code...