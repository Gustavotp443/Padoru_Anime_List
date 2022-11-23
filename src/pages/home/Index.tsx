import React from 'react'
import Button from '../../components/Button'
import { AnimeGirl, HomeContainer, WelcomeText, TopWrapper, ButtonContainer } from './home.styles'
import { Link } from "react-router-dom"

const Home = ({ theme }: any) => {
  console.log(theme)
  return (
    <HomeContainer>
      <TopWrapper>
        <WelcomeText>Welcome to <span>Padoru</span>!</WelcomeText>
        <div>
          <AnimeGirl theme={theme} src={theme.title === "light" ? "/images/Light_Saber.png" : "/images/Dark_Saber.png"} />
        </div>
      </TopWrapper>
      <ButtonContainer>
        <Link to="/main">
          <Button />
        </Link>
      </ButtonContainer>
    </HomeContainer>
  )
}

export default Home
