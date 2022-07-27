import React, {useState, useEffect, useContext } from 'react';
import { Theme } from '../../Context';
import { useLocation } from 'react-router-dom';

const CurrentCategory = () => {

  const location = useLocation();
  const [ css, setCss ] = useState("");
  const { mode, currentCategory, customTheme } = useContext(Theme);

  useEffect(() => {

    if(mode === "dark"){
      setCss("black")
    }
    else{
      setCss("rgb(0,123,255)")
    }
    
  }, [mode,customTheme])

  return (
    <div className='currentCategory' style={(location.pathname === "/")?{}:{display:"none"}}>
        <span className="currentCategorySpan" style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>{currentCategory}</span>
    </div>
  )
}

export default CurrentCategory