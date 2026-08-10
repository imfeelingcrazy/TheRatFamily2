export class SceneManager {

    constructor(container) {
        
        this.container = container;
        this.currentScene = null;
    }

    changeScene(scene) {

        if (this.currentScene) {
            this.currentScene.exit();
        }

        this.container.innerHTML = "";

        this.currentScene = scene;

        this.currentScene.enter(this.container);
    }
}