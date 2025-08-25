const heroWrapper = document.getElementById("heroWrapper");
const heroShow = document.getElementById("heroShow");
const heroSlyderButtons = document.getElementById("heroSlyderButtons");

const siguienteSlide = () => {
  const firstSlide = heroShow.children[0];
  const sizeTranslate = firstSlide.offsetWidth;
  const timeTransition = 500;

  heroShow.style.transition = `transform ${timeTransition}ms ease-out`;
  heroShow.style.transform = `translateX(-${sizeTranslate}px)`;

  setTimeout(() => {
    heroShow.appendChild(firstSlide);
    heroShow.style.transition = "none";
    heroShow.style.transform = `translateX(0)`;
  }, timeTransition);
}

setInterval(siguienteSlide, 3000);