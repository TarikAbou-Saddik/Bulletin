import { ReactNode } from 'react';
import styled from 'styled-components';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  variant: HeadingVariant;
  children?: ReactNode;
};

const styledVariants = {
  h1: styled.h1`
    font-size: 4.5rem;
    font-weight: 900;
  `,
  h2: styled.h2`
    font-size: 3.5rem;
    font-weight: 700;
  `,
  h3: styled.h3`
    font-size: 4.5rem;
    font-weight: 900;
  `,
  h4: styled.h4`
    font-size: 3.5rem;
    font-weight: 700;
  `,
  h5: styled.h5`
    font-size: 4.5rem;
    font-weight: 900;
  `,
  h6: styled.h6`
    font-size: 3.5rem;
    font-weight: 700;
  `,
};

const Heading = ({ variant, children }: HeadingProps) => {
  // Let TypeScript know that our tag variable does indeed resolve to one of the built-in intristic types.
  const Tag = styledVariants[variant] as keyof JSX.IntrinsicElements;
  return <Tag>{children}</Tag>;
};

export default Heading;
