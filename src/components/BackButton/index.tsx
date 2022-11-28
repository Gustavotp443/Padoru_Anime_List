import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./BackButton.styles";
const ComebackButton = () => {
  return (
    <ButtonContainer>
      <Link to="/main"><AiOutlineLeft /></Link>
    </ButtonContainer>
  );
};

export default ComebackButton;
