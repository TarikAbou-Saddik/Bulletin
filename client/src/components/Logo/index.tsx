import { ReactNode } from 'react';
import { Image, LogoHeading, LogoSize } from './styles';
import { FlexCenter } from '../../styles/shared/Flex';
import { IconType, IconBaseProps } from 'react-icons';

// TODO: Fix naming of fontSize and other props.
type LogoProps = {
  logo: string | IconType;
  icon?: boolean;
  children?: ReactNode;
  fontSize?: LogoSize;
  logoSize?: IconBaseProps['size'];
  color?: IconBaseProps['color'];
  linkTo?: string;
};

const Logo = ({
  logo,
  icon = false,
  logoSize = 30,
  color,
  fontSize,
  children,
}: LogoProps) => {
  const loadImage = () => {
    if (icon) {
      const Icon = logo as IconType;
      return <Icon size={logoSize} color={color} />;
    }
    const imageSrc = logo as string;
    return <Image src={imageSrc} />;
  };

  return (
    <FlexCenter>
      {loadImage()}
      <LogoHeading size={fontSize}>{children}</LogoHeading>
    </FlexCenter>
  );
};

export default Logo;
