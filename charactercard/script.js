const levelDisplay = document.querySelector("#levelDisplay");
const healthDisplay = document.querySelector("#healthDisplay");

const card = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 1,
  health: 100,
  attacked() {                 // method
    this.health -= 20;
    healthDisplay.textContent = `Health: ${this.health}`;
    console.log("attacked");
    if (this.health <= 0)
    {
        alert("Character Died");
    }
  },
  levelUp() {                 // method
    this.level += 1;
    levelDisplay.textContent = `Level: ${this.level}`;
    console.log("leveled up");
  }
};

const attackedButton = document.querySelector("#attacked");
const levelUpButton = document.querySelector("#levelUp");

attackedButton.addEventListener("click", () => card.attacked());
levelUpButton.addEventListener("click", () => card.levelUp());