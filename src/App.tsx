
import React, { useEffect, useState } from 'react';
import {Routes,Route } from 'react-router-dom';
import { Header, Main } from './components';
import Details from './pages/Details';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CardProps } from './Types/Types';

const App=()=> {
  const [countries, setCountries] = useState<CardProps[] >([])
  return (
   <>
   <Header/>
   <Main>
    <Routes>
      <Route path='/' element={<Home countries={countries} setCountries={setCountries} />}  />
      <Route path='/country/:name' element={<Details/>}  />
      <Route path='*' element={<NotFound/>}  />
    </Routes>
     
   </Main>
   </>
  );
}

export default App;
