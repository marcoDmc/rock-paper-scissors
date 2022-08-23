import { closeM, openM } from "./handleRules.js";
import { LoadingRules } from "./loadingRules.js";

const btn = document.querySelector(".rules");
const close = document.querySelector(".close");

btn.addEventListener("click", openM.open);
close.addEventListener("click", closeM.close);
LoadingRules
