import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper =styled.article`

`
const CardImage =styled.img`

`
const CardBody =styled.div`

`
const CardTitle =styled.h3`

`
const CardList =styled.ul`

`
const CardListItem =styled.li`

`
type CardProps={
  name:string,
  info:Info[],
  
}
type Info={
  description:string,
  title:string,
}


const Card:FC<CardProps> = ({name,info}) => {
  return (
    <Wrapper>
      <CardImage/>
      <CardBody>
          <CardTitle>
                {name}
          </CardTitle>
          <CardList>
            {info.map((el:Info,index) =>(
              <CardListItem key={index}>
                <b>{el.title}</b>
                {el.description}
              </CardListItem>
            ))}
          </CardList>
      </CardBody>
    </Wrapper>
  )
}

export default Card