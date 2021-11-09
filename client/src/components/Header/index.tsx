import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { StyledHeader, Nav } from './styles';
import { Button } from '../../styles/shared/Button';
import { FlexCenter } from '../../styles/shared/Flex';
import Logo from '../Logo';

type HeaderProps = {
  onThemeChange: React.MouseEventHandler<SVGElement>;
};

const Header = ({ onThemeChange }: HeaderProps) => {
  const themeContext = useContext(ThemeContext);

  const icon =
    themeContext.title === 'light' ? (
      <BsSunFill onClick={onThemeChange} />
    ) : (
      <BsMoonFill onClick={onThemeChange} />
    );

  return (
    <StyledHeader>
      <Nav>
        <Link
          to='/'
          style={{ textDecoration: 'none', color: themeContext.text }}
        >
          <Logo logo={themeContext.logo}>Bulletin</Logo>
        </Link>
        <FlexCenter>
          {icon}
          <Button size='sm' color='dark'>
            Sign up
          </Button>
        </FlexCenter>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
