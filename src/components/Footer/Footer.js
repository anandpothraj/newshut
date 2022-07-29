import React, { useContext } from 'react';
import FooterNav from './FooterNav';
import MainFooter from './MainFooter';
import { Theme } from '../../Context';

const Footer = () => {

  const { css, customTheme } = useContext(Theme);

  return (
    <div className='footer' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>
      <FooterNav/>
      <MainFooter/>
    </div>
  )
}

export default Footer;