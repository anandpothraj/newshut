import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTheaterMasks, FaHeartbeat } from 'react-icons/fa';
import { MdOutlineBusinessCenter, MdOutlineBiotech, MdSportsVolleyball } from 'react-icons/md';
import { TbBrandMeta } from 'react-icons/tb';
import { GiMaterialsScience } from 'react-icons/gi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import { Theme } from '../Context';


const GetStarted = () => {
  
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [ userName, setUserName ] = useState("");
  const { setOnline } = useContext(Theme);
  

  const category1 = [
  {                
    name:"General",              
    logo:<GiMaterialsScience/>,
  },
  {
    name:"Entertainment",
    logo:<FaTheaterMasks/>,
  },
  {
    name:"Business",
    logo:<MdOutlineBusinessCenter/>,
  },
  {
    name:"Health",
    logo:<FaHeartbeat/>,
  }
  ,{
    name:"Science",
    logo:<MdOutlineBiotech/>,
  },
  {
    name:"Sports",
    logo:<MdSportsVolleyball/>, 
  },
  {
    name:"Technology",
    logo:<TbBrandMeta/>,
  }
]

const clickEvent = (category) => {
  if(categoriesArr.includes(category) === true){
    const result  = categoriesArr.filter((item) => item !== category);
    setCategoriesArr(result);
  }
  if(categoriesArr.includes(category) === false){
    let updatedCategoriesArr = [...categoriesArr, category]
    setCategoriesArr(updatedCategoriesArr);
  }
}

const next = () => {
  if(userName.length > 0){
    if(categoriesArr.length > 2){
      const userInfo = {
        loggedIn : true,
        feeds : categoriesArr,
      }
      localStorage.setItem("userInfo",JSON.stringify(userInfo));
      setOnline(true);
      toast.success("LoggedIn successfully!");
      navigate('/')
    }
    else{
      toast.error("Please select atleast 3 categories");
    }
  }
  else{
    toast.error("Please enter your name.")
  }
}

useEffect(() => {
  if(userInfo){
    if(userInfo.loggedIn === true){
      navigate("/");
    }
  }
},[ navigate, userInfo]);
  

  return (
    <div className='getStarted'>
      <ToastContainer/>
      <input type="text" placeholder='Enter Your Name'  className="inputName" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
      <div className="categoriesSection">
        <h3 style={{fontSize:"17px",textTransform:"capitalize",textAlign:"center"}}>Select atleast 3 preferences.</h3>
        <div className="categoriesDiv"> 
          {
            category1.map((cat,index) => (
              <button className="singleCategory"  key={index} onClick={()=>clickEvent(cat.name)} style={categoriesArr.includes(cat.name)?{backgroundColor:"white",color:'black'}:{backgroundColor:"black",color:'white'}}>
                <div className="categoryContent">
                <span className='categoryTitle'>{cat.name}</span>
                <span className='categoryLogo'>{cat.logo}</span>
                </div>
              </button>
            ))
          }
        </div>
      </div>
      <div className="enterBtnDiv">
        <span onClick={next}><BsFillArrowRightCircleFill className='enterBtn' title='enter'style={categoriesArr.length >= 2 ? {cursor:"pointer"}:{cursor:"not-allowed"}}/></span>
      </div>
    </div>
  )
}

export default GetStarted;












