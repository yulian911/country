import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Controls from './components/Controls';

import Header from './components/Header';
import Main from './components/Main';
import { ALL_COUNTRIES } from './config';

const App=()=> {
const [country, setCountry] = useState([])
const fetchData = async()=>{
  try{
    const {data} = await axios.get(ALL_COUNTRIES)
    setCountry(data)
    
  }catch(e){
    console.log(e)
  }

}


  useEffect(()=>{
    fetchData() 
  },[])

  console.log(country)
  return (
   <>
   <Header/>
   <Main>
      <Controls/>
   </Main>
   </>
  );
}

export default App;
