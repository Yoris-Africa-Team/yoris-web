import react from "react";
import styles from "./styles/info.module.css";

function Info() {
   return (
    <div className={styles.infoWrap}>
    <div className={styles.infoContWrap}>
      <p className={styles.infoText}>
        Seamlessly transition between <br />
        <strong>business utilities</strong> with our <br />
        <strong>dynamic</strong> and <strong>innovative</strong>
        <br />
        new app.
      </p>
      <div className={styles.appLinkCont}>
        <img
          className={styles.infoAppLink}
          src={require("../assets/gp.png")}
          alt="play_store_0"
        />
        <img
          className={styles.infoAppLink}
          src={require("../assets/As.png")}
          alt="apple_store_0"
        />
      </div>
    </div>
    <div className={styles.infoPhoneCont}>
      <img className={styles.infoPhoneImg}
        height="100%"
        width="100%"
        src={require("../assets/65968.png")}
        alt="phone_image_0"
      />
    </div>
  </div>
   );
}

export default Info;