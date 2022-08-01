import React, { useContext } from 'react';
import { Theme } from '../Context';
import GridNews from '../components/NewsContainer/GridContainer/GridNews';
import CardNews from '../components/NewsContainer/CardContainer/CardNews';

const NewsContainer = () => {

  const { view } = useContext(Theme);
  return (
    <div className='newsContainer' style={(view==="grid")?{height:"75vh"}:{height:"68vh"}}>{(view === "grid") ? <GridNews/> : <CardNews/>}</div>
  );
};

export default NewsContainer;