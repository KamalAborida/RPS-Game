import GameChoice from "./GameChoice";
import tri_bg from "../../Assets/images/bg-triangle.svg";
import { useContext } from "react";
import ScoreContext from "../../Context/Score-Context";
import { motion } from "framer-motion";

function GameActionDiv() {
  const ctx = useContext(ScoreContext);

  const pickHandler = (e) => {
    ctx.userPickHandler(e.target.closest(".GameChoice").id);
    ctx.userPick = e.target.closest(".GameChoice").id;
  };

  return (
    <motion.div animate={{x: [-300, 0], opacity: [0, 1]}} transition={{type:"spring"}} className="GameActionDiv">
      <img className="GameActionDiv__bg" src={tri_bg} alt={"tri"} />
      <GameChoice location="start" type="rock" pickHandler={pickHandler} id="rock" />
      <GameChoice location="start" type="paper" pickHandler={pickHandler} id="paper" />
      <GameChoice location="start" type="scissors" pickHandler={pickHandler} id="scissors" />
    </motion.div>
  );
}

export default GameActionDiv;
