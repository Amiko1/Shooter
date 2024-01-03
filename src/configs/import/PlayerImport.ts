import { PLAYER_RIFLE_PATH, PLAYER_BARBEDBAT_PATH } from "../assetPaths";

const DIRECTIONS = [
  { direction: "east", width: 4020, height: 1969 },
  { direction: "north", width: 4820, height: 2486 },
  { direction: "northEast", width: 4440, height: 2288 },
  { direction: "northWest", width: 3920, height: 2882 },
  { direction: "south", width: 4840, height: 2332 },
  { direction: "southEast", width: 3940, height: 1826 },
  { direction: "southWest", width: 4460, height: 2827 },
  { direction: "west", width: 4020, height: 3234 },
];

const EXPANSION = ".png";

const playerTypes = [
  // {
  //   playerType: "barbedBat",
  //   path: PLAYER_BARBEDBAT_PATH,
  //   frameWidth: WIDTH / 20,
  //   frameHeight: HEIGHT / 11,
  // },
  {
    playerType: "rifle",
    path: PLAYER_RIFLE_PATH,
  },
];

const playerImports = playerTypes.flatMap(({ playerType, path }) => {
  return DIRECTIONS.map(({ direction, width, height }) => {
    return {
      playerType,
      frameHeight: height / 11,
      frameWidth: width / 20,
      path,
      direction: direction,
      expansion: EXPANSION,
    };
  });
});

export default playerImports;
