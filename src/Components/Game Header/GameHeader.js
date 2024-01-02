// import { useState } from "react";
import GameName from "./GameName";
import ScoreBoard from "./ScoreBoard";

function GameHeader() {
  return (
    <div className="GameHeader">
      <GameName />
      <ScoreBoard />
    </div>
  );
}

export default GameHeader;
