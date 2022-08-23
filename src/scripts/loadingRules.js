const modal = document.querySelector(".modal__rules");

export const LoadingRules = (window.onload = () => {
  setTimeout(() => {
    modal.style.display = "flex";
    modal.style.transition = ".4s all";
  }, 1000);
});
