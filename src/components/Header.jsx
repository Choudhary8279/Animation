import React from "react";
import menuIcon from '../assets/icons/menu.png'
import soundGif from '../assets/icons/sound.gif'
import logoHero from '../assets/icons/logo-hero.png'
function Header() {
  return (
    <div className="header-sec" >
      <div className="left-head">
        <img src={menuIcon} alt="" />
      </div>
      <div className="logo">
        <img src={logoHero} alt="divine logo" className="logo" />
      </div>
      <div className="right-head text-center">
        <img src={soundGif} alt="" />
        <p>Sound on</p>
      </div>
    </div>
  );
}

export default Header;
