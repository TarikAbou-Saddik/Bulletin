import { CSSProperties } from 'react';
import styled from 'styled-components';

interface FlexProps {
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexDirection?: CSSProperties['flexDirection'];
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};

  @media only screen and (min-width: ${({ theme }) => theme.mobileSize}) {
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  } ;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexVerticalCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
