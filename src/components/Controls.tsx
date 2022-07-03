import React, { FC, useEffect, useState } from 'react'
import { CustomSelect } from './CustomSelect';
import Search from './Search'
import styled from 'styled-components';
import { on } from 'stream';


interface Country {
  value: string;
  label: string;
 }

const options:Country[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];






const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

type ControlsProps={

  onSearch:(search: string, region: string)=>void
}

const Controls:FC<ControlsProps> = ({onSearch}) => {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState<Country>()


  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);


  },[search,region])


  const handleChange = (option:any) => {
    console.log(option);
    setRegion(option)
  };

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch}/>
      <CustomSelect 
          options={options}
          placeholder="Filter by Region"
          isClearable
          isSearchable={false}
          value={region}
          onChange={handleChange}
          />
    </Wrapper>
  )
}

export default Controls