import React, { useContext } from 'react';
import { Theme } from '../../../Context';

const CardNews = () => {

  const { mode } = useContext(Theme);

  return (
    <>
      <div className="cardNews">
        <div className="card" style={(mode === "dark")?{borderColor:"black"}:{borderColor:"rgb(0,123,255)"}}>
          <div className="cardImgDiv" style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)"}}>
          </div>
          <div className="cardBody">
            <h5 className="cardTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat.</h5>
            <p className="cardDesc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, maiores voluptas
              iste illo facere laudantium eos atque voluptatum sit repellendus dolor vitae, quia eveniet ut, quos 
              voluptatem quaerat accusantium? Id unde aperiam porro voluptate possimus quibusdam nisi dolor ducimus.
            </p>
            <button className='readMoreBtn' style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)"}}>Read More.</button>
          </div>
        </div>
        <div className="btnDiv">
          <div className="navigationBtnDiv">
            <button className='navigationBtn' style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)"}}>Previous</button>
            <button className='navigationBtn' style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)"}}>Next</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default CardNews;