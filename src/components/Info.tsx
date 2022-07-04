import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { brotliDecompress } from "zlib";
import { filterByCode } from "../config";
import { Borders, DetailsType } from "../Types/Types";

const Wrapper =styled.section`
  margin-top:3rem;
  display: grid;
  grid-template-columns:100% ;
  gap:2rem;

    @media(min-width: 767px) {
      grid-template-columns:minmax(100px,400px) 1fr;
      align-items: center;
      gap:5rem
    }
    @media(min-width: 1024px) {
      grid-template-columns:minmax(400px,600px) 1fr;

    }

`
const InfoImage =styled.img`
  display:block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const InfoTitle=styled.h1`
  margin:0;
  font-weight: var(--fw-normal);
`
const ListGroup =styled.div`
  display:flex;
  flex-direction: column;
  gap:2rem;

  @media(min-width: 1024px){
    flex-direction: row;
    gap:4rem;
  }

`
const List =styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;


`
const ListItem =styled.li`
  line-height: 1.8;
  & > b{
    font-weight: var(--fw-bold);
  }

`
const Meta =styled.div`
  margin-top:3rem;
  display:flex;
  gap:1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & >b {
    font-weight: var(--fw-bold);
  }
  @media(min-width: 1024px){
    flex-direction: row;
    align-items: center;
  }

`
const TagGroup =styled.div`
  display:flex;
  gap:1rem;
  flex-wrap:wrap;


`
const Tag =styled.span`
  padding:0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;

`


const Info:FC<DetailsType> =(props)=>{
  const navigate =useNavigate()
  const [neighbors, setNeighbors] = useState([]);

  
  const {
    population,
    region,
    name,
    nativeName,
    flag,
    capital,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders,
 
  }=props

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((c:Borders) => c.name)));
  }, [borders]);
  return(
    <Wrapper>
      <InfoImage src={flag} alt={name}/>
      <div>
      <InfoTitle>{name}</InfoTitle>
      
       <ListGroup>
          <List>
              <ListItem>
                  <b>Native Name:</b> {nativeName}
              </ListItem>
              <ListItem>
                  <b>Population:</b> {population}
              </ListItem>
              <ListItem>
                  <b>Region:</b> {region}
              </ListItem>
              <ListItem>
                  <b>Sub Region:</b> {subregion}
              </ListItem>
              <ListItem>
                  <b>Capital:</b> {capital}
              </ListItem>
              <ListItem>
                  <b>Top level Domain: </b> {topLevelDomain.map((d)=>
                  <span key={d}>
                      {d}
                  </span>)}
              </ListItem>
              <ListItem>
                  <b>Currencies: </b> {currencies.map((c)=>
                  <span key={c.name}>
                      {c.name}
                  </span>)}
              </ListItem>
              <ListItem>
                  <b>Language: </b> {languages.map((l)=>
                  <span key={l.name}>
                      {l.name}
                  </span>)}
              </ListItem>
             
          </List>
       </ListGroup>
       <Meta>
       {!borders.length ?
       (
        <span>There is no border countries</span>
       )
       :
       (
        <TagGroup>
          {neighbors.map(b=>
            (<Tag key={b}  onClick={()=>navigate(`/country/${b}`)}>
              {b}
            </Tag>))}
        </TagGroup>
       )
      }
       </Meta>
       </div>
    </Wrapper>
  )
}
export default Info