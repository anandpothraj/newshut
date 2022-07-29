import { Theme } from '../../Context';
import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { IoIosPhotos } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineHorizontalSplit } from "react-icons/md";

const Navbar = () => {

  const { mode, setMode, view, setView, customTheme, css } = useContext(Theme);
  
  return (
    <div className='header' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>
      <div className="logo">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className='logoSpan'>NewsHut</span>
        </Link>
      </div>
      <div className="other">
        <button className='otherBtn' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>
          {(mode === 'dark')? 
            <BsFillSunFill onClick={()=>{setMode("primary");localStorage.setItem("mode","primary")}} style={{color:"yellow"}}/> 
            : 
            <BsFillMoonStarsFill onClick={()=>{setMode("dark");localStorage.setItem("mode","dark")}} style={{color:"white"}}/>
          }
        </button>
        <button className='otherBtn' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>
          {(view === "grid")? 
            <IoIosPhotos onClick={()=>{setView("card");localStorage.setItem("view","card")}} style={{color:"white"}}/> 
            : 
            <MdOutlineHorizontalSplit onClick={()=>{setView("grid");localStorage.setItem("view","grid")}} style={{color:"white"}}/>
          }
        </button>
      </div>
    </div>
  )
}

export default Navbar