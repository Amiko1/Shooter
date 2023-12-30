import { Scene } from "phaser";
import playerImports from "../configs/import/PlayerImport";

import { PlayerImportType } from "./../../types";

export class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.tilemapTiledJSON("map", "./game.json");
    this.load.image("dungeon", "./dungeon.png");

    playerImports.forEach((playerImport: PlayerImportType) => {
      playerImport.directions.forEach((direction) => {
        this.load.image(
          `${playerImport.key}-${direction}`,
          `${playerImport.path}/${direction}${playerImport.expansion}`
        );
      });
    });
  }

  create() {
    this.scene.start("PlayScene");
  }
}
