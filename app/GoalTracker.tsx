import { hasCrate, type Puzzle } from "../core/mod.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  const goals = puzzle.layout.goals;
  const filled = goals.filter((goal) => hasCrate(puzzle, goal)).length;
  return <p>Goals Filled: {filled} of {goals.length}</p>;
}
