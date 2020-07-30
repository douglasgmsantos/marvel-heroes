import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { StatusBar, Image } from 'react-native';

import BackDetail from "../../assets/icons/BackDetail/BackDetail.png";
import Feature from '../../components/Feature';
import Description from '../../components/Description';
import Abilities from '../../components/Abilities';
import Movies from '../../components/Movies';

import {
  Container,
  Header,
  BackRouter,
  ContainerBasic,
  Name,
  AlterEgo,
  Content

} from './styles';


interface ICharacterDetailProps {
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

const CharacterDetail: React.FC<ICharacterDetailProps> = ({ }: ICharacterDetailProps) => {
  const navigator = useNavigation();
  const { params } = useRoute();

  console.log("params", params)

  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Container source={{ uri: "/Users/douglassantos/Desktop/workspace/marvelComics/src/assets/chars/spider-man.png" }} >
        <Header>
          <BackRouter onPress={() => navigator.navigate("Dashboard")}>
            <Image source={BackDetail} />
          </BackRouter>
        </Header>
        <Content>
          <ContainerBasic>
            <Name>Peter Parker</Name>
            <AlterEgo>Homem Aranha</AlterEgo>
          </ContainerBasic>
          <Feature />
          <Description />
          <Abilities />
          <Movies />
        </Content>
      </Container>
    </>
  )
}

export default CharacterDetail;