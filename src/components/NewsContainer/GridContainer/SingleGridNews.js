import React, { useContext } from 'react';
import { Theme } from '../../../Context';
import defaultImg from '../../../defaultImg.png';

const SingleGridNews = ( { singleNews } ) => {

  const { css, customTheme } = useContext(Theme);
  const title = singleNews.title;
  const description = singleNews.description;
  const img = singleNews.urlToImage;
  const url = singleNews.url;

  return (
    <div className='singleGridNews' style={(customTheme !== "#ffffff")?{border:`1px solid ${customTheme}`}:{border:`1px solid ${css}`}}>
        <div className="gridImgDiv" style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>
          <img src={img?img:defaultImg} className='gridImg' alt="gridImg" />
        </div>
        <div className="gridInfoDiv">
          <h5 className='title' style={(customTheme !== "#ffffff")?{color:customTheme}:{color:css}}>{title?title.slice(0,120):"No Title"}</h5>
          <p className="desc">{description?description.slice(0,120):"No description"}</p>
          <button className='readMoreBtn' 
            style={(customTheme !== "#ffffff")?
            {backgroundColor:customTheme,border:`1px solid ${customTheme}`}
            :
            {backgroundColor:css,border:`1px solid ${css}`}} 
          >
            <a target="_blank" href={url?url:"www.google.com"} rel="noopener noreferrer" className='link'>Read More</a>
          </button>
        </div>
    </div>
  )
}

export default SingleGridNews;