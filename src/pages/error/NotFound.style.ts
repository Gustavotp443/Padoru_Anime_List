import styled from "styled-components";
import { Container } from "../../styles/globalStyles";

export const PageContainer = styled(Container)`
min-height: 80vh;

div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0 60px 0;
}
`;

export const Text = styled.div`
  font-size: 1.6em;
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
  max-width: 400px;

`;
