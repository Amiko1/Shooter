import { PlayerImportType } from "../../../types";
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

const playerImports: PlayerImportType[] = [
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
    directions: DIRECTIONS,
    expansion: EXPANSION,
  },
];

export default playerImports;
