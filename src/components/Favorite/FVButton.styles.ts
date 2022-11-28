import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

export const FVBTWrapper = styled.div`
  display: flex;
  cursor:pointer;
  gap: 12px;
  @media screen and (max-width:780px){
    gap:0;
  }
`;

export const Heart = styled(AiFillHeart) <any>`
  font-size: 1.6em;
  color: ${({ color }: any) => (color ? "red" : "gray")};

`;
