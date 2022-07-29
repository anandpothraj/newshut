import React, { useContext } from 'react';
import { Theme } from '../../../Context';

const SingleGridNews = () => {

  const { css, customTheme } = useContext(Theme);

  return (
    <div className='singleGridNews' style={(customTheme !== "#ffffff")?{border:`1px solid ${customTheme}`}:{border:`1px solid ${css}`}}>
        <div className="gridImgDiv" style={(customTheme !== "#ffffff")?{backgroundColor:customTheme}:{backgroundColor:css}}>
        </div>
        <div className="gridInfoDiv">
            <h5 className='title' style={(customTheme !== "#ffffff")?{color:customTheme}:{color:css}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat.</h5>
            <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, maiores voluptas
                iste illo facere laudantium eos atque voluptatum sit repellendus dolor vitae, quia eveniet ut, quos 
                voluptatem quaerat accusantium? Id unde aperiam porro voluptate possimus quibusdam nisi dolor ducimus.
            </p>
            <button className='readMoreBtn' style={(customTheme !== "#ffffff")?{backgroundColor:customTheme,border:`1px solid ${customTheme}`}:{backgroundColor:css,border:`1px solid ${css}`}}>Read more</button>
        </div>
    </div>
  )
}

export default SingleGridNews