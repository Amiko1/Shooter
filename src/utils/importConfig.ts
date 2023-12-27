export const PLAYER1_PATH =
  "./characters/Full body animated characters/Char 1/no hands";

export const playerConfig = {
  walk: {
    expansion: "png",
    name: "walk_",
    imgNumber: 8,
    getImageNames() {
      return Array.from({ length: 8 }, (_, index) => `${this.name}${index}`);
    },
  },
};
