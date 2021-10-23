import { FlexVerticalCenter } from '../../styles/shared/Flex';
import { Button } from '../../styles/shared/Button';
import HeroImage from '../../assets/Logo/hero_image.png';
import theme from '../../styles/theme';
import Heading from '../../styles/shared/Heading';

const Hero = () => {
  return (
    <main>
      <Heading variant='h1'>Stay Informed.</Heading>
      <p style={{ color: '#7D7C83', fontWeight: 400, fontSize: '0.85rem' }}>
        Learn about the latest features and challenges in web development
        through the tech blogs who showcase it best.
      </p>
      <FlexVerticalCenter>
        <img
          // TODO: Implement logic for theme to adjust on the fly.
          src={HeroImage}
          alt=''
          style={{ width: 330, height: 250, marginTop: 20, marginBottom: 20 }}
        />
        <FlexVerticalCenter
          style={{ height: 90, justifyContent: 'space-between' }}
        >
          <Button>Explore blogs</Button>
          {/* TODO: Improve this. Make it easier and make it based on the "theme" */}
          <Button
            bg={theme.colors.light.main}
            color={theme.colors.light.contrastText}
          >
            Get a random blog
          </Button>
        </FlexVerticalCenter>
      </FlexVerticalCenter>
    </main>
  );
};

export default Hero;
