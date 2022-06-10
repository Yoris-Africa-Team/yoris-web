import React from 'react'
import headerIcon from "../assets/Yoris Icon 1.png";
import headerStyles from "./styles/header.module.css";

function Header(props) {
    console.log("image::", headerIcon)
  return (
     <div className={headerStyles.headerCont}>
           <div className={`${headerStyles.col1} fx`}>
                <div className={headerStyles.logo}>
                    <img src= {headerIcon} className={headerStyles.logoImg}/>
                </div>
                <div className={headerStyles.logoText}><span className={headerStyles.logoCompanyInitial}>Yoris</span> Africa</div>
                <div className={headerStyles.menu} onClick={props.toggleMenu}>
                    <img src={require("../assets/menu.png")} alt="menu"/>
                    <ul className={headerStyles.menuItems} style={{left: `${props.menuPos}%`}}>
                        <li className={headerStyles.menuItem}>About Us</li>
                        <li className={headerStyles.menuItem}>Contacts Us</li>
                    </ul>
                </div>
            </div>
            <div className={headerStyles.col2}>
               <a href='#waitingList'  className={headerStyles.joinLinkBtn}>JOIN WAITLIST</a>
            
            </div>
        </div>
         )
}

export default Header