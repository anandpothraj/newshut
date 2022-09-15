import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Theme } from '../../Context';
import axios from 'axios';

const Categories = () => {

  let arr = [];
  const location = useLocation();
  const { currentCategory, setCurrentCategory, customTheme, css, setNews, setIndex, setShowNews, customFeeds } = useContext(Theme);
  
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  const fetchNews =  async (category) => {
    const { data } = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`);
    setNews(data.articles);
  };

  const getCustomizedFeeds = async () => {
    for(let i=0; i < customFeeds.length ; i++){
      let category = customFeeds[i].toLowerCase();
      const { data } = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`);
      arr.push(...data.articles);
    }
    shuffle(arr);
    setNews(arr);
  }

  const setCategory = (e) => {
    setNews([]);
    setShowNews(false);
    if(e.currentTarget.id === "Feed"){
      setCurrentCategory(e.currentTarget.id);
      setIndex(0);
      getCustomizedFeeds();
      setShowNews(true);
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



