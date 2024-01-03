import Phaser from "phaser";
import collidable from "../mixins/collidable";
import { ENEMY_TYPES } from "../beingTypes";
class Enemies extends Phaser.GameObjects.Group {
  constructor(scene) {
    super(scene);

    Object.assign(this, collidable);
  }

  getTypes() {
    return ENEMY_TYPES;
  }
}

export default Enemies;
