import react from "react";
import fintechStyles from './styles/fintech.module.css';

function Fintech() {
    return (
        <div className={fintechStyles.cont}>
        <p className={fintechStyles.textCont}>
          <strong>Fintech</strong> and lots <br />
          more to come.
        </p>        
        <div className={fintechStyles.fintechImgCont}>
        <img className={fintechStyles.fintechImg} src={require("../assets/fintech.png")} />
        </div>
      </div>
    );
}

export default Fintech;