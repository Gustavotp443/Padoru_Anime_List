import React from "react";
import { NotFoundText, NotFoundContainer, NotFoundImage } from "./AnimeNotFound.styles";

const AnimeNotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundText>Nada encontrado ! </NotFoundText>
      <NotFoundImage src='/images/Nothing.png' />
      <NotFoundText>Certifique-se de estar digitando corretamente. </NotFoundText>
    </NotFoundContainer>
  );
};

export default AnimeNotFound;
