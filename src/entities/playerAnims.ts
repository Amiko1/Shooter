import { playerConfig } from "../utils/importConfig";

const { walk, idle } = playerConfig;

export default (anims: Phaser.Animations.AnimationState) => {
  anims.create({
    key: "walk",
    frames: walk.getImageNames().map((name) => {
      return { key: name };
    }),
    frameRate: 6,
    repeat: 1,
  });

  anims.create({
    key: "idle",
    frames: idle.getImageNames().map((name) => {
      console.log(name);
      return { key: name };
    }),
    frameRate: 6,
    repeat: 1,
  });
};
