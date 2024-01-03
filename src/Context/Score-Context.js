import React from "react";

const ScoreContext = React.createContext({
  score: 0,
  addScore: () => {},
  userPick: "",
  userPickHandler: () => {},
  playAgainHandler: () => {},
  toggleRulesHandler: () => {}
});

export default ScoreContext;
