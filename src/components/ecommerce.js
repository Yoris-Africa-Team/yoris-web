import react from "react";
import ecommerceStyles from "./styles/ecommerce.module.css";

function Ecommerce() {
    return (
        <div className={ecommerceStyles.cont}>
        
        <img className={ecommerceStyles.ecommerceImg}
        alt="row_4_image"
        src={require("../assets/2441b.png")}
        />
       
        <div className={ecommerceStyles.textCont}>
          <p>
            Experience an
            <br />
            <strong>e-commerce</strong> platform
            <br />
            housing only <strong>expert</strong>
            <br />
            <strong>curated brands,</strong> goods <br />
            and services
          </p>
        </div>
        <div></div>
      </div>
    );
}

export default Ecommerce;