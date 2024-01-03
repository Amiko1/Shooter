import { CollidableType } from "./../../types";
import { Scene } from "phaser";
import Player from "../entities/Player";
import Enemies from "../groups/Enemis";
import { ENEMY_TYPES } from "../beingTypes";

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

    const enemies = this.createEnemies();

    this.createEnemyColliders(enemies, {
      colliders: {
        platformsColliders: wallLayer,
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

  createEnemies() {
    const enemies = new Enemies(this);
    const enemyTypes = ENEMY_TYPES;

    const enemy = new enemyTypes.Goblin(this, 200, 200);

    enemies.add(enemy);

    return enemies;
  }

  createEnemyColliders(enemies, { colliders }) {
    enemies.addCollider(colliders.platformsColliders);
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
