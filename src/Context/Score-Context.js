import React from "react";

const ScoreContext = React.createContext({
  score: 0,
  addScore: () => {},
  userPick: "",
  housePick: ""
});

export default ScoreContext;
