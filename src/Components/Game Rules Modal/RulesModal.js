import rules_bg from "../../Assets/images/image-rules.svg";
import RulesModalHeader from "./RulesModalHeader";

function RulesModal() {
  return (
    <div className="RulesModal">
      <RulesModalHeader />
      <img src={rules_bg} alt={"rules"} />
    </div>
  );
}

export function BackDrop() {
  return <div className="backdrop"></div>;
}

export default RulesModal;
