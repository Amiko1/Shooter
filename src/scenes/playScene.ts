import { CollidableType } from "./../../types";
import { Scene } from "phaser";
import Player from "../entities/Player";

export class PlayScene extends Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    const map = this.createMap();
    const { wallLayer, playerSpawnZoneLayer } = this.createLayer(map);

    const playerSpawnZone = this.getPlayerSpawnZone(playerSpawnZoneLayer);

    const player = this.createPlayer(playerSpawnZone);

    this.createPlayerColliders(player, {
      colliders: {
        wallLayer: wallLayer,
      },
    });
  }

  createMap() {
    const map = this.make.tilemap({ key: "map" });
    return map;
  }

  createLayer(map: Phaser.Tilemaps.Tilemap) {
    const tileSet = map.addTilesetImage("dungeon", "dungeon");
    const wallLayer = map.createLayer("wall", tileSet);
    const floorLayer = map.createLayer("floor", tileSet);
    const playerSpawnZoneLayer = map.getObjectLayer("playerSpawnZone");
    wallLayer.setCollisionByExclusion([-1], true);

    return { wallLayer, floorLayer, playerSpawnZoneLayer };
  }

  createPlayer(spawnZone: Phaser.Types.Tilemaps.TiledObject) {
    const player = new Player(this, spawnZone.x, spawnZone.y);

    return player;
  }

  createPlayerColliders(
    player: Player,
    {
      colliders,
    }: {
      colliders: {
        wallLayer: CollidableType;
      };
    }
  ) {
    // @ts-ignore
    player.addCollider(colliders.wallLayer);
  }
  getPlayerSpawnZone(PlayerSpawnZoneLayer: Phaser.Tilemaps.ObjectLayer) {
    const spawnZoneObjects = PlayerSpawnZoneLayer.objects;
    return spawnZoneObjects[0];
  }
}
