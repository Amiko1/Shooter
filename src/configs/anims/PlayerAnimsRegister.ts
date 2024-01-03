import playerImports from "../import/PlayerImport";

const anims = [
  {
    animLabel: "idle",
    frameStart: 0,
    frameEnd: 13,
    playerTypes: ["rifle", "barbedBat"],
    frameRate: 12,
  },
  {
    animLabel: "walk",
    frameStart: 20,
    frameEnd: 30,
    playerTypes: ["rifle", "barbedBat"],
    frameRate: 12,
  },
  {
    animLabel: "run",
    frameStart: 40,
    frameEnd: 50,
    playerTypes: ["rifle", "barbedBat"],
    frameRate: 12,
  },
  {
    animLabel: "shoot",
    frameStart: 80,
    frameEnd: 90,
    playerTypes: ["rifle", "barbedBat"],
    frameRate: 12,
  },
  {
    animLabel: "standShoot",
    frameStart: 60,
    frameEnd: 66,
    playerTypes: ["rifle", "barbedBat"],
    frameRate: 12,
  },
];
const playerAnimRegisters = playerImports.flatMap(
  ({ playerType, direction }) => {
    return anims
      .filter((anim) => anim.playerTypes.includes(playerType))
      .map(({ frameStart, frameEnd, frameRate, animLabel }) => {
        return {
          frameStart: frameStart,
          frameEnd: frameEnd,
          frameRate: frameRate,
          direction: direction,
          key: `${playerType}-${direction}-${animLabel}`,
          frameKey: `${playerType}-${direction}`,
        };
      });
  }
);

export default playerAnimRegisters;
