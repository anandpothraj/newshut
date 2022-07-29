import React, { useContext } from 'react';
import { Theme } from '../../Context';
import { FaTheaterMasks, FaHeartbeat } from 'react-icons/fa';
import { MdOutlineBusinessCenter, MdOutlineBiotech, MdSportsVolleyball } from 'react-icons/md';
import { TbBrandMeta } from 'react-icons/tb';
import { GiMaterialsScience } from 'react-icons/gi';
import { BsNewspaper } from 'react-icons/bs';

const Categories = () => {

  const { customTheme, css } = useContext(Theme);

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
              <div className="singleCategory" style={(customTheme !== "#ffffff")?{backgroundColor:customTheme,color:'white'}:{backgroundColor:css,color:"white"}} key={index}>
                <div className="categoryContent">
                <span className='categoryTitle'>{cat.name}</span>
                <span className='categoryLogo'>{cat.logo}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Categories