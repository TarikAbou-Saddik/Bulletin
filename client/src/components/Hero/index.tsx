import { Flex } from '../../styles/shared/Flex';
import { Button } from '../../styles/shared/Button';
import { HeroBlurb, HeroContainer, HeroHeading, HeroImage } from './styles';
import HeroImageSrc from '../../assets/dev_learning_image.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <HeroContainer>
      <Flex alignItems='center' style={{ margin: '0 5vw' }}>
        <Flex flexDirection='column'>
          <HeroHeading>
            Stay <br /> Informed.
          </HeroHeading>
          <HeroBlurb>
            Learn about the latest features and challenges in web development
            through the tech blogs who showcase it best.
          </HeroBlurb>
        </Flex>
        <HeroImage src={HeroImageSrc} alt='' />
      </Flex>
      <Flex>
        <Link to='blogs'>
          <Button color='dark'>Explore blogs</Button>
        </Link>
        <Link to='random'>
          <Button>Get a random blog</Button>
        </Link>
      </Flex>
    </HeroContainer>
  );
};

export default Hero;
