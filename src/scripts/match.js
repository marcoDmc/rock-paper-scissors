const counter = document.querySelector(".count");
const resultMessage = document.querySelector("#title");
const resultBox = document.querySelector(".result");

class Match {
  constructor(player, cpu) {
    this.player = player;
    this.cpu = cpu;
    this.count = 0;

    this.HandleDeparture(this.player, this.cpu);
  }

  HandleDeparture(player, cpu) {
    if (!player || !cpu) return;
    if (player === cpu) {
      resultBox.style.display = "flex";
      resultMessage.innerText = "draw";
    }

    this.HandleScissors(player, cpu);
    this.HandleStone(player, cpu);
    this.HandlePaper(player, cpu);
    this.DealWithLizard(player, cpu);
    this.DealWithSpock(player, cpu);
  }
  HandleScissors(player, cpu) {
    if (player === "scissors" && cpu === "paper") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you win";
        this.count++;
        counter.innerText = this.count;
      }, 4000);
    } else if (player === "scissors" && cpu === "lizard") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you win";
        this.count++;
        counter.innerText = this.count;
      }, 4000);
    }
    if (player === "scissors" && cpu === "spock") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you loser";
        this.count < 1 ? (this.count = 0) : (this.count -= 1);
        counter.innerText = this.count;
      }, 4000);
    } else if (player === "scissors" && cpu === "rock") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you loser";
        this.count < 1 ? (this.count = 0) : (this.count -= 1);
        counter.innerText = this.count;
      }, 4000);
    }
  }
  HandleStone(player, cpu) {
    if (player === "rock" && cpu === "lizard") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you win";
        this.count++;
        counter.innerText = this.count;
      }, 4000);
    } else if (player === "rock" && cpu === "scissors") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you win";
        this.count++;
        counter.innerText = this.count;
      }, 4000);
    }
    if (player === "rock" && cpu === "spock") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you loser";
        this.count < 1 ? (this.count = 0) : (this.count -= 1);
        counter.innerText = this.count;
      }, 4000);
    } else if (player === "rock" && cpu === "paper") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you loser";
        this.count < 1 ? (this.count = 0) : (this.count -= 1);
        counter.innerText = this.count;
      }, 4000);
    }
  }
  HandlePaper(player, cpu) {
    if (player === "paper" && cpu === "spock") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you win";
        this.count++;
        counter.innerText = this.count;
      }, 4000);
    } else if (player === "paper" && cpu === "rock") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you win";
        this.count++;
        counter.innerText = this.count;
      }, 4000);
    }
    if (player === "paper" && cpu === "lizard") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you loser";
        this.count < 1 ? (this.count = 0) : (this.count -= 1);
        counter.innerText = this.count;
      }, 4000);
    } else if (player === "paper" && cpu === "scissors") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you loser";
        this.count < 1 ? (this.count = 0) : (this.count -= 1);
        counter.innerText = this.count;
      }, 4000);
    }
  }
  DealWithLizard(player, cpu) {
    if (player === "lizard" && cpu === "spock") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you win";
        this.count++;
        counter.innerText = this.count;
      }, 4000);
    } else if (player === "Lizard" && cpu === "paper") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you win";
        this.count++;
        counter.innerText = this.count;
      }, 4000);
    }
    if (player === "lizard" && cpu === "scissors") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you loser";
        this.count < 1 ? (this.count = 0) : (this.count -= 1);
        counter.innerText = this.count;
      }, 4000);
    } else if (player === "lizard" && cpu === "rock") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you loser";
        this.count < 1 ? (this.count = 0) : (this.count -= 1);
        counter.innerText = this.count;
      }, 4000);
    }
  }
  DealWithSpock(player, cpu) {
    if (player === "spock" && cpu === "scissors") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you win";
        this.count++;
        counter.innerText = this.count;
      }, 4000);
    } else if (player === "spock" && cpu === "rock") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you win";
        this.count++;
        counter.innerText = this.count;
      }, 4000);
    }
    if (player === "spock" && cpu === "paper") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you loser";
        this.count < 1 ? (this.count = 0) : (this.count -= 1);
        counter.innerText = this.count;
      }, 4000);
    } else if (player === "spock" && cpu === "lizard") {
      setTimeout(() => {
        resultBox.style.display = "flex";
        resultMessage.innerText = "you loser";
        this.count < 1 ? (this.count = 0) : (this.count -= 1);
        counter.innerText = this.count;
      }, 4000);
    }
  }
}

export const match = new Match();
