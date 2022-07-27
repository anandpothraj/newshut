import React, { useState, useEffect, useContext } from 'react';
import { Theme } from '../../Context';
import { FaTheaterMasks, FaHeartbeat } from 'react-icons/fa';
import { MdOutlineBusinessCenter, MdOutlineBiotech, MdSportsVolleyball } from 'react-icons/md';
import { TbBrandMeta } from 'react-icons/tb';
import { GiMaterialsScience } from 'react-icons/gi';

const Categories = () => {

  const [ css, setCss ] = useState("");
  const { mode, customTheme } = useContext(Theme);

  const category = [
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

  useEffect(() => {

    if(mode === "dark"){
      setCss("black")
    }
    else{
      setCss("rgb(0,123,255)")
    }
    
  }, [mode,customTheme])

  return (
    <div className='browseCategories'>
      <div className="heading">
        <h3>Categories</h3>
      </div>
      <hr />
      <h6 className='browseHeading'>Browse Categories</h6>
      <hr />
      <div className="categoriesSection">
        <div className="categoriesDiv">
          <div className="singleCategory">
            {category.map((cat, index) => (
              <>
                <span key={index}>{cat.name}</span>
                <span>{cat.logo}</span>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories