import styled from "styled-components";


export const CardContainer = styled.div`
  padding:20px;
  display: flex;
  flex:1 1 150px;
  flex-direction: column;
  height: 300px;
  width: 200px;
  color: white;
  background-color: blue;
  border-bottom: 1px solid black;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: inset 0px -40px 50px 0px #000;

  cursor: pointer;

  @media screen and (max-width:660px){
    height: 150px;
    width: 100px;
  }
  p{
    position: relative;
    top:80%;
    font-size: 1em;
    @media screen and (max-width:660px){
    font-size:0.5em;
    top:80%;
  }
  }
`;

