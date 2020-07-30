import React from 'react';
import { useNavigation } from '@react-navigation/native';


import {
  Container,
  Card,
  CardImage,
  CardTitle,
  CardSubTitle

} from './styles';


interface ICharacterProps {
  data: {
    name: string;
    alterEgo: string;
    imagePath: string;
    biography,
    caracteristics: {
      birth: number;
      weight: {
        value: number;
        unity: string;
      },
      height: {
        value: number;
        unity: string;
      },
      universe: string;
    },
    abilities: {
      force: number;
      intelligence: number;
      agility: number;
      endurance: number;
      velocity: number;
    },
    movies: string[];
  }
}



const Character: React.FC<ICharacterProps> = ({ data }: ICharacterProps) => {
  const navigator = useNavigation();

  return (
    <Container onPress={() => navigator.push("CharacterDetail", { data })}>
      <CardImage source={{ uri: data.imagePath }}
      />
      <Card>
        <CardTitle>{data.alterEgo}</CardTitle>
        <CardSubTitle>{data.name}</CardSubTitle>
      </Card>
    </Container>
  )
}

export default Character;