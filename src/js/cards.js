const caracteristicasImages = document.getElementById("caracteristicasImages");
const caracteristicasCards = document.getElementById("caracteristicasCards");

caracteristicasCards.addEventListener("click", (event) => {
  const selectedTab = event.target.closest("[data-id]").dataset.id;

  if (!selectedTab) return;

  caracteristicasCards.querySelector(".active").classList.remove("active");
  caracteristicasCards.querySelector(`[data-id="${selectedTab}"]`).classList.add("active");

  caracteristicasImages.querySelector(".active").classList.remove("active");
  caracteristicasImages.querySelector(`[data-id="${selectedTab}"]`).classList.add("active");
})