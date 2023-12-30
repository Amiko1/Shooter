import { PLAYER_RIFLE_PATH } from "../assetPaths";

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
  // {
  //   key: "barbedBat",
  //   path: PLAYER_BARBEDBAT_PATH,
  //   directions: this.directions,
  //   expansion: this.expansion,
  // },
  {
    key: "rifle",
    frameWidth: WIDTH / 20,
    frameHeight: HEIGHT / 11,
    path: PLAYER_RIFLE_PATH,
  },
];

const playerImports = playerTypes.flatMap(
  ({ key, frameHeight, frameWidth, path }) => {
    return DIRECTIONS.map((direction) => {
      return {
        key,
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
