import styled from "styled-components";


export const FooterContainer = styled.div`
  width: 100%;
  padding: 20px;

`

export const FooterText = styled.div`
  text-align: center;
  color:${(props) => props.theme.colors.text};
  a{color:inherit}

`
