import React, { useCallback, useContext, useEffect, useState } from "react";
import GameChoice from "../Game Action Div/GameChoice";
import ResultDiv from "../Game Result Div/ResultDiv";
import ScoreContext from "../../Context/Score-Context";

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
    <div className="GameVsDiv">
      <GameChoice type={ctx.userPick} />
      {showResult && (
        <>
          {showActualResultTime && (
            <ResultDiv userChoice={ctx.userPick} houseChoice={housePick} />
          )}
          <GameChoice type={housePick} />
        </>
      )}
      {!showResult && <GameChoice type={"empty"} />}
    </div>
  );
}

export default GameVsDiv;
