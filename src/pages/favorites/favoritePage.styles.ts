import styled from "styled-components";
import { Container } from "../../styles/globalStyles";



export const FavoriteContainer = styled(Container)`
  min-height:80vh;
  ul{
    max-height: 80vh;
    overflow-y: auto;
  }
  li{
    display: flex;
    align-items: center;
    padding:20px;
    border-bottom: 1px solid gray;
  }

`;

export const ImageWrapper = styled.div`
  width: 40%;
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
  max-width:100px;
`;

export const Text = styled.p`
width: 40%;
`;
export const GoToItem = styled.div`
width:20%;
display: flex;
justify-content: center;
svg{
  color: ${({ theme }) => (theme.colors.inverse)};
  font-size:1.2em;
}
`;
