import "./handlePick.js";

const modal = document.querySelector(".modal__rules");

var controller = false;

class OpenModal {
  open() {
    controller = true;
    if (controller) {
      modal.style.display = "flex";
    }
  }
}
class CloseModal {
  close() {
    controller = false;
    if (!controller) {
      modal.style.display = "none";
    }
  }
}

const openM = new OpenModal();
const closeM = new CloseModal();

export { openM, closeM };
