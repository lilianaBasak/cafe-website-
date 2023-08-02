/*=============== CHANGE BACKGROUND HEADER ===============*/
const ScrollHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewport height,add the scroll-header class

  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", ScrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // whet the scroll is heisgher than 350 viewport height, add the show-scroll clas to the a tag whit the scrollup

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        'nav a[href*="' + sectionId + '"]'
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "stop",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //reset: true// animation repeat
});

sr.reveal(`.home__data, .products__data, .steps__content,
           .footer__container` );
sr.reveal(`.home__img`, { origin: "bottom" });
sr.reveal(`.products__card` , { interlval: 100 });
sr.reveal(`.about__img, .testimonial__img`, { origin: "right" });
sr.reveal(`.about__data, .testimonial__data`, { origin: "left" });



