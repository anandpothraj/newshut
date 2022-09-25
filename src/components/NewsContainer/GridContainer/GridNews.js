import React, { useContext, useEffect, useRef } from 'react';
import { Theme } from '../../../Context';
import SingleGridNews from './SingleGridNews';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const GridNews = () => {

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const { css, customTheme, news, showNews, currentCategory } = useContext(Theme);

  useEffect(()=> {
    executeScroll();
  },[currentCategory])

  return (
    <>
      <div className='gridNews' style={showNews ? {display:"block"}:{display:"none"}} ref={myRef}>
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