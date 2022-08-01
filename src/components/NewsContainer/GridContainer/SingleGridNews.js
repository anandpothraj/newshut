import React, { useContext } from 'react';
import { Theme } from '../../../Context';
import defaultImg from '../../../defaultImg.png';

const SingleGridNews = ( { singleNews } ) => {

  const { css, customTheme } = useContext(Theme);

  return (
    // <div className='singleGridNews' style={(customTheme !== "#ffffff")?{border:`1px solid ${customTheme}`}:{border:`1px solid ${css}`}}>
    //     <div className="gridImgDiv" style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>
    //       <img src={singleNews.image ? singleNews.image.thumbnail.contentUrl : defaultImg } className='gridImg' alt="gridImg" />
    //     </div>
    //     <div className="gridInfoDiv">
    //       <h5 className='title' style={(customTheme !== "#ffffff")?{color:customTheme}:{color:css}}>{singleNews.name}</h5>
    //       <p className="desc">{singleNews.description}....</p>
    //       <button className='readMoreBtn' target="_blank" href={singleNews.url}
    //         style={(customTheme !== "#ffffff")?
    //         {backgroundColor:customTheme,border:`1px solid ${customTheme}`}
    //         :
    //         {backgroundColor:css,border:`1px solid ${css}`}}
    //       >Read More</button>
    //     </div>
    // </div>
    <div className='singleGridNews' style={(customTheme !== "#ffffff")?{border:`1px solid ${customTheme}`}:{border:`1px solid ${css}`}}>
        <div className="gridImgDiv" style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>
          <img src={defaultImg } className='gridImg' alt="gridImg" />
        </div>
        <div className="gridInfoDiv">
          <h5 className='title' style={(customTheme !== "#ffffff")?{color:customTheme}:{color:css}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat.</h5>
          <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, maiores voluptas
              iste illo facere laudantium eos atque voluptatum sit repellendus dolor vitae, quia eveniet ut, quos 
              voluptatem quaerat accusantium? Id unde aperiam porro voluptate possimus quibusdam nisi dolor ducimus.....</p>
          <button className='readMoreBtn' 
            style={(customTheme !== "#ffffff")?
            {backgroundColor:customTheme,border:`1px solid ${customTheme}`}
            :
            {backgroundColor:css,border:`1px solid ${css}`}}
          >Read More</button>
        </div>
    </div>
  )
}

export default SingleGridNews;