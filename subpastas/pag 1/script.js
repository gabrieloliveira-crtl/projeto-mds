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