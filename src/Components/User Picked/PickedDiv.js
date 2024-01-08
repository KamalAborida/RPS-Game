// import GameChoice from "./GameChoice";
import { motion } from "framer-motion";

function PickedDiv() {
  return (
    <motion.div
      animate={{ x: [-300, 0], opacity: [0, 1] }}
      transition={{ type: "tween" }}
      className="PickedDiv"
    >
      <p>YOU PICKED</p>
      <p>THE HOUSE PICKED</p>
    </motion.div>
  );
}

export default PickedDiv;
