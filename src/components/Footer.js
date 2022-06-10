import React from 'react'
import Icon, { FontAwesome,AntDesign, Feather } from 'react-web-vector-icons';
import footerStyles from './styles/footer.module.css';
import { FiLinkedin,FiFacebook,FiTwitter,FiInstagram,FiMapPin } from "react-icons/fi";

let currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className={footerStyles.cont}>
      {/* left */}
      <div className={footerStyles.footerLeftCol}>
        {/* logo */}
        <div className={footerStyles.logoCont}>
          <img  src={require('../assets/Yoris Icon 1.png')} className={footerStyles.footerLogo} />
        </div>

        {/* write-ups and Image */}
        <div className={footerStyles.appDetailsCont} >
          {/* images */}
          <div className={footerStyles.appLinkCont}>
            <img className={footerStyles.appLinkImg} src={require('../assets/gp (1).png')} />
            <img className={footerStyles.appLinkImg} src={require('../assets/As (1).png')} />
          </div>

          {/* write */}
          <div className={footerStyles.desc}>
            <p className={footerStyles.copyright}> &copy; {currentYear} <strong>Yoris Africa LTD</strong></p>
            <p className={footerStyles.descText}>Yoris empowers brands with management tools <br/>
              to easily access their business ecosystem to<br/>
              showcase their work, grow, get paid and ship to <br/>
              their end users
            </p>
          </div>
        </div>
      </div>

      {/* right */}
      <div className={footerStyles.footerRightCol}>
        <div className={footerStyles.navLinkCont}>
          <a className={footerStyles.navLink} src="#">About</a>
          <a className={footerStyles.navLink} src="#">Contact Us</a>
        </div>
        <div className={footerStyles.socialsCont}>
          {/* linkedIn */}
          <FiLinkedin className={footerStyles.socialIcon}/>
            {/* fb */}
            <FiFacebook className={footerStyles.socialIcon}/>
            {/* twt */}
            <FiTwitter className={footerStyles.socialIcon}/>
          {/* inst */}
          <FiInstagram className={footerStyles.socialIcon}/>
        </div>
        <div className={footerStyles.companyAddress}>
          <p className={footerStyles.companyAddressText}> 13, Dr Fasheun Ave. Ago Palace Way, Lagos, Nigeria</p>
          {/* location Icon */}
          <FiMapPin className={`${footerStyles.socialIcon} ${footerStyles.companyLocation}`}/>
        </div>
      </div>
    </div>
  )
}

export default Footer 