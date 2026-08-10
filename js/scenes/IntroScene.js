import { ClickerScene } from "./ClickerScene.js";

export class IntroScene {

    constructor(sceneManager, gameState) {
        this.sceneManager = sceneManager;
        this.gameState = gameState;
    }

    enter(container) {

        this.screen = document.createElement("div");    
        this.screen.classList.add("intro-scene");

        this.title = document.createElement("h1");
        this.title.textContent =
            "It is not just any rat that can join our Family.";

        this.text1 = document.createElement("p");
        this.text1.textContent =
            "You must first prove yourself to us. Prove your worth.";


        this.text2 = document.createElement("p");

        this.associate = document.createElement("b");
        this.associate.textContent = "associate";

        this.text2.append(
            "We will consider you an ",
            this.associate,
            " for now. You may work for us, under us. " +
            "But you are not a member of the Family. Not yet."
        );


        this.screen.appendChild(this.title);
        this.screen.appendChild(this.text1);
        this.screen.appendChild(this.text2);
        
        container.appendChild(this.screen);

        this.screen.addEventListener("click", this.handleClick);
    }

    handleClick = () => {
        this.sceneManager.changeScene(
            new ClickerScene(this.sceneManager, this.gameState)
        );
    };

    exit() {
        this.screen.removeEventListener("click", this.handleClick);
    }
}