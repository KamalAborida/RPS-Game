import rock from "../../Assets/images/icon-rock.svg";
import paper from "../../Assets/images/icon-paper.svg";
import scissors from "../../Assets/images/icon-scissors.svg";
import { motion } from "framer-motion";

function GameChoice(props) {
  let icon = "";

  switch (props.type) {
    case "rock":
      icon = rock;
      break;

    case "paper":
      icon = paper;
      break;

    case "scissors":
      icon = scissors;
      break;

    case "empty":
      icon = "";
      break;

    default:
      break;
  }

  return (
    <motion.div
      whileHover={
        props.location === "start"
          ? { cursor: "pointer", boxShadow: "0 2px 1px 24px rgba(255, 255, 255, 0.132)", rotateZ: 45 }
          : { cursor: "unset" }
      }
      className={`GameChoice GameChoice-${props.type}`}
      onClick={props.pickHandler}
      id={props.id}
    >
      {props.type !== "empty" && (
        <div className="GameChoice__whites">
          <img src={icon} alt={`${props.type}`} />
        </div>
      )}
    </motion.div>
  );
}

export default GameChoice;
