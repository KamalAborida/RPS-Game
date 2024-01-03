import { useContext, useState } from "react";
import ScoreContext from "../../Context/Score-Context";

function ScoreBoard() {
  const ctx = useContext(ScoreContext);

  return (
    <div className="ScoreBoard">
      <p className="ScoreBoard__title">Score</p>
      <p className="ScoreBoard__score">{ctx.score}</p>
    </div>
  );
}

export default ScoreBoard;
