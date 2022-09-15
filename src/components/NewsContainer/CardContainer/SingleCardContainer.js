import React, { useContext } from 'react';
import { Theme } from '../../../Context';
import defaultImg from '../../../defaultImg.jpg';

const CardNews = ({singleNews}) => {

  const { css, customTheme } = useContext(Theme);

  const title = singleNews.title;
  const description = singleNews.description;
  const img = singleNews.urlToImage;
  const url = singleNews.url;

  return (
    <> 
        <div className="card" style={(customTheme !== "#ffffff")?{border:`1px solid ${customTheme}`}:{border:`1px solid ${css}`}}>
          <div className="cardImgDiv" style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>
          <img src={img?img:defaultImg} className='cardImg' alt="cardImg" />
          </div>
          <div className="cardBody">
            <h5 className="cardTitle" style={(customTheme !== "#ffffff")?{color:customTheme}:{color:css}}>{title?title.slice(0,120):"No title"}</h5>
            <p className="cardDesc">{description?description.slice(0,120):"No description"}</p>
            <button className='readMoreBtn' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>
              <a target="_blank" href={url?url:"www.google.com"} rel="noopener noreferrer" className='link'>Read More</a>
            </button>
          </div>
        </div>
    </>
  )
}

export default CardNews;