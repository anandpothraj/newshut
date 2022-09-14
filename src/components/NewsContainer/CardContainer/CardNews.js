import React, { useContext } from 'react';
import { Theme } from '../../../Context';
import SingleCardContainer from './SingleCardContainer';

const CardNews = () => {

  const { css, customTheme, news, index, setIndex, showNews} = useContext(Theme);
  
  const previous = () => {
    if(index === 0){
      setIndex(0);
    }
    else{
      setIndex(index - 1);
    }
  }

  const next = () => {
    if(index === news.length - 1){
      setIndex(0);
    }
    else{
      setIndex(index + 1);
    }
  }

  // console.log(news[0])

  return (
    <>
      <div className="cardNews"style={showNews ? {display:"flex"}:{display:"none"}}>
        {
          (news && news.length > 0) ?
          <SingleCardContainer singleNews={news[index]}/>
          :
          <div className="loader" style={(customTheme !== "#ffffff")?{border:`5px solid ${customTheme}`,borderBottomColor: "transparent"}:{border:`5px solid ${css}`,borderBottomColor: "transparent"}}></div>
        }
          <div className="btnDiv">
          <div className="navigationBtnDiv">
            <button className='navigationBtn' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}} onClick={previous}>Previous</button>
            <button className='navigationBtn' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}} onClick={next}>Next</button>
          </div>
        </div>
      </div>
      <div className="loader" style={!showNews?{display:"block",border:`5px solid ${customTheme}`,borderBottomColor: "transparent"}:{display:"none"}}></div>
      </>
    )
  }
  
  export default CardNews;

