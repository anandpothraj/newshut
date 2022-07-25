import React, { useContext } from 'react';
import FooterNav from './FooterNav';
import MainFooter from './MainFooter';
import { Theme } from '../../Context';

const Footer = () => {

  const { mode } = useContext(Theme);

  return (
    <div className='footer' style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)"}}>
      <FooterNav/>
      <MainFooter/>
    </div>
  )
}

export default Footer;