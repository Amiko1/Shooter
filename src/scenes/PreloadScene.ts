import { Scene } from "phaser";
import playerImports from "../configs/import/PlayerImport";
import { GOBLING_PATH } from "../configs/assetPaths";

export class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.tilemapTiledJSON("map", "./game.json");
    this.load.image("dungeon", "./dungeon.png");

    playerImports.forEach(
      ({ direction, frameWidth, frameHeight, playerType, path, expansion }) => {
        console.log(`${playerType}-${direction}`);
        this.load.spritesheet(
          `${playerType}-${direction}`,
          `${path}/${direction}${expansion}`,
          { frameWidth: frameWidth, frameHeight: frameHeight }
        );
      }
    );

    this.load.spritesheet("goblin", GOBLING_PATH, {
      frameWidth: 704 / 11,
      frameHeight: 320 / 5,
      spacing: 1,
    });
  }

  create() {
    this.scene.start("PlayScene");
  }
}
