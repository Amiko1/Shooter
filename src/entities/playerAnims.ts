import playerAnimRegisters from "../configs/anims/PlayerAnimsRegister";

export const playerAnims = (anims: Phaser.Animations.AnimationState) => {
  playerAnimRegisters.forEach(({ key, frameKey, frameStart, frameEnd }) => {
    anims.create({
      key: key,
      frames: anims.generateFrameNames(`${frameKey}`, {
        start: frameStart,
        end: frameEnd,
      }),
      frameRate: 12,
      repeat: -1,
    });
  });
};

export enum PlayerAnimKeys {
  RIFLE_NORTH_IDLE = "rifle-north-idle",
  RIFLE_NORTH_WALK = "rifle-north-walk",
  RIFLE_NORTH_RUN = "rifle-north-run",

  RIFLE_NORTHEAST_IDLE = "rifle-northEast-idle",
  RIFLE_NORTHEAST_WALK = "rifle-northEast-walk",
  RIFLE_NORTHEAST_RUN = "rifle-northEast-run",

  RIFLE_EAST_IDLE = "rifle-east-idle",
  RIFLE_EAST_WALK = "rifle-east-walk",
  RIFLE_EAST_RUN = "rifle-east-run",

  RIFLE_SOUTHEAST_IDLE = "rifle-southEast-idle",
  RIFLE_SOUTHEAST_WALK = "rifle-southEast-walk",
  RIFLE_SOUTHEAST_RUN = "rifle-southEast-run",

  RIFLE_SOUTH_IDLE = "rifle-south-idle",
  RIFLE_SOUTH_WALK = "rifle-south-walk",
  RIFLE_SOUTH_RUN = "rifle-south-run",

  RIFLE_SOUTHWEST_IDLE = "rifle-southWest-idle",
  RIFLE_SOUTHWEST_WALK = "rifle-southWest-walk",
  RIFLE_SOUTHWEST_RUN = "rifle-southWest-run",

  RIFLE_WEST_IDLE = "rifle-west-idle",
  RIFLE_WEST_WALK = "rifle-west-walk",
  RIFLE_WEST_RUN = "rifle-west-run",

  RIFLE_NORTHWEST_IDLE = "rifle-northWest-idle",
  RIFLE_NORTHWEST_WALK = "rifle-northWest-walk",
  RIFLE_NORTHWEST_RUN = "rifle-northWest-run",
}
