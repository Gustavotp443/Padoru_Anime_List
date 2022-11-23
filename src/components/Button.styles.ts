import styled from "styled-components";
import { shade } from "polished";
export const StyledButton = styled.button`
  cursor: pointer;
  background-color:${props => props.theme.colors.spanColor};
  color:#fff;
  height: 45px;
  width: 90px;
  border: none;
  border-bottom: 5px solid ${(props) => shade(0.4, props.theme.colors.spanColor)};

  &:hover{
    background-color:${props => shade(0.4, props.theme.colors.spanColor)};
  }

`
