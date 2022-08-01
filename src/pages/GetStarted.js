import React, { useContext } from 'react';
import { Theme } from '../Context';
import { FaTheaterMasks, FaHeartbeat } from 'react-icons/fa';
import { MdOutlineBusinessCenter, MdOutlineBiotech, MdSportsVolleyball } from 'react-icons/md';
import { TbBrandMeta } from 'react-icons/tb';
import { GiMaterialsScience } from 'react-icons/gi';

const GetStarted = () => {

  const { customTheme, css ,userName, setUserName, myFeed, setMyFeed } = useContext(Theme);

  const category1 = [
    {
      name:"General",
      logo:<GiMaterialsScience/>
    },
    {
      name:"Entertainment",
      logo:<FaTheaterMasks/>
    },
    {
      name:"Business",
      logo:<MdOutlineBusinessCenter/>
    },
    {
      name:"Health",
      logo:<FaHeartbeat/>
    }
    ,{
      name:"Science",
      logo:<MdOutlineBiotech/>
    },
    {
      name:"Sports",
      logo:<MdSportsVolleyball/>
    },
    {
      name:"Technology",
      logo:<TbBrandMeta/>
    }
  ]

  const selecdCategory = (type) => {
    
  }

  return (
    <div className='getStarted'>
      <input type="text" placeholder='Enter Your Name' value={userName} onChange={(e)=>setUserName(e.target.value)}  />
      <div className="categoriesSection">
        <div className="categoriesDiv">
          {
            category1.map((cat,index) => (
              <button className="singleCategory" style={(customTheme !== "#ffffff")?{backgroundColor:customTheme,color:'white'}:{backgroundColor:css,color:"white"}} key={index} onClick={()=>{selecdCategory(cat.name)}}>
                <div className="categoryContent">
                <span className='categoryTitle'>{cat.name}</span>
                <span className='categoryLogo'>{cat.logo}</span>
                </div>
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default GetStarted