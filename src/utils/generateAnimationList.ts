export default function generateAnimationList(
  key: string,
  label: string,
  start: number,
  end: number,
  direction: string
) {
  return {
    key: `player-${key}-${direction}-${label}`,
    frameKey: `${key}-${direction}`,
    start: start,
    end: end,
  };
}
