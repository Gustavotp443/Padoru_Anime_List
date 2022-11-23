import React, { useContext, useState } from 'react'
import { MobileIcon, Nav, NavContainer, LinkNav } from './Navbar.styled'
import Switch from "react-switch";
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from "react-icons/ai"


type Props = {
  toggleTheme(): void
}





const NavBar: React.FC<Props> = ({ toggleTheme }): JSX.Element => {
  const { colors, title } = useContext(ThemeContext);

  const [clicked, setClick] = useState(false)

  const handleClick = () => {
    setClick(!clicked)
  }

  return (
    <NavContainer>
      <MobileIcon
        click={clicked}
        onClick={handleClick
        }>{!clicked ? <GiHamburgerMenu /> : <AiOutlineClose />}</MobileIcon>
      <Nav onClick={handleClick} click={clicked}>
        <LinkNav to="/">Home</LinkNav>
        <LinkNav to="/About">About</LinkNav>
        <LinkNav to="/Main">My List</LinkNav>
      </Nav>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, colors.primary)}
        onColor={colors.secondary}
      />
    </NavContainer>
  )
}

export default NavBar
