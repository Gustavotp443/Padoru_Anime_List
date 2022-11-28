import styled from "styled-components";
import { Container } from "../../../styles/globalStyles";
export const AnimePageContainer = styled(Container)`
  min-height: 80vh;
`;

export const TopWrapper = styled.div`
margin-top: 40px;
width: 100%;
display:flex;
flex-wrap: wrap;
`;

export const AnimeBannerWrapper = styled.div`
  width: 100%;
  display: flex;

  @media screen and (min-width:768px){
    width:40%;
}
`;

export const AnimeBanner = styled.img`
  width: 250px;


`;
export const Title = styled.h1`

  margin: 60px  2% 0 2%;
  text-align: center;
  font-size:1.6em;
`;
export const DetailedScore = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
width: 100%;
@media screen and (min-width:768px){
    width:60%;
    margin-top: 0;

}


>ul{
  list-style: none;
  width: 100%;
  padding: 0 30px 0 30px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width:768px){
    flex-direction: row;
    gap: 3vw;
}
}

li{
  margin:20px 0;
  font-size: 1.2em;

}
`;

export const Score = styled.p`

span{
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.spanColor};
  margin-right: 20px;
  color:white;
}

`;

export const Sinopsis = styled.div`
  margin: 40px 4% 80px 4%;

  >h1{
    text-align: center;
  }

  >p{
    text-align: justify;
    margin-top: 15px;
    line-height: 22px;
    font-size: 1em;
  }
  @media screen and (min-width:768px){
    margin-top:20px;
    margin-bottom: 0;
    >h1{
      text-align: justify;
    }
}

`;

export const MoreDetailsText = styled.h1`
  cursor:pointer;
  font-size: 1.2em;
  color:${(props) => props.theme.colors.spanColor};
  width: 35%;
  padding-left: 2%;
  align-items: center;
  @media screen and (max-width:760px){
    width: 100%;
    position: relative;
    top: 20px;
    margin-left:4%;
  }
`;

export const MoreDetails = styled.div<any>`
  display:${({ display }: any) => (display ? "block" : "none")};
  flex-wrap: wrap;
  width: 85%;
  justify-content: center;
  align-items: center;
  padding: 20px 0 0 2%;

  @media screen and (max-width:760px){
    width: 100%;
    padding-top: 0;
    position: relative;
    top: 20px;
    margin-left:4%;
  }
`;

export const Favorite = styled.div`
  width: 35%;
  align-items: center;
  padding-right: 6%;
  @media screen and (max-width:760px){
    width: 100%;
    position: relative;
    top: -80px;
  }

`;
export const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top:60px;
  padding-bottom: 60px;
`;

export const MFwrapper = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`;

