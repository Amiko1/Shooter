import { Scene } from "phaser";

export class PlayScene extends Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    const map = this.createMap();
    const { wall, floor } = this.createLayer(map);

    console.log(wall, floor);
  }

  createMap() {
    const map = this.make.tilemap({ key: "map" });
    return map;
  }

  createLayer(map: Phaser.Tilemaps.Tilemap) {
    const tileSet = map.addTilesetImage("dungeon", "dungeon");
    const wall = map.createLayer("wall", tileSet as any);
    const floor = map.createLayer("floor", tileSet as any);

    return { wall, floor };
  }
}
