import { Scene } from "phaser";
import { playerConfig, PLAYER1_PATH } from "../utils/importConfig";

const { walk: PlayerWalk, idle: PlayerIdle } = playerConfig;

export class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.tilemapTiledJSON("map", "./game.json");
    this.load.image("dungeon", "./dungeon.png");
    this.load.image("player", `${PLAYER1_PATH}/idle_0.png`);

    PlayerWalk.getImageNames().forEach((name: string) => {
      this.load.image(name, `${PLAYER1_PATH}/${name}.${PlayerWalk.expansion}`);
    });

    PlayerIdle.getImageNames().forEach((name: string) => {
      this.load.image(name, `${PLAYER1_PATH}/${name}.${PlayerIdle.expansion}`);
    });
  }

  create() {
    this.scene.start("PlayScene");
  }
}
