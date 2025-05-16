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

// Exemplo de dados para busca (você pode adaptar para buscar no DOM ou em um array)
const searchData = [
  {
    title: "Los Angeles food & drink guide: 10 things to try in Los Angeles, California",
    summary: "A comida de Los Angeles é famosa por sua diversidade. Conheça os sabores únicos da cidade.",
    category: "Food and Drink",
    date: "Aug 12, 2024 · 5 min read"
  },
  {
    title: "15 South London Markets You'll Love",
    summary: "",
    category: "Shopping",
    date: "Aug 6, 2024 · 4 min read"
  },
  {
    title: "10 incredible hotels you can book with points in 2024",
    summary: "",
    category: "Hotels",
    date: "Aug 12, 2024 · 4 min read"
  },
  {
    title: "Visiting Chicago on a Budget: Affordable Eats and Attractions",
    summary: "",
    category: "pão, Budget",
    date: "Aug 8, 2024 · 4 min read"
  }
];
document.getElementById('search-icon').addEventListener('click', function() {
  const searchBar = document.getElementById('search-bar');
  searchBar.classList.toggle('active');
  if (searchBar.classList.contains('active')) {
    searchBar.focus();
  } else {
    searchBar.value = '';
    filterSections();
  }
});

async function fetchItens(query = '') {
  const res = await fetch('http://localhost:3000/itens?q=' + encodeURIComponent(query));
  return await res.json();
}

async function filterSections() {
  const query = document.getElementById('search-bar').value;
  const resultsDiv = document.getElementById('search-results');
  const itens = await fetchItens(query);

  if (!query && itens.length === 0) {
    resultsDiv.style.display = 'none';
    resultsDiv.innerHTML = '';
    return;
  }

  resultsDiv.innerHTML = `
    <div class="search-gradient-top"></div>
    <div class="search-results-box">
      ${itens.map(item => `
        <div class="result-item">
          <span class="category">${item.categoria}</span>
          <div class="result-title">${item.titulo}</div>
          <div class="result-summary">${item.resumo}</div>
          <div class="meta">${item.data}</div>
        </div>
      `).join('')}
    </div>
  `;
  resultsDiv.style.display = 'block';
}

