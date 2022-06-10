import react from "react";
import brandStyles from "./styles/brands.module.css";

function Brands() {
    return (
      <div className={brandStyles.brandCont}>
        <img className={brandStyles.brandImg} src={require("../assets/2441-re6.jpeg")} />
        <div className={brandStyles.brandTextCont}>
          <p>
            Connect with your <br />
            favorite <strong>brands</strong> like <br />
            never before on our <br />
            <strong>social platform.</strong>
          </p>
        </div>
      </div>
    );
}

export default Brands;