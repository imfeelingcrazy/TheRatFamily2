export class ClickerScene {

    constructor(sceneManager, gameState) {
        this.sceneManager = sceneManager;
        this.gameState = gameState;
    }

    enter(container) {

        this.screen = document.createElement("div");
        this.screen.classList.add("clicker-scene");

        this.chester = document.createElement("img");
        this.chester.src = "assets/images/chester.png";
        this.chester.classList.add("rat");

        this.extortButton = document.createElement("button");
        this.extortButton.classList.add("extort-button");
        this.extortButton.textContent = "EXTORT";

        this.cheeseCounter = document.createElement("div");
        this.cheeseCounter.classList.add("cheese-counter");


        this.screen.appendChild(this.chester);
        this.screen.appendChild(this.extortButton);
        this.screen.appendChild(this.cheeseCounter);

        container.appendChild(this.screen);

        this.updateCheeseDisplay();

        this.extortButton.addEventListener("click", this.extort);
    }

    extort = () => {
        this.gameState.cheese += 1;

        this.updateCheeseDisplay();
    }

    updateCheeseDisplay() {
        this.cheeseCounter.textContent = `Cheese: ${this.gameState.cheese}`;
    }

    exit() {
        this.extortButton.removeEventListener("click", this.extort);
    }
}