import axios from 'axios'
import { info } from 'console'
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Controls from '../components/Controls'
import List from '../components/List'
import { ALL_COUNTRIES } from '../config'
import { CardProps } from '../Types/Types'




type HomeProps={
 countries:CardProps[]
 setCountries:(data:CardProps[])=>void
}
   


const Home:FC<HomeProps> = ({countries, setCountries}) => {

    const [filteredCountries, setFilteredCountries] = useState(countries)
    const navigate =useNavigate()

    const handleSearch =(search:string,region:string)=>{
        let data =[...countries]
        if(region){
            data =data.filter(c=>c.region.includes(region))
        }
        if(search){
            data =data.filter(c=>c.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data)
    }

    const fetchData = async()=>{
      try{
        const {data} = await axios.get(ALL_COUNTRIES)
        setCountries(data)
        
      }catch(e){
        console.log(e)
      }
    
    }
    
    
      useEffect(()=>{
        if(!countries.length){fetchData() }
      },[])

    

  return (
    <>
     <Controls onSearch={handleSearch}/>
      <List>
        {filteredCountries.map((c:CardProps) =>{
           const countryInfo={
              img:c.flags.png,
              name:c.name,
              info:[
                {
                  title: 'Population',
                  description:c.population.toLocaleString()
                },
                {
                  title: 'Region',
                  description:c.region
                },
                {
                  title: 'Capital',
                  description:c.capital
                },
                
              ],
            }
            return(
              <Card key={c.name} onClick={()=>navigate(`/country/${c.name}`)}  {...countryInfo}/>
            )
        }
        )}
      </List>
    
    </>
  )
}

export default Home