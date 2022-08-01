import './App.css';
import { Theme } from './Context';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Settings from './pages/Settings';
import GetStarted from './pages/GetStarted';


const App = () => {

  const { mode } = useContext(Theme);
  
  return (
    <Router>
      <div className='app' style={(mode === "dark")?{backgroundColor:"#D0D0D0"}:{backgroundColor:"white"}}>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/getstarted' element={<GetStarted/>} exact/>
          <Route path='/categories' element={<Categories/>} exact/>
          <Route path='/settings' element={<Settings/>} exact/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;