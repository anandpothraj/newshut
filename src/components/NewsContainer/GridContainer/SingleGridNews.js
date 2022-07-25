import React, { useContext } from 'react';
import { Theme } from '../../../Context';

const SingleGridNews = () => {

  const { mode } = useContext(Theme);

  return (
    <div className='singleGridNews' style={(mode === "dark")?{border:"1px solid black"}:{border:"1px solid rgb(0,123,255)"}}>
        <div className="gridImgDiv" style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)"}}>
        </div>
        <div className="gridInfoDiv">
            <h5 className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat.</h5>
            <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, maiores voluptas
                iste illo facere laudantium eos atque voluptatum sit repellendus dolor vitae, quia eveniet ut, quos 
                voluptatem quaerat accusantium? Id unde aperiam porro voluptate possimus quibusdam nisi dolor ducimus.
            </p>
            <button className='readMoreBtn' style={(mode === "dark")?{backgroundColor:"black",border:"1px solid black"}:{backgroundColor:"rgb(0,123,255)",border:"1px solid rgb(0,123,255)"}}>Read more</button>
        </div>
    </div>
  )
}

export default SingleGridNews