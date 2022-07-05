
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Routes,Route } from 'react-router-dom';
import { Header, Main } from './components';
import Details from './pages/Details';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { selectCountryData } from './store/country/selector';
import { CardProps } from './Types/Types';

const App=()=> {
  const {items} =useSelector(selectCountryData)
  
  return (
   <>
   <Header/>
   <Main>
    <Routes>
      <Route path='/' element={<Home countries={items} />}  />
      <Route path='/country/:name' element={<Details/>}  />
      <Route path='*' element={<NotFound/>}  />
    </Routes>
     
   </Main>
   </>
  );
}

export default App;
