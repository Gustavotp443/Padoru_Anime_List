import styled from "styled-components";
import { Container } from "../../styles/globalStyles";

export const MainContainer = styled(Container)`
  min-height: 80vh;

`

export const CardWrapper = styled.ul`
margin-top:40px;
width: 100%;
list-style:none;
display: flex;
flex-wrap: wrap;
justify-content:center;

>li{
  margin-top: 20px;
  flex:1 1 200px;
  margin:10px;

}
`
export const SearchContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

`


