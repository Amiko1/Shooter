import { CollidableType } from "./../../types";
import { Scene } from "phaser";
import Player from "../entities/Player";
import Enemies from "../groups/Enemis";
import { ENEMY_TYPES } from "../beingTypes";
import Goblin from "../entities/Goblin";

export class PlayScene extends Scene {
  enemies: Enemies;
  player: Player;
  constructor() {
    super("PlayScene");
  }

  create() {
    const map = this.createMap();
    const { wallLayer, playerSpawnZoneLayer } = this.createLayer(map);

    const playerSpawnZone = this.getPlayerSpawnZone(playerSpawnZoneLayer);

    this.player = this.createPlayer(playerSpawnZone);

    this.createPlayerColliders(this.player, {
      colliders: {
        wallLayer: wallLayer,
      },
    });
    this.enemies = this.createEnemies();

    this.createEnemyColliders(this.enemies, {
      colliders: {
        platformsColliders: wallLayer,
        player: this.player,
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

    for (let i = 0; i < 10; i++) {
      const randomX = Math.floor(
        Math.random() * (this.game.config.width as number)
      );
      const randomY = Math.floor(Math.random() * -200);
      const enemy = new enemyTypes.Goblin(this, randomX, randomY);
      enemy.setImmovable(true);
      enemies.add(enemy);
    }

    return enemies;
  }

  update() {
    this.enemies.getChildren().forEach((enemy: Goblin) => {
      enemy.moveTo(this.player);
    });
  }

  createEnemyColliders(enemies: Enemies, { colliders }) {
    // @ts-ignore
    enemies.addCollider(colliders.platformsColliders);
    // @ts-ignore
    enemies.addCollider(colliders.player, () => {
      // console.log("HIT");
    });

    this.physics.add.collider(enemies, enemies, () => {
      console.log("COLLIDER");
    });
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
