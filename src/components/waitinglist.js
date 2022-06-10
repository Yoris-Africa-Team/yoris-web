import react from "react";
import waitingListStyles from "./styles/waitingList.module.css";

function WaitingList(props) {
    // reassign props
    return (
        <div className={waitingListStyles.cont}>
        <div className={waitingListStyles.titleCont}>JOIN OUR WAITLIST</div>
        <div className={waitingListStyles.formCont} id="waitingList">
          <div className={waitingListStyles.formRow}>
            <input
              value={props.firstName}
              onChange={props.handleChange("firstName")}
              className={waitingListStyles.formInput}
              placeholder="First name"
            />
            <input
              value={props.surname}
              onChange={props.handleChange("surname")}
              className={waitingListStyles.formInput}
              placeholder="Surname"
            />
          </div>
          {/* formContRow2 */}
          <div className={waitingListStyles.formRow}>
            <input
              value={props.phone}
              onChange={props.handleChange("phone")}
              placeholder="Phone number"
              className={waitingListStyles.formInput}
            />
            <input
              value={props.email}
              onChange={props.handleChange("email")}
              placeholder="email"
              className={waitingListStyles.formInput}
            />
          </div>
          <div className={waitingListStyles.formRow}>
            <input className={waitingListStyles.sourceInput}
              value={props.source}
              onChange={props.handleChange("source")}
              placeholder="How did you hear about us?"
            />
            <div className={waitingListStyles.submitBtn} onClick={props.joinList}>
              <img src={require('../assets/Arrow 1.png')}  className={waitingListStyles.submitBtnImg} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default WaitingList;
// so you only define data in the scope where you need the
// the data