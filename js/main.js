import { SceneManager } from "./SceneManager.js";
import { IntroScene } from "./scenes/IntroScene.js";
import { GameState } from "./GameState.js";

const game = document.getElementById("game");

const gameState = new GameState();
const sceneManager = new SceneManager(game);

sceneManager.changeScene(new IntroScene(sceneManager, gameState));