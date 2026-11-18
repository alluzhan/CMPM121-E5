import type { Puzzle } from "../core/mod.ts";

export function StatusBar(
  { puzzle, targetMoves }: { puzzle: Puzzle; targetMoves: number },
) {
  return (
    <dl className="status">
      <dt>Level</dt>
      <dd>{puzzle.layout.name}</dd>
      <dt>Moves</dt>
      <dd>{puzzle.moves}</dd>
      <dt>Pushes</dt>
      <dd>{puzzle.pushes}</dd>
      <dt>Target</dt>
      <dd>{targetMoves} moves</dd>
    </dl>
  );
}
