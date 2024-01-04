import Enemy from "./Enemy";
import { goblinAnims } from "./GoblinAnims";
class Goblin extends Enemy {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "goblin");
    this.init();
  }

  init() {
    goblinAnims(this.anims);
    this.play("moveSouth", true);
  }
}

export default Goblin;
