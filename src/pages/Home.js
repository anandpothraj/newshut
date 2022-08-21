import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../Context';
import GridNews from '../components/NewsContainer/GridContainer/GridNews';
import CardNews from '../components/NewsContainer/CardContainer/CardNews';

const NewsContainer = () => {

  const navigate = useNavigate();
  const { view, userInfo } = useContext(Theme);

  useEffect(() => {
    if(!userInfo){
      navigate("/getstarted");
    }
  })

  return (
    <div className='newsContainer' style={(view==="grid")?{height:"75vh"}:{height:"68vh"}}>{(view === "grid") ? <GridNews/> : <CardNews/>}</div>
  );
};

export default NewsContainer;