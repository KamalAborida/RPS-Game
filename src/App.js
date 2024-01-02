import "./main.css";
import GameHeader from "./Components/Game Header/GameHeader";
import GameActionDiv from "./Components/Game Action Div/GameActionDiv";
import PickedDiv from "./Components/User Picked/PickedDiv";
import GameVsDiv from "./Components/User Picked/GameVsDiv";
import React from "react-dom";
import RulesModal, { BackDrop } from "./Components/Game Rules Modal/RulesModal";
import ScoreContext from "./Context/Score-Context";
import { useContext, useEffect, useState } from "react";

function App() {
  const ctx = useContext(ScoreContext);
  const [showRules, setShowRules] = useState(false);
  const [userPicked, setUserPicked] = useState(false);

  // console.log(ctx);

  useEffect(() => {
    console.log("ctx changed");
    if (ctx.userPick !== "") {
      setUserPicked(true);
    } else {
      setUserPicked(false);
    }
  }, [ctx.userPick]);

  const toggleRulesHandler = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <div className="App">
      <div className="GameContainer">
        <GameHeader />
        {!userPicked && <GameActionDiv />}
        {userPicked && <PickedDiv />}
        {userPicked && <GameVsDiv />}
        <button className="btn btn-rules" onClick={toggleRulesHandler}>
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
