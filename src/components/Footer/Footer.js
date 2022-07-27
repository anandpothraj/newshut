import React, { useState, useEffect, useContext } from 'react';
import FooterNav from './FooterNav';
import MainFooter from './MainFooter';
import { Theme } from '../../Context';

const Footer = () => {

  const [ css, setCss ] = useState("");
  const { mode, customTheme } = useContext(Theme);

  useEffect(() => {

    if(mode === "dark"){
      setCss("black")
    }
    else{
      setCss("rgb(0,123,255)")
    }
    
  }, [mode,customTheme])

  return (
    <div className='footer' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>
      <FooterNav/>
      <MainFooter/>
    </div>
  )
}

export default Footer;