import { useContext, useEffect } from "react";
import ScoreContext from "../../Context/Score-Context";
import { motion } from "framer-motion";

function ResultDiv(props) {
  const ctx = useContext(ScoreContext);
  let result = "";
  let justOneTime = false;    // I use that to only call addScore() once

  if (props.userChoice === "rock") {
    switch (props.houseChoice) {
      case "paper":
        result = "LOSE";
        break;
      case "scissors":
        result = "WIN";
        justOneTime = true;
        break;
      default:
        result = "DRAW";
    }
  } else if (props.userChoice === "paper") {
    switch (props.houseChoice) {
      case "rock":
        result = "WIN";
        justOneTime = true;
        break;
      case "scissors":
        result = "LOSE";
        break;
      default:
        result = "DRAW";
    }
  } else if (props.userChoice === "scissors") {
    switch (props.houseChoice) {
      case "rock":
        result = "LOSE";
        break;
      case "paper":
        result = "WIN";
        justOneTime = true;
        break;
      default:
        result = "DRAW";
    }
  }

  console.log(result);

  // Error
  useEffect(() => {
    if (result === "WIN" && justOneTime) {
      ctx.addScore();
    }
    justOneTime = false;
  }, [result, ctx]);
  // Error

  return (
    <motion.div animate={{opacity: [0, 1]}} transition={{type: "keyframes"}} className="ResultDiv">
      <p className="ResultDiv__result">YOU {result}</p>
      <button className="btn btn-again" onClick={ctx.playAgainHandler}>
        PLAY AGAIN
      </button>
    </motion.div>
  );
}

export default ResultDiv;
