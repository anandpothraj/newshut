import React from 'react';
import { IoIosPhotos } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
// import { BsFillMoonStarsFill } from "react-icons/bs";
// import { MdOutlineHorizontalSplit } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='header'>
      <div className="logo">
        <span className='logoSpan'>NewsHut</span>
      </div>
      <div className="other">
        <span className='otherSpan'><IoIosPhotos/></span>
        <span className='otherSpan'><BsFillSunFill/></span>
      </div>
    </div>
  )
}

export default Navbar