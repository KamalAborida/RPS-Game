import React, { useCallback, useContext, useEffect, useState } from "react";
import GameChoice from "../Game Action Div/GameChoice";
import ResultDiv from "../Game Result Div/ResultDiv";
import ScoreContext from "../../Context/Score-Context";

function GameVsDiv() {
  const ctx = useContext(ScoreContext);
  const [showResult, setShowResult] = useState(false);
  const [housePick, setHousePick] = useState(false);

  const housePickHandler = useCallback(() => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];

    ctx.housePick = randomChoice;
    setHousePick(randomChoice);
  }, [ctx]);

  useEffect(() => {
    housePickHandler();
    setShowResult(true)
  }, [ctx, housePickHandler]);

  return (
    <div className="GameVsDiv">
      <GameChoice type={ctx.userPick} />
      {showResult && (
        <>
          <ResultDiv />
          <GameChoice type={housePick} />
        </>
      )}
      {!showResult && <GameChoice type={"empty"} />}
    </div>
  );
}

export default GameVsDiv;
