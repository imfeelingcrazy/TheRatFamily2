export class ClickerScene {

    constructor(sceneManager, gameState) {
        this.sceneManager = sceneManager;
        this.gameState = gameState;
    }

    enter(container) {

        this.screen = document.createElement("div");
        this.screen.classList.add("clicker-scene");

        this.world = document.createElement("div");
        this.world.classList.add("game-world");

        this.background = document.createElement("img");
        this.background.src = "assets/images/clicker-background.png";
        this.background.classList.add("background");

        this.chester = document.createElement("img");
        this.chester.src = "assets/images/chester.png";
        this.chester.classList.add("rat");

        this.extortButton = document.createElement("button");
        this.extortButton.classList.add("extort-button");
        this.extortButton.textContent = "EXTORT";

        this.cheeseCounter = document.createElement("div");
        this.cheeseCounter.classList.add("cheese-counter");

        this.world.appendChild(this.background);
        this.world.appendChild(this.chester);
        this.world.appendChild(this.extortButton);
        this.world.appendChild(this.cheeseCounter);

        this.screen.appendChild(this.world);

        container.appendChild(this.screen);

        this.updateCheeseDisplay();

        this.extortButton.addEventListener("click", this.extort);
    }

    extort = () => {
        this.gameState.cheese += 1;
        this.updateCheeseDisplay();
    }

    updateCheeseDisplay() {
        this.cheeseCounter.textContent =
            `Cheese: ${this.gameState.cheese}`;
    }

    exit() {
        this.extortButton.removeEventListener("click", this.extort);
    }
}