const heroWrapper = document.getElementById("heroWrapper");
const heroShow = document.getElementById("heroShow");
const heroSlyderButtons = document.getElementById("heroSlyderButtons");
let currentSlide = 1;

const slideAnimation = () => {
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

  if (currentSlide < heroShow.children.length) {
    currentSlide++;
  } else {
    currentSlide = 1;
  }

  heroSlyderButtons.querySelector(".active").classList.remove("active");
  heroSlyderButtons.children[currentSlide - 1].classList.add("active");

}

setInterval(slideAnimation, 5000);
