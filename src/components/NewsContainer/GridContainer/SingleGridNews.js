import React from 'react';
import img from './Img.jpg';

const SingleGridNews = () => {
  return (
    <div className='singleGridNews'>
        <div className="gridImgDiv">
            {/* <img src={img} alt="gridImg" className='gridImg'/> */}
        </div>
        <div className="gridInfoDiv">
            <h5 className='gridTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat.</h5>
            <p className="gridDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, maiores voluptas
                iste illo facere laudantium eos atque voluptatum sit repellendus dolor vitae, quia eveniet ut, quos 
                voluptatem quaerat accusantium? Id unde aperiam porro voluptate possimus quibusdam nisi dolor ducimus.
            </p>
            <button className='gridBtn'>Read more</button>
        </div>
    </div>
  )
}

export default SingleGridNews