import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Theme } from '../../Context';
import axios from 'axios';

const Categories = () => {

  const location = useLocation();
  let newArr= [];
  const { currentCategory, setCurrentCategory, customTheme, css, setNews, setIndex, setShowNews, customFeeds } = useContext(Theme);
  
  const fetchNews =  async (category) => {
    const { data } = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`);
    setNews(data.articles);
  };

  const getCustomizedFeeds = async () => {
    for(let i=0; i < customFeeds.length ; i++){
      let category = customFeeds[i].toLowerCase();
      const { data } = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`);
      newArr.push(data.articles);
    }
    console.log(newArr);
  }

  const setCategory = (e) => {
    setShowNews(false);
    if(e.currentTarget.id === "Feed"){
      setCurrentCategory(e.currentTarget.id);
      setIndex(0);
      getCustomizedFeeds();
      setTimeout(() => {
        setShowNews(true);
      }, 200);
    }
    else{
      setCurrentCategory(e.currentTarget.id);
      setIndex(0);
      let fetchCat = (e.currentTarget.id).toLowerCase();
      fetchNews(fetchCat);
      setTimeout(() => {
        setShowNews(true);
      }, 200);
    }
  }

  

  useEffect(() => {
    if(currentCategory === "Feed"){
      getCustomizedFeeds();
    }
    else{
      fetchNews(currentCategory.toLowerCase());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
        <div className='categories' style={(location.pathname === "/")?{}:{display:"none"}}>
            <div className="wrapper"> 
              <button id="Feed" className={`categoriesBtn ${("Feed" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>My&nbsp;Feeds</button> 
              <button id="General" className={`categoriesBtn ${("General" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>General</button>
              <button id="Entertainment" className={`categoriesBtn ${("Entertainment" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Entertainment</button>
              <button id="Business" className={`categoriesBtn ${("Business" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Business</button>
              <button id="Health" className={`categoriesBtn ${("Health" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Health</button>
              <button id="Science" className={`categoriesBtn ${("Science" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Science</button>
              <button id="Sports" className={`categoriesBtn ${("Sports" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Sports</button>
              <button id="Technology" className={`categoriesBtn ${("Technology" === currentCategory)? "activeCat":""}`} onClick={setCategory} style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Technology</button>
            </div>
         </div>
    </>
    )
  }

export default Categories;



