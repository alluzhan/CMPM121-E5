import type { Direction, Position } from "../core/mod.ts";
import type { Controller } from "./controllers.ts";

function findDirection(player: Position, at: Position): Direction | undefined {
  const dx = at.x - player.x;
  const dy = at.y - player.y;
  if (dx === -1 && dy === 0) return "left";
  if (dx === 1 && dy === 0) return "right";
  if (dx === 0 && dy === -1) return "up";
  if (dx === 0 && dy === 1) return "down";

  return undefined;
}

export const clickToMove: Controller = {
  label: "Click a neighboring tile",

  attach(session, board) {
    return board.onTileClick((at) => {
      const player = session.getState().puzzle.player;
      const direction = findDirection(player, at);
      if (direction === undefined) return;
      session.dispatch({ kind: "move", direction });
    });
  },
};
