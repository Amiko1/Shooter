import Phaser from "phaser";

export type CollidableType = Phaser.Tilemaps.TilemapLayer &
  Phaser.GameObjects.GameObject;

export interface PlayerImportType {
  key: string;
  path: string;
  directions: string[];
  expansion: string;
}
