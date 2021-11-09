import styled from 'styled-components';

export type LogoSize = 'sm' | 'md' | 'lg';

type LogoHeadingProps = {
  size?: LogoSize;
};

const logoHeadingSizes = {
  sm: '0.8rem',
  md: '1.4rem',
  lg: '2rem',
};

export const LogoHeading = styled.div<LogoHeadingProps>`
  cursor: pointer;
  font-size: ${({ size }) => logoHeadingSizes[size as LogoSize] || '1.7rem'};
  font-weight: 700;
  margin-left: 10px;

  @media only screen and (min-width: ${({ theme }) => theme.mobileSize}) {
    font-size: 2.25rem;
  } ;
`;

export const Image = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 5px;

  @media only screen and (min-width: ${({ theme }) => theme.mobileSize}) {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  } ;
`;
