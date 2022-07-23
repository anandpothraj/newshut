import React from 'react';
import Navbar from './Navbar';

import Categories from './Categories';
import CurrentCategory from './CurrentCategory';

const Header = () => {

  return (
    <>
      <Navbar/>
      <Categories/>
      <CurrentCategory/>
    </>
  )
}

export default Header;