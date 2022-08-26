import { match } from "./match.js";

const allOptions = document.querySelectorAll(".opt");

const boxImages = document.querySelector(".images");

const gameSelectionBox = document.querySelector(".pick");

const optionSelectPlayer = document.querySelector(".opt_pick");

const imageSelectPlayer = document.querySelector(".img_pick");

const waitCpuCatch = document.querySelector(".pick_cpu");

const cpuSelectedOption = document.querySelector(".house_picked");

const cpuSelectedImage = document.querySelector("#cpu_pick_img");

const cpuSelectionBox = document.querySelector(".wrapper_picked");

const tryAgainButton = document.querySelector(".play");

const resultBox = document.querySelector(".result");

let pickValuePlayer = "";

class PickUpOptions {
  StartingRound() {
    boxImages.style.display = "none";

    gameSelectionBox.style.display = "flex";

    setTimeout(() => {
      this.CpuGetsRandomValue();
      this.ComparingValues();
    }, 5000);
  }

  ShowOrHide() {
    cpuSelectedOption.style.display = "flex";

    waitCpuCatch.style.display = "none";
  }

  CpuGetsRandomValue() {
    const options = [
      "rock",
      "paper",
      "scissors",
      "spock",
      "lizard",
      "rock",
      "paper",
      "scissors",
      "spock",
      "lizard",
      "rock",
      "paper",
      "scissors",
      "spock",
      "lizard",
      "rock",
      "paper",
      "scissors",
      "spock",
      "lizard",
    ];

    const min = 1;

    const max = options.length;

    let index = Math.floor(Math.random() * (max - min) + min);

    this.ShowOrHide();

    cpuSelectedOption.setAttribute("id", options[index]);

    this.SendingCpuSelectedOption(options[index]);
  }

  SendingCpuSelectedOption(value) {
    cpuSelectedImage.setAttribute("class", value);

    if (value === "paper") {
      this.SendSelectedImageSourceCpu("./src/assets/icon-paper.svg");

      this.SendCpuSelectedColor("paper");
    } else if (value === "rock") {
      this.SendSelectedImageSourceCpu("./src/assets/icon-rock.svg");

      this.SendCpuSelectedColor("rock");
    } else if (value === "spock") {
      this.SendSelectedImageSourceCpu("./src/assets/icon-spock.svg");

      this.SendCpuSelectedColor("spock");
    } else if (value === "lizard") {
      this.SendSelectedImageSourceCpu("./src/assets/icon-lizard.svg");

      this.SendCpuSelectedColor("lizard");
    } else {
      this.SendSelectedImageSourceCpu("./src/assets/icon-scissors.svg");

      this.SendCpuSelectedColor("scissors");
    }
  }

  SendSelectedImageSourceCpu(url) {
    cpuSelectedImage.setAttribute("src", url);
  }

  SendCpuSelectedColor(name) {
    cpuSelectedOption.setAttribute("id", name);
  }

  ComparingValues() {
    const pickValueCpu = cpuSelectionBox.parentNode.children[1].children[1].id;
    match.HandleDeparture(pickValuePlayer, pickValueCpu);
  }

  TryAgain() {
    boxImages.style.display = "flex";

    gameSelectionBox.style.display = "none";

    resultBox.style.display = "none";

    cpuSelectedOption.style.display = "none";

    waitCpuCatch.style.display = "flex";
  }
}

const F = new PickUpOptions();

allOptions.forEach((e) => {
  e.addEventListener("click", (e) => {
    F.StartingRound();

    if (e.target.attributes[1].value === "rock") {
      imageSelectPlayer.setAttribute("src", "./src/assets/icon-rock.svg");

      imageSelectPlayer.setAttribute("alt", "rock");

      optionSelectPlayer.setAttribute("id", "rock");

      pickValuePlayer = "rock";
    } else if (e.target.attributes[1].value === "scissors") {
      imageSelectPlayer.setAttribute("src", "./src/assets/icon-scissors.svg");

      imageSelectPlayer.setAttribute("alt", "scissors");

      optionSelectPlayer.setAttribute("id", "scissors");

      pickValuePlayer = "scissors";
    } else if (e.target.attributes[1].value === "spock") {
      imageSelectPlayer.setAttribute("src", "./src/assets/icon-spock.svg");

      imageSelectPlayer.setAttribute("alt", "spock");

      optionSelectPlayer.setAttribute("id", "spock");

      pickValuePlayer = "spock";
    } else if (e.target.attributes[1].value === "lizard") {
      imageSelectPlayer.setAttribute("src", "./src/assets/icon-lizard.svg");

      imageSelectPlayer.setAttribute("alt", "lizard");

      optionSelectPlayer.setAttribute("id", "lizard");

      pickValuePlayer = "lizard";
    } else {
      imageSelectPlayer.setAttribute("src", "./src/assets/icon-paper.svg");

      imageSelectPlayer.setAttribute("alt", "paper");

      optionSelectPlayer.setAttribute("id", "paper");

      pickValuePlayer = "paper";
    }
  });
});

tryAgainButton.addEventListener("click", F.TryAgain);
