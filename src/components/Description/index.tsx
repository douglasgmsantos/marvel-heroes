import React from 'react';

import { Container } from './styles';

interface IDescriptionProps {
  biography: string;
}

const Description: React.FC<IDescriptionProps> = ({ biography }: IDescriptionProps) => {
  return (
    <Container>
      {biography}
    </Container>
  )
}

export default Description;