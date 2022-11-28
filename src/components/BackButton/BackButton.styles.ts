import styled from "styled-components";

export const ButtonContainer = styled.div`
  svg{
    cursor: pointer;
    margin-left:4%;
    position: relative;
    top: 30px;
    font-size: 1.8em;
    border-radius: 5px;
    background-color: ${({ theme }) => (theme.colors.spanColor)};
    color: white;
    padding: 5px;
  }
`;
