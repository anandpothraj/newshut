import React, { useContext, useEffect, useRef } from 'react';
import { Theme } from '../../../Context';
import SingleGridNews from './SingleGridNews';

const GridNews = () => {
  
  const scrollToRef = useRef();

  const { css, customTheme, news, showNews, currentCategory } = useContext(Theme);

  const scrollTop = () => {
    console.log("running")
    scrollToRef.current.scrollIntoView();
  }

  useEffect(()=> {
    scrollTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentCategory])

  return (
    <>
      <div className='gridNews' style={showNews ? {display:"block"}:{display:"none"}} ref={scrollToRef}>
        {
          (news.length > 0)?(
            news.map((singleNews, index) => (
              <SingleGridNews key={index} singleNews={singleNews} />
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