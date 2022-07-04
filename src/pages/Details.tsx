import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigationType, useParams } from 'react-router-dom'
import { searchByCountry } from '../config'
import { IoArrowBack } from 'react-icons/io5';
import {Info,Button } from '../components';
import { DetailsType } from '../Types/Types';







const Details = () => {

    const {name} =useParams()
   const [country, setCountry] = useState<DetailsType[]>([])
   const navigate = useNavigate();
    const fetchDetails =async()=>{
        const {data} =await axios.get(searchByCountry(name))
        setCountry(data)
    }

    useEffect(() => {
        fetchDetails()
    }, [name])
    
    console.log(country)
  return (
    <div>
      <Button onClick={()=>navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
    
    {country.map(c=>(
      <Info key={c.name}  {...c}  />
    ))}

      
    </div>
  )
}

export default Details