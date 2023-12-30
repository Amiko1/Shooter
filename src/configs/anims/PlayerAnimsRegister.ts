import { PlayerImportType } from "../../../types";
import playerImports from "../import/PlayerImport";
import generateAnimationList from "../../utils/generateAnimationList";

const anims = [
  { label: "idle", start: 0, end: 14, includs: ["rifle", "barbedBat"] },
  { label: "walk", start: 21, end: 22, includs: ["rifle", "barbedBat"] },
  { label: "run", start: 41, end: 52, includs: ["rifle", "barbedBat"] },
];

export const getPlayerAnimconfig = () => {
  return playerImports.flatMap((playerImport: PlayerImportType) => {
    return playerImport.directions.flatMap((direction: string) => {
      return anims
        .filter((anim) => anim.includs.includes(playerImport.key))
        .map((anim) =>
          generateAnimationList(
            playerImport.key,
            anim.label,
            anim.start,
            anim.end,
            direction
          )
        );
    });
  });
};

const playerAnimRegisters = getPlayerAnimconfig();

export default playerAnimRegisters;
