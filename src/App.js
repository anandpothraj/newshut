import './App.css';
import { Theme } from './Context';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsContainer from './components/NewsContainer/NewsContainer';
import Categories from './components/Categories/Categories';
import Settings from './components/Settings/Setting';


const App = () => {

  const { mode } = useContext(Theme);
  
  return (
    <Router>
      <div className='app' style={(mode === "dark")?{backgroundColor:"#E0E0E0"}:{backgroundColor:"white"}}>
        <Header/>
        <Routes>
          <Route path='/' element={<NewsContainer/>} exact/>
          <Route path='/categories' element={<Categories/>} exact/>
          <Route path='/settings' element={<Settings/>} exact/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;