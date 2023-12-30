import { PLAYER_RIFLE_PATH, PLAYER_BARBEDBAT_PATH } from "../assetPaths";

const DIRECTIONS = [
  "east",
  "north",
  "northEast",
  "northWest",
  "south",
  "southEast",
  "southWest",
  "west",
];

const WIDTH = 4840;
const HEIGHT = 3233;
const EXPANSION = ".png";

const playerTypes = [
  {
    playerType: "barbedBat",
    path: PLAYER_BARBEDBAT_PATH,
    frameWidth: WIDTH / 20,
    frameHeight: HEIGHT / 11,
  },
  {
    playerTyp: "rifle",
    frameWidth: WIDTH / 20,
    frameHeight: HEIGHT / 11,
    path: PLAYER_RIFLE_PATH,
  },
];

const playerImports = playerTypes.flatMap(
  ({ playerType, frameHeight, frameWidth, path }) => {
    return DIRECTIONS.map((direction) => {
      return {
        playerType,
        frameHeight,
        frameWidth,
        path,
        direction,
        expansion: EXPANSION,
      };
    });
  }
);

export default playerImports;
