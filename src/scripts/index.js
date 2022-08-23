import { closeM, openM } from "./handleRules.js";

const btn = document.querySelector(".rules");
const close = document.querySelector(".close");

btn.addEventListener("click", openM.open);
close.addEventListener("click", closeM.close);

