import { Theme } from '../../Context';
import React, { useContext } from 'react';
import { IoIosPhotos } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineHorizontalSplit } from "react-icons/md";

const Navbar = () => {

  const { mode, setMode, showGrid, setShowGrid } = useContext(Theme);

  return (
    <div className='header'>
      <div className="logo">
        <span className='logoSpan'>NewsHut</span>
      </div>
      <div className="other">
        <span className='otherSpan'>
          {(mode === 'dark')? 
            <BsFillSunFill onClick={()=>{setMode("primary");localStorage.setItem("mode","primary")}} style={{color:"yellow"}}/> 
            : 
            <BsFillMoonStarsFill onClick={()=>{setMode("dark");localStorage.setItem("mode","dark")}}/>}
        </span>
        <span className='otherSpan'>
          {(showGrid === true)? 
            <IoIosPhotos onClick={()=>{setMode(!showGrid);console.log(showGrid)}}/> 
            : 
            <MdOutlineHorizontalSplit onClick={()=>{setMode(!showGrid)}}/>
          }
        </span>
      </div>
    </div>
  )
}

export default Navbar