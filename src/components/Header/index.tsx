import { StyledHeader, Nav } from './styles';
import { BsSun } from 'react-icons/bs';
import { Button } from '../../styles/shared/Button';
import Logo from '../Logo';
import { FlexCenter } from '../../styles/shared/Flex';

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo />
        <FlexCenter>
          <BsSun size={30} style={{ marginRight: 10 }} />
          {/* TODO: Add variants for buttons so that the same style of button can be used. */}
          <Button style={{ width: 75, fontSize: '0.5rem' }}>Sign up</Button>
        </FlexCenter>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
