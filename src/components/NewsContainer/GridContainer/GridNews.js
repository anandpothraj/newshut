import React, { useContext, useEffect, useState } from 'react';
import { Theme } from '../../../Context';
import SingleGridNews from './SingleGridNews';
import axios from 'axios';

const GridNews = () => {

  const [ news, setNews ] = useState([]);
  const { css, customTheme } = useContext(Theme);

  const fetchNews = async () => {
    const { data } = await axios.get('https://saurav.tech/NewsAPI//top-headlines/category/technology/in.json');
    setNews(data.articles);
  };

  useEffect(() => {
    fetchNews()
  }, [])
  

  return (
    <div className='gridNews'>
      {
        (news.length > 0)?(
          news.map((singleNews, index) => (
            <SingleGridNews key={index} singleNews={singleNews}/>
          ))
        )
        :
        <div className="loader" style={(customTheme !== "#ffffff")?{border:`5px solid ${customTheme}`,borderBottomColor: "transparent"}:{border:`5px solid ${css}`,borderBottomVolor: "transparent"}}></div>
      }
    </div>
  )
}

export default GridNews;