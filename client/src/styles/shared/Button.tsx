import styled from 'styled-components';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonColor = 'dark' | 'light';

interface ButtonProps {
  readonly color?: ButtonColor;
  readonly size?: ButtonSize;
}

const getButtonWidthMobile = (size: ButtonSize = 'md'): string => {
  switch (size) {
    case 'sm':
      return '75px';
    case 'md':
      return '150px';
    case 'lg':
      return '200px';
    default:
      return '150px';
  }
};

const getButtonWidth = (size: ButtonSize = 'md'): string => {
  switch (size) {
    case 'sm':
      return '125px';
    case 'md':
      return '180px';
    case 'lg':
      return '240px';
    default:
      return '180px';
  }
};

const getColor = (
  color: ButtonColor = 'light',
  lightColor: string,
  darkColor: string,
): string => {
  return color === 'dark' ? darkColor : lightColor;
};

export const Button = styled.button<ButtonProps>`
  border-radius: 25px;
  background-color: ${({ color }) => getColor(color, '#FFF', '#3D3C3C')};
  color: ${({ color }) => getColor(color, '#000', '#FFF')};
  height: 40px;
  width: ${({ size }) => getButtonWidthMobile(size)};
  font-weight: 700;
  font-size: 0.8rem;
  border: 1px solid #c4c4c4;
  margin: 0 15px;
  cursor: pointer;
  margin: 5px 10px;

  &:hover {
    transition: background-color 0.3s ease-in;
    background-color: ${({ color }) => (color === 'dark' ? '#000' : '#c4c4c4')};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mobileSize}) {
    width: ${({ size }) => getButtonWidth(size)};
    height: 55px;
  } ;
`;
