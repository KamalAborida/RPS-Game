import GameChoice from "./GameChoice";
import tri_bg from "../../Assets/images/bg-triangle.svg";
import { useContext } from "react";
import ScoreContext from "../../Context/Score-Context";

function GameActionDiv() {
  const ctx = useContext(ScoreContext);

  const pickHandler = (e) => {
    ctx.userPickHandler(e.target.closest(".GameChoice").id);
    ctx.userPick = e.target.closest(".GameChoice").id;
  };

  return (
    <div className="GameActionDiv">
      <img className="GameActionDiv__bg" src={tri_bg} alt={"tri"} />
      <GameChoice type="rock" pickHandler={pickHandler} id="rock" />
      <GameChoice type="paper" pickHandler={pickHandler} id="paper" />
      <GameChoice type="scissors" pickHandler={pickHandler} id="scissors" />
    </div>
  );
}

export default GameActionDiv;
