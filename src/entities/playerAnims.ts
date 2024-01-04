import playerAnimRegisters from "../configs/anims/PlayerAnimsRegister";

export const playerAnims = (anims: Phaser.Animations.AnimationState) => {
  playerAnimRegisters.forEach(
    ({ key, frameKey, frameStart, frameEnd, frameRate }) => {
      anims.create({
        key: key,
        frames: anims.generateFrameNames(`${frameKey}`, {
          start: frameStart,
          end: frameEnd,
        }),
        frameRate: frameRate,
        repeat: -1,
      });
    }
  );
};

export enum PlayerAnimKeys {
  RIFLE_NORTH_STANDSHOOT = "rifle-north-standShoot",
  RIFLE_NORTH_SHOOT = "rifle-north-shoot",
  RIFLE_NORTH_RUN = "rifle-north-run",

  RIFLE_NORTHEAST_STANDSHOOT = "rifle-northEast-standShoot",
  RIFLE_NORTHEAST_SHOOT = "rifle-northEast-shoot",
  RIFLE_NORTHEAST_RUN = "rifle-northEast-run",

  RIFLE_EAST_STANDSHOOT = "rifle-east-standShoot",
  RIFLE_EAST_SHOOT = "rifle-east-shoot",
  RIFLE_EAST_RUN = "rifle-east-run",

  RIFLE_SOUTHEAST_STANDSHOOT = "rifle-southEast-standShoot",
  RIFLE_SOUTHEAST_SHOOT = "rifle-southEast-shoot",
  RIFLE_SOUTHEAST_RUN = "rifle-southEast-run",

  RIFLE_SOUTH_STANDSHOOT = "rifle-south-standShoot",
  RIFLE_SOUTH_SHOOT = "rifle-south-shoot",
  RIFLE_SOUTH_RUN = "rifle-south-run",

  RIFLE_SOUTHWEST_STANDSHOOT = "rifle-southWest-standShoot",
  RIFLE_SOUTHWEST_SHOOT = "rifle-southWest-shoot",
  RIFLE_SOUTHWEST_RUN = "rifle-southWest-run",

  RIFLE_WEST_STANDSHOOT = "rifle-west-standShoot",
  RIFLE_WEST_SHOOT = "rifle-west-shoot",
  RIFLE_WEST_RUN = "rifle-west-run",

  RIFLE_NORTHWEST_STANDSHOOT = "rifle-northWest-standShoot",
  RIFLE_NORTHWEST_SHOOT = "rifle-northWest-shoot",
  RIFLE_NORTHWEST_RUN = "rifle-northWest-run",
}
