import React from 'react'
import { CardContainer } from './Card.style'

const Card = ({ anime }: any) => {
  return (
    <>
      <CardContainer style={{
        backgroundImage: `url(${anime.attributes.posterImage.large})`
      }}>
        <p>{anime.attributes.canonicalTitle}</p>
      </CardContainer>

    </>
  )
}

export default Card
