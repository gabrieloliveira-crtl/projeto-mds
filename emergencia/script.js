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
