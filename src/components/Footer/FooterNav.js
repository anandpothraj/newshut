import React from 'react';
import { AiFillSetting } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

const FooterNav = () => {
  return (
    <div className='footerNav'>
        <span className="footerNavSpan"><FaHome className='footerLogo'/></span>
        <span className="footerNavSpan"><BiCategory className='footerLogo'/></span>
        <span className="footerNavSpan"><AiFillSetting className='footerLogo'/></span>
    </div>
  )
};

export default FooterNav;