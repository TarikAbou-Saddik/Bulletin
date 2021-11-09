import styled from 'styled-components';

export const HeroHeading = styled.h1`
  font-size: 4.2rem;
  font-weight: 900;

  @media only screen and (min-width: ${({ theme }) => theme.mobileSize}) {
    font-size: 7rem;
  } ;
`;

export const HeroBlurb = styled.p`
  color: ${({ theme }) => theme.otherText};
  font-weight: 300;
  font-size: 0.85rem;
  line-height: 1.25em;

  @media only screen and (min-width: ${({ theme }) => theme.mobileSize}) {
    font-size: 1.25rem;
    width: 55%;
  } ;
`;

export const HeroImage = styled.img`
  height: 200px;
  width: 100%;
  margin: 20px 0;

  @media only screen and (min-width: ${({ theme }) => theme.mobileSize}) {
    width: 50%;
    height: 500px;
  } ;
`;

export const HeroContainer = styled.main`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
