import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigationType, useParams } from 'react-router-dom'
import { searchByCountry } from '../config'
import { IoArrowBack } from 'react-icons/io5';
import {Info,Button } from '../components';
import { DetailsType } from '../Types/Types';
import { useSelector } from 'react-redux';
import { selectCountryData } from '../store/country/selector';
import { useAppDispatch } from '../store/store';
import { fetchDetails } from '../store/country/asyncActions';
import styled from 'styled-components';
import Spinner from '../components/Loader';



const LoaderWrapper =styled.section`
  display:flex;
  justify-content: center;
  align-items: center; 
  /* background-color: red; */
  height: 100%;

    

`



const Details = () => {

    const {name} =useParams()
    console.log(name)
  const {item:country,status}=useSelector(selectCountryData)
  const dispatch =useAppDispatch()
   const navigate = useNavigate();
 

    useEffect(() => {
        dispatch(fetchDetails({name:String(name)}))
    }, [name])
    

  return (
    <div>
      <Button onClick={()=>navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
    
    {status ==='loading'?
    (
      <LoaderWrapper>
        <Spinner/>
      </LoaderWrapper>
    )
    :
    <>
      {country.map(c=>(
          <Info key={c.name}  {...c}  />
        ))}
    </>
    
  
    }
    

      
    </div>
  )
}

export default Details