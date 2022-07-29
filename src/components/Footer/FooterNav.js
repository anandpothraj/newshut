import React, { useContext } from 'react';
import { AiFillSetting } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Theme } from '../../Context';
import { Link, useLocation } from 'react-router-dom';

const FooterNav = () => {

  const { css, customTheme } = useContext(Theme);
  const location = useLocation();


  return (
    <div className='footerNav'>
      <Link to="/">
        <span className="footerNavSpan"><FaHome  className={`footerLogo ${(location.pathname === "/")? "activeFooterLogo":""}`} style={(customTheme !== "#ffffff")?{color:customTheme}:{color:css}}/></span>
      </Link>
      <Link to="/categories">
        <span className="footerNavSpan"><BiCategory className={`footerLogo ${(location.pathname === "/categories")? "activeFooterLogo":""}`} style={(customTheme !== "#ffffff")?{color:customTheme}:{color:css}}/></span>
      </Link>
      <Link to="/settings">
        <span className="footerNavSpan"><AiFillSetting className={`footerLogo ${(location.pathname === "/settings")? "activeFooterLogo":""}`} style={(customTheme !== "#ffffff")?{color:customTheme}:{color:css}}/></span>
      </Link>
    </div>
  )
};

export default FooterNav;