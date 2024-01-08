import React, { useCallback, useContext, useEffect, useState } from "react";
import GameChoice from "../Game Action Div/GameChoice";
import ResultDiv from "../Game Result Div/ResultDiv";
import ScoreContext from "../../Context/Score-Context";
import { AnimatePresence, motion } from "framer-motion";

function GameVsDiv() {
  const ctx = useContext(ScoreContext);
  const [showResult, setShowResult] = useState(false);
  const [housePick, setHousePick] = useState(false);
  const [showActualResultTime, setShowActualResultTime] = useState(false);

  const housePickHandler = useCallback(() => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];

    setHousePick(randomChoice);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowResult(true);
      housePickHandler();
    }, 1500);

    const timeoutId2 = setTimeout(() => {
      setShowActualResultTime(true);
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, [housePickHandler]);

  return (
    <motion.div animate={{x: [300, 0], opacity: [0, 1]}} transition={{type: "tween"}} className="GameVsDiv">
      <GameChoice type={ctx.userPick} />
      {showResult && showActualResultTime && (
        <ResultDiv userChoice={ctx.userPick} houseChoice={housePick} />
      )}
      <motion.div animate={{ opacity: [0, 1] }}>
        <GameChoice type={!showResult ? "empty" : housePick} />
      </motion.div>
    </motion.div>
  );
}

export default GameVsDiv;
