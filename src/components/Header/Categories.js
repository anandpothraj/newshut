import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Theme } from '../../Context';

const Categories = () => {

  const location = useLocation();
  const [ css, setCss ] = useState("");
  const { mode, currentCategory, setCurrentCategory, customTheme } = useContext(Theme);

  const setCategory = (e) => {
    setCurrentCategory(e.currentTarget.id)
  }

  useEffect(() => {

    if(mode === "dark"){
      setCss("black")
    }
    else{
      setCss("rgb(0,123,255)")
    }
    
  }, [mode,customTheme])

  return (
    <>
        <div className='categories' style={(location.pathname === "/")?{}:{display:"none"}}>
            <div className="wrapper"> 
              <button id="General" className={`categoriesBtn ${("General" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>General</button>
              <button id="Entertainment" className={`categoriesBtn ${("Entertainment" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Entertainment</button>
              <button id="Business" className={`categoriesBtn ${("Business" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Business</button>
              <button id="Health" className={`categoriesBtn ${("Health" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Health</button>
              <button id="Science" className={`categoriesBtn ${("Science" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Science</button>
              <button id="Sports" className={`categoriesBtn ${("Sports" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Sports</button>
              <button id="Technology" className={`categoriesBtn ${("Technology" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Technology</button>
            </div>
         </div>
    </>
    )
  }

export default Categories;



