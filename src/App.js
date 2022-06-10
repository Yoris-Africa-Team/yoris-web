import LandingPage from './Pages/LandingPage';
import { useState } from 'react';
import './App.css';
import {$} from './utils/utils.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd7HO8Yld0zkRlcUmR9V4o8xy3owB_7Vo",
  authDomain: "yoris-561a1.firebaseapp.com",
  projectId: "yoris-561a1",
  storageBucket: "yoris-561a1.appspot.com",
  messagingSenderId: "1004841297165",
  appId: "1:1004841297165:web:47303924f88be19cdc7c44",
  measurementId: "G-QRZC873SJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(); 

console.log(db);

function App() {
  const [values, setValues] = useState({
    phone: "",
    firstName: "",
    surname: "",
    email: "",
    source: ""
  });

  const handleChange = (name) => e => {
    setValues({...values, [name]: e.target.value});
  }

  const [menuItemsPos, setMenuItemPos] = useState(-70);

  const toggleMenu = () => {
     if (menuItemsPos == 0) setMenuItemPos(-70);
     else setMenuItemPos(0);
  }

  const joinList = (e) => {
    e.preventDefault();
    console.log("ready");
    console.log({...values});
  }
    
  return (
    <div className="app-cont">
     <LandingPage
        phone={values.phone}
        firstName={values.firstName}
        surname={values.surname}
        source={values.source}
        email ={values.email}
        handleChange={handleChange}
        joinList={joinList}
        toggleMenu={toggleMenu}
        menuPos={menuItemsPos}
     />
    </div>
  );
}

export default App;

// so each variable in our scope just hold a particular piece of data 
// so its actually the data that we are trying to define 