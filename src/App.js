import "./main.css";
import GameHeader from "./Components/Game Header/GameHeader";
import GameActionDiv from "./Components/Game Action Div/GameActionDiv";
import PickedDiv from "./Components/User Picked/PickedDiv";
import GameVsDiv from "./Components/User Picked/GameVsDiv";
import React from "react-dom";
import RulesModal, { BackDrop } from "./Components/Game Rules Modal/RulesModal";
import ScoreContext from "./Context/Score-Context";
import { useContext, useState } from "react";

function App() {
  const ctx = useContext(ScoreContext);
  const [showRules, setShowRules] = useState(false);
  const [userPick, setUserPick] = useState("");
  // const [score, setScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);

  let userPicked = userPick === "" ? false : true;

  ctx.toggleRulesHandler = () => {
    setShowRules((prev) => !prev);
  };

  // ctx.addScore = () => {
  //   if (!isGameActive) {
  //     return;
  //   }
  //   setScore(5);
  //   setIsGameActive(false)
  // };

  ctx.playAgainHandler = () => {
    setIsGameActive(false);
    setUserPick("");
  };

  ctx.userPickHandler = (choice) => {
    setIsGameActive(true);
    setUserPick(choice);
  };

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
