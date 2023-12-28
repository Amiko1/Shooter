export const PLAYER1_PATH =
  "./characters/Full body animated characters/Char 1/no hands";

export const LEFT_HAND_PATH =
  "./characters/Animated body parts/Left hands/handL1";

export const RIGHT_HAND_PATH =
  "./characters/Animated body parts/Right hands/handR1";

export const playerConfig = {
  key: "player",
  walk: {
    expansion: "png",
    name: "walk_",
    imgNumber: 8,
    getImageNames() {
      return Array.from(
        { length: this.imgNumber },
        (_, index) => `${this.name}${index}`
      );
    },
  },

  idle: {
    expansion: "png",
    name: "idle_",
    imgNumber: 6,
    getImageNames() {
      return Array.from(
        { length: this.imgNumber },
        (_, index) => `${this.name}${index}`
      );
    },
  },
};
