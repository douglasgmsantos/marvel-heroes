import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Title,
  MoreCharacter
} from './styles';


interface ICharacterHeader {
  title: string
}

const CharacterHeader: React.FC<ICharacterHeader> = ({ title }: ICharacterHeader) => {
  return (
    <Container>
      <Title>{title}</Title>
      <MoreCharacter>Ver Tudo</MoreCharacter>
    </Container>
  )
}

export default CharacterHeader;