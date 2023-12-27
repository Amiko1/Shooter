export default {
  addCollider(
    this: Phaser.Physics.Arcade.Sprite & { scene: Phaser.Scene },
    otherGameobject: Phaser.Types.Physics.Arcade.ArcadeColliderType,
    callback: Phaser.Types.Physics.Arcade.ArcadePhysicsCallback
  ) {
    this.scene.physics.add.collider(
      this,
      otherGameobject,
      callback,
      undefined,
      this
    );
  },
};
