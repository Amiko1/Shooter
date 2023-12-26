import { Scene } from "phaser";

export class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.tilemapTiledJSON("map", "./game.json");
    this.load.image("dungeon", "./dungeon.png");
    this.load.image(
      "player",
      "./characters/Full body animated characters/Char 1/no hands/idle_0.png"
    );
  }

  create() {
    this.scene.start("PlayScene");
  }
}
