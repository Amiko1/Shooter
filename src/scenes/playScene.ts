import { Scene } from "phaser";
import Player from "../entities/Player";

export class PlayScene extends Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    const map = this.createMap();
    const { wall, floor } = this.createLayer(map);

    const player = this.createPlayer();

    // @ts-ignore
    wall && player.addCollider(wall);
  }

  createMap() {
    const map = this.make.tilemap({ key: "map" });
    return map;
  }

  createLayer(map: Phaser.Tilemaps.Tilemap) {
    const tileSet = map.addTilesetImage("dungeon", "dungeon");
    const wall = map.createLayer("wall", tileSet as any);
    const floor = map.createLayer("floor", tileSet as any);

    wall?.setCollisionByExclusion([-1], true);

    return { wall, floor };
  }

  createPlayer() {
    const player = new Player(this, 100, 250);

    return player;
  }
}
