import { Scene } from "phaser";

export class PlayScene extends Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    this.createMap();
  }

  createMap() {
    const map = this.make.tilemap({ key: "map" });
    const tileSet = map.addTilesetImage("dungeon", "dungeon");
    map.createLayer("platform", tileSet as any);
  }
}
