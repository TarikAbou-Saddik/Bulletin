import { Image } from './styles';
import LightLogo from '../../assets/Logo/Light.png';
import { FlexCenter } from '../../styles/shared/Flex';

const Logo = () => {
  return (
    <FlexCenter>
      <Image src={LightLogo} />
      {/* TODO: Make custom Heading component */}
      <h1>Bulletin</h1>
    </FlexCenter>
  );
};

export default Logo;
