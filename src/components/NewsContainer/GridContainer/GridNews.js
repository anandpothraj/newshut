// import React, { useContext } from 'react';
// import { Theme } from '../../../Context';
import SingleGridNews from './SingleGridNews';

const GridNews = () => {

  // const { css, customTheme } = useContext(Theme);

  return (
    <div className='gridNews'>
      {/* {
        (news.length > 0)?(
          news.map((singleNews, index) => (
            <SingleGridNews key={index} singleNews={singleNews}/>
          ))
        )
        :
        <div className="loader" style={(customTheme !== "#ffffff")?{border:`5px solid ${customTheme}`,borderBottomColor: "transparent"}:{border:`5px solid ${css}`,borderBottomVolor: "transparent"}}></div>
      } */}
      <SingleGridNews/>
      <SingleGridNews/>
      <SingleGridNews/>
      <SingleGridNews/>
      <SingleGridNews/>
      <SingleGridNews/>
      <SingleGridNews/>
      <SingleGridNews/>
      <SingleGridNews/>
    </div>
  )
}

export default GridNews;