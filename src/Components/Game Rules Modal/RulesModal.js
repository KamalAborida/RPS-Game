import { useContext } from "react";
import rules_bg from "../../Assets/images/image-rules.svg";
import RulesModalHeader from "./RulesModalHeader";
import ScoreContext from "../../Context/Score-Context";
import React from "react-dom";
import { motion } from "framer-motion";

function RulesModal() {
  return React.createPortal(
    <motion.div
      animate={{ opacity: [0, 1]}}
      exit={{ opacity: [0.2, 0], y: [0, 600], x: null }}
      transition={{ type: "keyframes" }}
      className="RulesModal"
    >
      <RulesModalHeader />
      <img src={rules_bg} alt={"rules"} />
    </motion.div>,
    document.getElementById("modal")
  );
}

export function BackDrop() {
  const ctx = useContext(ScoreContext);

  return React.createPortal(
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{type: "keyframes", delay: 0.2}}
      className="backdrop"
      onClick={ctx.toggleRulesHandler}
    ></motion.div>,
    document.getElementById("backdrop")
  );
}

export default RulesModal;
