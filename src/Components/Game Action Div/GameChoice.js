import rock from "../../Assets/images/icon-rock.svg";
import paper from "../../Assets/images/icon-paper.svg";
import scissors from "../../Assets/images/icon-scissors.svg";

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
    <div className={`GameChoice GameChoice-${props.type}`} onClick={props.pickHandler} id={props.id}>
      {props.type !== "empty" && (
        <div className="GameChoice__whites">
          <img src={icon} alt={`${props.type}`} />
        </div>
      )}
    </div>
  );
}

export default GameChoice;
