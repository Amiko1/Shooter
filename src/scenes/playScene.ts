import { Scene, GameObjects } from "phaser";

export class GameScene extends Scene {
  private textbox: GameObjects.Text | undefined;

  constructor() {
    super("scene-game");
  }

  preload() {
    this.load.tilemapTiledJSON("map", "./game.json");
    this.load.image("dungeon", "./dungeon.png");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileSet = map.addTilesetImage("dungeon", "dungeon");

    map.createLayer("platform", tileSet as any);
  }

  update(time: number, delta: number) {
    if (!this.textbox) {
      return;
    }

    this.textbox.rotation += 0.0005 * delta;
  }
}
