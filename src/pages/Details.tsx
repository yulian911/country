import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigationType, useParams } from 'react-router-dom'
import { searchByCountry } from '../config'
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';

const Details = () => {

    const {name} =useParams()
   const [country, setCountry] = useState('')
   const navigate = useNavigate();
    const fetchDetails =async()=>{
        const {data} =await axios.get(searchByCountry(name))
        setCountry(data)
    }

    useEffect(() => {
        fetchDetails()
    }, [])
    
    
  return (
    <div>
      <Button onClick={()=>navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {/* {country && <Info push={navigate} {...country} />} */}
    </div>
  )
}

export default Details