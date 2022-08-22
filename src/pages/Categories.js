import React, { useContext, useEffect } from 'react';
import { Theme } from '../Context';
import { FaTheaterMasks, FaHeartbeat } from 'react-icons/fa';
import { MdOutlineBusinessCenter, MdOutlineBiotech, MdSportsVolleyball } from 'react-icons/md';
import { TbBrandMeta } from 'react-icons/tb';
import { GiMaterialsScience } from 'react-icons/gi';
import { BsNewspaper } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Categories = () => {

  const navigate = useNavigate();
  const { customTheme, css, setCurrentCategory } = useContext(Theme);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const category1 = [
    {
      name:"My Feed",
      logo:<BsNewspaper/>
    },
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

  const browseCategory = (type) => {
    if(type === "My Feed"){
      setCurrentCategory("Feed");
    }
    else{
      setCurrentCategory(type);
    }
    navigate("/")
  }

  useEffect(() => {
    if(userInfo === null){
      navigate("/getstarted");
    }
  })

  return (
    <div className='browseCategories'>
      <div className="heading">
        <h3>Categories</h3>
      </div>
      <hr />
      <h6 className='browseHeading' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme,color:'white'}:{backgroundColor:css,color:"white"}}>Browse Categories</h6>
      <hr />
      <div className="categoriesSection">
        <div className="categoriesDiv">
          {
            category1.map((cat,index) => (
              <button className="singleCategory" style={(customTheme !== "#ffffff")?{backgroundColor:customTheme,color:'white'}:{backgroundColor:css,color:"white"}} key={index} onClick={()=>{browseCategory(cat.name)}}>
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

export default Categories