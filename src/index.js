import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScoreContext from "./Context/Score-Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ScoreContext.Provider
    value={{
      score: localStorage.getItem("score") || 0,
      addScore: () => {},
      userPick: "",
      housePick: "",
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ScoreContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
