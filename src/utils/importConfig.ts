export const PLAYER_BARBEDBAT_PATH = "./character/barbedBat";
export const PLAYER_RIFLE_PATH = "./character/rifle";
export const PLAYER_UNEQUIPPED_PATH = "./character/unequipped";
import { PlayerImportType } from "../../types";

export const playerConfig = {
  directions: [
    "east",
    "north",
    "northEast",
    "northWest",
    "south",
    "southEast",
    "southWest",
    "west",
  ],
  get imports(): PlayerImportType[] {
    return [
      // {
      //   key: "barbedBat",
      //   path: PLAYER_BARBEDBAT_PATH,
      //   directions: this.directions,
      //   expansion: this.expansion,
      // },

      {
        key: "rifle",
        path: PLAYER_RIFLE_PATH,
        directions: this.directions,
        expansion: this.expansion,
      },
      // {
      //   key: "unequipeed",
      //   path: PLAYER_UNEQUIPPED_PATH,
      //   directions: this.directions,
      //   expansion: this.expansion,
      // },
    ];
  },
  expansion: ".png",
};
