// URL: https://subtle-empanada-b86d13.netlify.app/
// Interaction: Menu hamburger - ouvre/ferme le menu de navigation

const toggle = document.querySelector(".header__menu-toggle"); 
const nav = document.querySelector(".header__nav");
const logo = document.querySelector(".header__logo");
const page = document.body;

// Vérifie si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;

    // Mise à jour des attributs ARIA pour accessibilité
    toggle.ariaExpanded = isClosed;
    
    // Afficher/Cacher le menu avec hidden
    if (isClosed) {
      nav.hidden = false;
      nav.style.transform = "translateX(0)";
    } else {
      nav.style.transform = "translateX(100%)";
      setTimeout(() => {
        nav.hidden = true;
      }, 300);
    }
    
    logo.classList.toggle("header__logo--extend", isClosed); 
    page.classList.toggle("u-noscroll", isClosed);
  });
  
  //URL: http://lafanfacomtoise.maman-sambe.fr/  
  // Fermer le menu au click sur les liens
  const menuLinks = nav.querySelectorAll(".header__nav-link");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggle.ariaExpanded = "false";
      nav.style.transform = "translateX(100%)";
      setTimeout(() => {
        nav.hidden = true;
      }, 300);
      logo.classList.remove("header__logo--extend");
      page.classList.remove("u-noscroll");
    });
  });
}
// URL: http://lafanfacomtoise.maman-sambe.fr/  & pour le 2 e carousel http://lafanfacomtoise.maman-sambe.fr/sc%C3%A8nes.html
// Interaction: Carrousel de découverte - boutons précédent/suivant pour défiler les cartes

const slidesContainer = document.querySelector(".carousel__container");
const slide = document.querySelector(".carousel__slide");
const prevButton = document.querySelector(".carousel__btn--prev");
const nextButton = document.querySelector(".carousel__btn--next");

if (slidesContainer && slide && prevButton && nextButton) {
  const slideWidth = slide.getBoundingClientRect().width + 24; // 24 = gap approx.

  nextButton.addEventListener("click", () => {
    slidesContainer.scrollBy({ left: slideWidth, behavior: "smooth" });
  });

  prevButton.addEventListener("click", () => {
    slidesContainer.scrollBy({ left: -slideWidth, behavior: "smooth" });
  });
}

