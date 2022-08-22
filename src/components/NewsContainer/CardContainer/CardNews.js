import React, { useContext } from 'react';
import { Theme } from '../../../Context';
import SingleCardContainer from './SingleCardContainer';

const CardNews = () => {

  const { css, customTheme, news, index, setIndex} = useContext(Theme);
  
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
      <div className="cardNews">
        {
          (news && news.length > 0) ?
          <SingleCardContainer singleNews={news[index]}/>
          :
          <div className="loader" style={(customTheme !== "#ffffff")?{border:`5px solid ${customTheme}`,borderBottomColor: "transparent"}:{border:`5px solid ${css}`,borderBottomVolor: "transparent"}}></div>
        }
          <div className="btnDiv">
          <div className="navigationBtnDiv">
            <button className='navigationBtn' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}} onClick={previous}>Previous</button>
            <button className='navigationBtn' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}} onClick={next}>Next</button>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default CardNews;

