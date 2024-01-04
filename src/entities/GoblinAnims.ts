import { goblinAnimsRegisters } from "../configs/anims/goblinAnimsRegister";

export const goblinAnims = (anims: Phaser.Animations.AnimationState) => {
  goblinAnimsRegisters.forEach(({ key, frameStart, frameEnd }) => {
    anims.create({
      key: key,
      frames: anims.generateFrameNames("goblin", {
        start: frameStart,
        end: frameEnd,
      }),
      frameRate: 14,
      repeat: -1,
    });
  });
};
