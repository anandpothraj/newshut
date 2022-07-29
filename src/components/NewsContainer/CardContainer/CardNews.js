import React, { useContext } from 'react';
import { Theme } from '../../../Context';

const CardNews = () => {

  const { css, customTheme } = useContext(Theme);

  return (
    <>
      <div className="cardNews">
        <div className="card" style={(customTheme !== "#ffffff")?{border:`1px solid ${customTheme}`}:{border:`1px solid ${css}`}}>
          <div className="cardImgDiv" style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>
          </div>
          <div className="cardBody">
            <h5 className="cardTitle" style={(customTheme !== "#ffffff")?{color:customTheme}:{color:css}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat.</h5>
            <p className="cardDesc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, maiores voluptas
              iste illo facere laudantium eos atque voluptatum sit repellendus dolor vitae, quia eveniet ut, quos 
              voluptatem quaerat accusantium? Id unde aperiam porro voluptate possimus quibusdam nisi dolor ducimus.
            </p>
            <button className='readMoreBtn' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Read More.</button>
          </div>
        </div>
        <div className="btnDiv">
          <div className="navigationBtnDiv">
            <button className='navigationBtn' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Previous</button>
            <button className='navigationBtn' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>Next</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default CardNews;