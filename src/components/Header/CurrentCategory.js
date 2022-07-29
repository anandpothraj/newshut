import React, { useContext } from 'react';
import { Theme } from '../../Context';
import { useLocation } from 'react-router-dom';

const CurrentCategory = () => {

  const location = useLocation();
  const { css, currentCategory, customTheme } = useContext(Theme);

  return (
    <div className='currentCategory' style={(location.pathname === "/")?{}:{display:"none"}}>
        <span className="currentCategorySpan" style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>{currentCategory}</span>
    </div>
  )
}

export default CurrentCategory