import "./main.css";
import GameHeader from "./Components/Game Header/GameHeader";
import GameActionDiv from "./Components/Game Action Div/GameActionDiv";
import PickedDiv from "./Components/User Picked/PickedDiv";
import GameVsDiv from "./Components/User Picked/GameVsDiv";
import React from "react-dom";
import RulesModal, { BackDrop } from "./Components/Game Rules Modal/RulesModal";
import ScoreContext from "./Context/Score-Context";
import { useCallback, useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const ctx = useContext(ScoreContext);
  const [showRules, setShowRules] = useState(false);
  const [userPick, setUserPick] = useState("");
  const [score, setScore] = useState(0);

  let userPicked = userPick === "" ? false : true;

  ctx.toggleRulesHandler = () => {
    setShowRules((prev) => !prev);
  };

  ctx.addScore = useCallback(() => {
    setScore((prev) => {
      console.log("prev", prev);
      ctx.score = prev + 1;
      return prev + 1;
    });
  }, [ctx]);

  ctx.playAgainHandler = () => {
    setUserPick("");
  };

  ctx.userPickHandler = (choice) => {
    setUserPick(choice);
  };

  // ctx.addScore()

  return (
    <div className="App">
      <div className="GameContainer">
        <GameHeader />
        {!userPicked && <GameActionDiv />}
        {userPicked && <PickedDiv />}
        {userPicked && <GameVsDiv />}
        <button className="btn btn-rules" onClick={ctx.toggleRulesHandler}>
          RULES
        </button>
        {showRules &&
          React.createPortal(<BackDrop />, document.getElementById("backdrop"))}
        {showRules &&
          React.createPortal(<RulesModal />, document.getElementById("modal"))}
      </div>
    </div>
  );
}

export default App;
