import react from "react";
import logisticsStyles from "./styles/logistics.module.css";

function Logistics() {
  return (
    <div className={logisticsStyles.logisticsWrap}>
    <img className={logisticsStyles.logisticsImg}
      alt="row_3_image"
      src={require("../assets/65968b.png")}
    />
    <p className={logisticsStyles.logisticsText}>
      Top-notch <strong>logistics</strong>
      <br />
      <strong>services</strong> at the swipe
      <br />
      of a finger.
    </p>
  </div>
 
  );
}

export default Logistics;