import { useContext, useState } from "react";
import ScoreContext from "../../Context/Score-Context";

function ScoreBoard() {
  const [score, setScore] = useState(0);
  const ctx = useContext(ScoreContext)

  ctx.addScore = () => {
    setScore((prev) => prev + 1);
  }

  return (
    <div className="ScoreBoard">
      <p className="ScoreBoard__title">Score</p>
      <p className="ScoreBoard__score">{score}</p>
    </div>
  );
}

export default ScoreBoard;
