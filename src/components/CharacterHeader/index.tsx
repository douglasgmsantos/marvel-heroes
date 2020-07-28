import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Title,
  MoreCharacter
} from './styles';

const CharacterHeader: React.FC = () => {
  return (
    <Container>
      <Title>Herois</Title>
      <MoreCharacter>Ver Tudo</MoreCharacter>
    </Container>
  )
}

export default CharacterHeader;