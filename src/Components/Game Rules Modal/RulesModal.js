import { useContext } from "react";
import rules_bg from "../../Assets/images/image-rules.svg";
import RulesModalHeader from "./RulesModalHeader";
import ScoreContext from "../../Context/Score-Context";

function RulesModal() {
  return (
    <div className="RulesModal">
      <RulesModalHeader />
      <img src={rules_bg} alt={"rules"}/>
    </div>
  );
}

export function BackDrop() {
  const ctx = useContext(ScoreContext)

  return <div className="backdrop" onClick={ctx.toggleRulesHandler}></div>;
}

export default RulesModal;
