import playerImports from "../import/PlayerImport";
import generateAnimationList from "../../utils/generateAnimationList";

const anims = [
  { label: "idle", start: 0, end: 14, includs: ["rifle", "barbedBat"] },
  { label: "walk", start: 21, end: 22, includs: ["rifle", "barbedBat"] },
  { label: "run", start: 41, end: 52, includs: ["rifle", "barbedBat"] },
];

const playerAnimRegisters = playerImports.flatMap((playerImport) => {
  return anims
    .filter((anim) => anim.includs.includes(playerImport.key))
    .map((anim) =>
      generateAnimationList(
        playerImport.key,
        anim.label,
        anim.start,
        anim.end,
        playerImport.direction
      )
    );
});

export default playerAnimRegisters;
