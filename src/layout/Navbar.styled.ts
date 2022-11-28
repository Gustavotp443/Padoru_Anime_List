import styled, { StyledComponent, StyledComponentBase } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

type Click = {
  click: boolean;
}

export const NavContainer = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  padding: 20px 2%;
  width: 100%;


`;

export const Nav = styled.ul`
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  height: 200vh;
  position: absolute;
  color: #fff;
  font-size: 1.3em;
  transform: ${({ click }: Click) => (click ? "translateX(-10vw)" : "translateX(-140vw)")};
  width: 50vw;
  transition:  1s ease;
  gap: 4em;
  z-index: 10;
@media screen and (max-width:768px){
  width: 110vw;
}
`;
export const MobileIcon = styled.div<Click>`
font-size: 1.8em;
cursor: pointer;
color:#fff;
z-index: 999;
transition:  1.1s ease;
transform: ${({ click }) => (click ? "translateX(60%)" : "translateX(0) ")};

  `;

export const LinkNav = styled(Link)`
 transform: translateY(30vh);
 text-decoration: none;
 color: inherit;

  `;
