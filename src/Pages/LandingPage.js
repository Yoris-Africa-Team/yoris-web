import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from '../components/info'
import Brands from "../components/Brands";
import Logistics from "../components/Logistics";
import headerIcon from "../assets/Yoris Icon 1.png";
import Icon, { FontAwesome, Feather } from "react-web-vector-icons";
import landingPageStyles from "./styles/landingPage.module.css";
import Ecommerce from "../components/ecommerce";
import Fintech from "../components/fintech";
import WaitingList from "../components/waitinglist";

function LandingPage(props) {
  console.log('LOADING LANDING PAGE', props);
  // let { 
  //   firstName,
  //   surname,
  //   phone,
  //   joinList,
  //   handleChange,
  //   email,
  //   source} = props;


  return (
    <div className={landingPageStyles.landingPageCont}>
      <Header toggleMenu={props.toggleMenu} menuPos={props.menuPos} />
      {/* 1st row */}
      <Info />
      {/* 2nd Row */}
      <Brands />
      {/* 3rd row */}
      <Logistics />
      {/* 4th row */}
      <Ecommerce />
      {/* 5th row */}
      <Fintech />
      {/* 6th */}
      <WaitingList   
        phone={props.phone}
        firstName={props.firstName}
        surname={props.surname}
        source={props.source}
        email ={props.email}
        handleChange={props.handleChange}
        joinList={props.joinList}/>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
