import React, { useContext } from 'react';
import { Theme } from '../../../Context';
import SingleGridNews from './SingleGridNews';

const GridNews = () => {
  
  const { css, customTheme, news, showNews } = useContext(Theme);

  return (
    <>
      <div className='gridNews' style={showNews ? {display:"block"}:{display:"none"}}>
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
      <div className="loader" style={!showNews?{display:"block",border:`5px solid ${customTheme}`,borderBottomColor: "transparent"}:{display:"none"}}></div>
    </>
  )
}
 
export default GridNews;