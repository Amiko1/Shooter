import playerAnimRegisters from "../configs/anims/PlayerAnimsRegister";

export const playerAnims = (anims: Phaser.Animations.AnimationState) => {
  // anims.create({
  //   key: "walk",
  //   frames: walk.getImageNames().map((name) => {
  //     return { key: `${playerKey}-${name}` };
  //   }),
  //   frameRate: 12,
  //   repeat: 1,
  // });
  playerAnimRegisters.forEach(({ key, frameKey, frameStart, frameEnd }) => {
    anims.create({
      key: key,
      frames: anims.generateFrameNames(`${frameKey}`, {
        start: frameStart,
        end: frameEnd,
      }),
      frameRate: 12,
      repeat: 1,
    });
  });
};

console.log(playerAnimRegisters);
