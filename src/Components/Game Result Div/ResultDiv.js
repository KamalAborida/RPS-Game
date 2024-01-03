// import GameChoice from "./GameChoice";

import { useContext } from "react";
import ScoreContext from "../../Context/Score-Context";

function ResultDiv(props) {
  const ctx = useContext(ScoreContext);
  let result = "";

  if (props.userChoice === "rock") {
    switch (props.houseChoice) {
      case "paper":
        result = "LOSE";
        break;
      case "scissors":
        result = "WIN";
        break;
      default:
        result = "DRAW";
    }
  } else if (props.userChoice === "paper") {
    // Logic for userChoice being "paper"
    switch (props.houseChoice) {
      case "rock":
        result = "WIN";
        break;
      case "scissors":
        result = "LOSE";
        break;
      default:
        result = "DRAW";
    }
  } else if (props.userChoice === "scissors") {
    // Logic for userChoice being "scissors"
    switch (props.houseChoice) {
      case "rock":
        result = "LOSE";
        break;
      case "paper":
        result = "WIN";
        break;
      default:
        result = "DRAW";
    }
  }

  if (result === "WIN") {
    ctx.addScore();
  }

  return (
    <div className="ResultDiv">
      <p className="ResultDiv__result">YOU {result}</p>
      <button className="btn btn-again" onClick={ctx.playAgainHandler}>
        PLAY AGAIN
      </button>
    </div>
  );
}

export default ResultDiv;
