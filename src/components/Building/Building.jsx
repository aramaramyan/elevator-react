import buildingPNG from "./../../img/building.png";
import "./Building.css";

export default function Building({ state }) {

  return (
    <div className="building_wrapper">
      <img src={buildingPNG} alt="Building Image" />
      <div className="black_bg" />
      <div className={`elevator fl${state.floor}`}/>
    </div>
  );
}