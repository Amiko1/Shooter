import { playerConfig } from "../utils/importConfig";

const { walk, idle, key: playerKey } = playerConfig;

export const playerAnims = (anims: Phaser.Animations.AnimationState) => {
  anims.create({
    key: "walk",
    frames: walk.getImageNames().map((name) => {
      return { key: `${playerKey}-${name}` };
    }),
    frameRate: 12,
    repeat: 1,
  });

  anims.create({
    key: "idle",
    frames: idle.getImageNames().map((name) => {
      console.log(name);
      return { key: `${playerKey}-${name}` };
    }),
    frameRate: 12,
    repeat: 1,
  });
};
