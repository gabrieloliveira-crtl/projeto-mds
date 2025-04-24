document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Alterna a classe 'dark-mode' no body
    document.querySelector('header').classList.toggle('dark-mode'); // Alterna no header
    document.querySelector('footer').classList.toggle('dark-mode'); // Alterna no footer
  });
