import { Scene } from "phaser";
import {
  playerConfig,
  PLAYER1_PATH,
  LEFT_HAND_PATH,
  RIGHT_HAND_PATH,
} from "../utils/importConfig";

const { walk: PlayerWalk, idle: PlayerIdle, key: playerKey } = playerConfig;

export class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.tilemapTiledJSON("map", "./game.json");
    this.load.image("dungeon", "./dungeon.png");
    this.load.image("player", `${PLAYER1_PATH}/idle_0.png`);

    PlayerWalk.getImageNames().forEach((name: string) => {
      this.load.image(
        `${playerKey}-${name}`,
        `${PLAYER1_PATH}/${name}.${PlayerWalk.expansion}`
      );
    });

    PlayerIdle.getImageNames().forEach((name: string) => {
      this.load.image(
        `${playerKey}-${name}`,
        `${PLAYER1_PATH}/${name}.${PlayerIdle.expansion}`
      );
    });

    this.load.image("leftHand", `${LEFT_HAND_PATH}/hand.png`);
    this.load.image("rightHand", `${RIGHT_HAND_PATH}/hand.png`);
  }

  create() {
    this.scene.start("PlayScene");
  }
}
