import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../Context';

const GetStarted = () => {
  
  const navigate = useNavigate();
  const { userInfo } = useContext(Theme);

  useEffect(() => {
    if(userInfo){
      navigate("/")
    }
  },[ navigate, userInfo])
  

  return (
    <div className='getStarted'>
      <input type="text" placeholder='Enter Your Name'  className="inputName"/>
      <div className="categoriesSection">
        <h3 style={{textAlign:"center"}}>Select your preference.</h3>
        <div className="categoriesDiv"> 
          <button className="singleCategory">
            <div className="categoryContent"> 
            <span className='categoryTitle'></span>
            <span className='categoryLogo'></span> 
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default GetStarted;










// const category1 = [
//   {                
//     name:"General",              
//     logo:<GiMaterialsScience/>,
//   },
//   {
//     name:"Entertainment",
//     logo:<FaTheaterMasks/>,
//   },
//   {
//     name:"Business",
//     logo:<MdOutlineBusinessCenter/>,
//   },
//   {
//     name:"Health",
//     logo:<FaHeartbeat/>,
//   }
//   ,{
//     name:"Science",
//     logo:<MdOutlineBiotech/>,
//   },
//   {
//     name:"Sports",
//     logo:<MdSportsVolleyball/>, 
//   },
//   {
//     name:"Technology",
//     logo:<TbBrandMeta/>,
//   }
// ]




