import { EmptyStateContainer, EmptyStateImage } from './styles';
import UnderConstruction from '../../assets/UnderConstruction.svg';

type EmptyStateProps = {
  heading?: string;
};

const EmptyState = ({
  heading = 'Still under construction...',
}: EmptyStateProps) => {
  return (
    <EmptyStateContainer>
      <EmptyStateImage src={UnderConstruction} />
      <h1>
        <em>{heading}</em>
      </h1>
    </EmptyStateContainer>
  );
};

export default EmptyState;
