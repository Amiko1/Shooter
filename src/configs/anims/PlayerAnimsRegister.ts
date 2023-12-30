import playerImports from "../import/PlayerImport";

const anims = [
  {
    animLabel: "idle",
    frameStart: 0,
    frameEnd: 14,
    includs: ["rifle", "barbedBat"],
    frameRate: 12,
  },
  {
    animLabel: "walk",
    frameStart: 21,
    frameEnd: 22,
    includs: ["rifle", "barbedBat"],
    frameRate: 12,
  },
  {
    animLabel: "run",
    frameStart: 41,
    frameEnd: 52,
    includs: ["rifle", "barbedBat"],
    frameRate: 12,
  },
];

const playerAnimRegisters = playerImports.flatMap(({ key, direction }) => {
  return anims
    .filter((anim) => anim.includs.includes(key))
    .map(({ frameStart, frameEnd, frameRate, animLabel }) => {
      return {
        frameStart: frameStart,
        frameEnd: frameEnd,
        frameRate: frameRate,
        direction: direction,
        key: `player-${key}-${direction}-${animLabel}`,
        frameKey: `${key}-${direction}`,
      };
    });
});

export default playerAnimRegisters;
