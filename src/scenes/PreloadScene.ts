import { Scene } from "phaser";
import playerImports from "../configs/import/PlayerImport";

export class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.tilemapTiledJSON("map", "./game.json");
    this.load.image("dungeon", "./dungeon.png");

    playerImports.forEach(
      ({ direction, frameWidth, frameHeight, key, path, expansion }) => {
        this.load.spritesheet(
          `${key}-${direction}`,
          `${path}/${direction}${expansion}`,
          { frameWidth: frameWidth, frameHeight: frameHeight }
        );
      }
    );
  }

  create() {
    this.scene.start("PlayScene");
  }
}
