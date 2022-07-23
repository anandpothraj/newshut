import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsContainer from './components/NewsContainer/NewsContainer';
import './App.css';

const App = () => {
  
  return (
    <div className='app'>
      <Header/>
      <NewsContainer/>
      <Footer/>
    </div>
  )
}

export default App