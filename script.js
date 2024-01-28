function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*=== scroll reveal ===*/
   ScrollReveal({ 
   reset: true,
   distance:'80px',
   duration:2000,
   delay:200
   });
   
   ScrollReveal().reveal('.section__text__p1,.title',{ origin: 'top' });
   ScrollReveal().reveal('.section__pic-container img, .nav-links-container',{ origin: 'bottom' });
   ScrollReveal().reveal('.section__text__p2, .contact-info-upper-container',{ origin: 'left' });
   ScrollReveal().reveal('.profile-link,.section__text__p3',{ origin: 'right' });