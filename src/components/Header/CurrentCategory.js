import React, { useContext } from 'react';
import { Theme } from '../../Context';

const CurrentCategory = () => {

  const { mode, currentCategory } = useContext(Theme);

  return (
    <div className='currentCategory' >
        <span className="currentCategorySpan" style={(mode === "dark")?{backgroundColor:"black"}:{backgroundColor:"rgb(0,123,255)"}}>{currentCategory}</span>
    </div>
  )
}

export default CurrentCategory