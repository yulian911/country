import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import   Containers  from './Containers'

const Wrapper=styled.main`
padding: 2rem 0;


@media(min-width:767px)  {
  padding: 4rem 0;
}


`
  
type MainProps = {
  children:ReactNode
}

const Main:FC<MainProps> = ({children}) => {
  return (
    <Wrapper>
      <Containers>
          {children}
      </Containers>
    </Wrapper>
  )
}

export default Main