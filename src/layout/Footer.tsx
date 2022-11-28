import React from "react";
import { FooterContainer, FooterText } from "./Footer.styles";
const Footer = ({ theme }: any) => {
  return (
    <FooterContainer>
      <FooterText theme={theme}>
        <p>All copyrights &copy; 2022 Gustavo Teixeira Pardini</p>
        <p>My profile site,<a href="https://gustavo-pardini-dev.vercel.app/" target="_blank" rel="noreferrer noopener"> click here!</a></p>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
