import Phaser from "phaser";

export type CollidableType = Phaser.Tilemaps.TilemapLayer &
  Phaser.GameObjects.GameObject;
