// import { useState } from "react";
import GameName from "./GameName";
import ScoreBoard from "./ScoreBoard";
import { motion } from "framer-motion";

function GameHeader() {
  return (
    <motion.div animate={{x: [-300, 0], opacity: [0, 1]}} transition={{type:"spring"}} className="GameHeader">
      <GameName />
      <ScoreBoard />
    </motion.div>
  );
}

export default GameHeader;
