import playerImports from "../import/PlayerImport";

const anims = [
  {
    animLabel: "idle",
    frameStart: 0,
    frameEnd: 14,
    playerTypes: ["rifle", "barbedBat"],
    frameRate: 12,
  },
  {
    animLabel: "walk",
    frameStart: 21,
    frameEnd: 22,
    playerTypes: ["rifle", "barbedBat"],
    frameRate: 12,
  },
  {
    animLabel: "run",
    frameStart: 41,
    frameEnd: 52,
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
          key: `player-${playerType}-${direction}-${animLabel}`,
          frameKey: `${playerType}-${direction}`,
        };
      });
  }
);

export default playerAnimRegisters;
