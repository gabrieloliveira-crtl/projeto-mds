 const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      const newsItems = document.querySelectorAll('.news-item');
      newsItems.forEach(item => {
        const keywords = item.dataset.keywords;
        if (keywords.includes(filter)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.news-item').forEach(item => {
      observer.observe(item);
    });