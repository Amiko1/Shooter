import Phaser from "phaser";

import collidable from "../mixins/collidable";
import StateMachine from "../StateMachine";
import { playerAnims, PlayerAnimKeys } from "./playerAnims";
import { States } from "./PlayerStates";
class Player extends Phaser.Physics.Arcade.Sprite {
  private stateMachine: StateMachine;
  playerSpeed!: number;
  states: States;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    Object.assign(this, collidable as any);

    this.init();
    this.initEvents();
  }

  init() {
    this.initStateMachine();
    // const scaleFactor = 0.42;
    // this.setScale(scaleFactor);
    this.setDisplaySize(20, 20);
    // this.body.setSize(this.width / 2, 10);
    // this.setOffset(this.body.offset.x, this.height);
    this.setCollideWorldBounds(true);
    this.playerSpeed = 200;
    playerAnims(this.anims);
    this.play(PlayerAnimKeys.RIFLE_NORTHWEST_WALK, true);
  }

  initStateMachine() {
    this.stateMachine = new StateMachine(this, "player");
    this.stateMachine
      .addState(States.IDLE)
      .addState(States.moveDown, {
        onEnter: this.onMoveDown,
        onExit: this.clearMove,
      })
      .addState(States.moveUp, {
        onEnter: this.onMoveUp,
        onExit: this.clearMove,
      })
      .addState(States.moveLeft, {
        onEnter: this.onMoveLeft,
        onExit: this.clearMove,
      })
      .addState(States.moveRight, {
        onEnter: this.onMoveRight,
        onExit: this.clearMove,
      })
      .addState(States.moveUpLeft, {
        onEnter: this.moveUpLeft,
        onExit: this.clearMove,
      })
      .addState(States.moveUpRight, {
        onEnter: this.moveUpRight,
        onExit: this.clearMove,
      })
      .addState(States.moveDownLeft, {
        onEnter: this.moveDownLeft,
        onExit: this.clearMove,
      })
      .addState(States.moveDownRight, {
        onEnter: this.moveDownRight,
        onExit: this.clearMove,
      });
  }

  onMoveDown() {
    this.setVelocityY(this.playerSpeed);
    this.anims.play(PlayerAnimKeys.RIFLE_SOUTH_WALK, true);
  }

  onMoveUp() {
    this.setVelocityY(-this.playerSpeed);
    this.anims.play(PlayerAnimKeys.RIFLE_NORTH_WALK, true);
  }

  onMoveLeft() {
    this.setVelocityX(-this.playerSpeed);
    this.anims.play(PlayerAnimKeys.RIFLE_WEST_WALK, true);
  }

  onMoveRight() {
    this.setVelocityX(this.playerSpeed);
    this.anims.play(PlayerAnimKeys.RIFLE_EAST_WALK, true);
  }

  moveUpLeft() {
    this.setVelocityY(-this.playerSpeed);
    this.setVelocityX(-this.playerSpeed);
    this.anims.play(PlayerAnimKeys.RIFLE_NORTHWEST_WALK, true);
  }

  moveUpRight() {
    this.setVelocityY(-this.playerSpeed);
    this.setVelocityX(this.playerSpeed);
    this.anims.play(PlayerAnimKeys.RIFLE_NORTHEAST_WALK, true);
  }

  moveDownLeft() {
    this.setVelocityY(this.playerSpeed);
    this.setVelocityX(-this.playerSpeed);
    this.anims.play(PlayerAnimKeys.RIFLE_SOUTHWEST_WALK, true);
  }

  moveDownRight() {
    this.setVelocityY(this.playerSpeed);
    this.setVelocityX(this.playerSpeed);
    this.anims.play(PlayerAnimKeys.RIFLE_SOUTHEAST_WALK, true);
  }

  clearMove() {
    this.setVelocityY(0);
    this.setVelocityX(0);
  }

  initEvents() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  update() {
    this.handlePlayerInput();
    this.handleAnimationSwitch();
    // this.handleAiming();
  }

  // handleAiming() {
  //   const pointer = this.scene.input.activePointer;

  //   // Calculate angle between player and pointer
  //   const angle = Phaser.Math.Angle.Between(
  //     this.x,
  //     this.y,
  //     pointer.worldX,
  //     pointer.worldY
  //   );

  //   // Set player rotation
  //   this.setRotation(angle);
  // }

  handlePlayerInput() {
    const { left, right, down, up } =
      this.scene.input.keyboard.createCursorKeys();
    // @ts-ignore
    const { W, A, S, D } = this.scene.input.keyboard.addKeys("W,A,S,D");

    // Handle horizontal movement
    switch (true) {
      case (left.isDown && up.isDown) || (A.isDown && W.isDown):
        this.states = States.moveUpLeft;
        break;
      case (right.isDown && up.isDown) || (D.isDown && W.isDown):
        this.states = States.moveUpRight;
        break;
      case (left.isDown && down.isDown) || (A.isDown && S.isDown):
        this.states = States.moveDownLeft;
        break;
      case (right.isDown && down.isDown) || (D.isDown && S.isDown):
        this.states = States.moveDownRight;
        break;
      case left.isDown || A.isDown:
        this.states = States.moveLeft;
        break;
      case right.isDown || D.isDown:
        this.states = States.moveRight;
        break;
      case up.isDown || W.isDown:
        this.states = States.moveUp;
        break;
      case down.isDown || S.isDown:
        this.states = States.moveDown;
        break;
      default:
        this.states = null;
        this.clearMove();
    }
    this.stateMachine.setState(this.states);
  }

  handleAnimationSwitch() {
    if (
      (this.body as Phaser.Physics.Arcade.Body).velocity.x !== 0 ||
      (this.body as Phaser.Physics.Arcade.Body).velocity.y !== 0
    ) {
      // this.play("walk", true);
    } else {
      // this.play("idle", true);
    }
  }
}

export default Player;
