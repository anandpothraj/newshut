import { Theme } from '../../Context';
import React, { useContext } from 'react';

const Categories = () => {

  const { mode, currentCategory, setCurrentCategory } = useContext(Theme);

  const setCategory = (e) => {
    setCurrentCategory(e.currentTarget.id)
  }
  return (
    <>
        <div className='categories'>
            <div className="wrapper"> 
              <button id="General" className={`categoriesBtn ${("General" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)",border:"1px solid rgb(0,123,255)"}}>General</button>
              <button id="Entertainment" className={`categoriesBtn ${("Entertainment" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)",border:"1px solid rgb(0,123,255)"}}>Entertainment</button>
              <button id="Business" className={`categoriesBtn ${("Business" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)",border:"1px solid rgb(0,123,255)"}}>Business</button>
              <button id="Health" className={`categoriesBtn ${("Health" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)",border:"1px solid rgb(0,123,255)"}}>Health</button>
              <button id="Science" className={`categoriesBtn ${("Science" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)",border:"1px solid rgb(0,123,255)"}}>Science</button>
              <button id="Sports" className={`categoriesBtn ${("Sports" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)",border:"1px solid rgb(0,123,255)"}}>Sports</button>
              <button id="Technology" className={`categoriesBtn ${("Technology" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)",border:"1px solid rgb(0,123,255)"}}>Technology</button>
            </div>
         </div>
    </>
    )
  }

export default Categories;



