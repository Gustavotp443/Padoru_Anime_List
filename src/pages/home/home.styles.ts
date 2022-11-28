import styled from "styled-components";
import { Container } from "../../styles/globalStyles";

export const HomeContainer = styled(Container)`
  min-height: 75vh;

`;

export const WelcomeText = styled.p`
font-size:2.8em;
text-align: center;
line-height: 60px;

span{
  background-color: ${(props) => props.theme.colors.spanColor};
  padding: 10px;
  border-radius: 5px;
  color:white;
}
`;

export const AnimeGirl = styled.img`
     height:${({ theme }) => theme.title === "light" ? "240px" : "320px"}; //400

width:${({ theme }) => theme.title === "light" ? "276px" : "276px"};   //345

  margin-top: 50px;
  transform:${({ theme }) => theme.title === "light" ? "translateX(-50px)" : "translateX(0)"};

@media screen and (min-width:360px){


  height:${({ theme }) => theme.title === "light" ? "300px" : "400px"}; //400

   width:${({ theme }) => theme.title === "light" ? "345px" : "345px"};   //345
}
@media screen and (min-width:580px){
  height:${({ theme }) => theme.title === "light" ? "432px" : "480px"}; //400

width:${({ theme }) => theme.title === "light" ? "497px" : "414px"};   //345
}
`;

export const TopWrapper = styled.div`
  margin:50px 4% 0 4%;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  position: relative;
  top:80%;
  right: 50%;
  transform: translateX(50%);
`;
