import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import {
  Container,
  CharactersListContainer,
  CharactersListHeader,
  Title,
  MoreCharacter,
  CharactersList,
  CardImage,
  Card,
  CardTitle,
  CardSubTitle
} from './styles';

const Characters: React.FC = () => {
  const [heroes, setHeroes] = useState([]);
  const [villains, setVillains] = useState([]);
  const [antheroes, setAntHeroes] = useState([]);
  const [aliens, setAliens] = useState([]);
  const [humans, setHumans] = useState([]);

  useEffect(() => {

    const loadCharacters = async () => {
      const heroes = await api.get("/heroes");
      setHeroes(heroes.data);

      const villains = await api.get("/villains");
      setVillains(villains.data);


      const antHeroes = await api.get("/antiHeroes");
      setAntHeroes(antHeroes.data);


      const aliens = await api.get("/aliens");
      setAliens(aliens.data);


      const humans = await api.get("/humans");
      setHumans(humans.data);

    }

    loadCharacters();
  }, [api])


  return (
    <Container>
      <CharactersListContainer>
        <CharactersListHeader>
          <Title>Herois</Title>
          <MoreCharacter>Ver Tudo</MoreCharacter>
        </CharactersListHeader>
        <CharactersList>
          <CardImage source={{ uri: "/Users/douglassantos/Desktop/workspace/marvelComics/src/assets/chars/spider-man.png" }} />
          <Card>
            <CardTitle>Peter Parker</CardTitle>
            <CardSubTitle>Homem Aranha</CardSubTitle>
          </Card>
        </CharactersList>
      </CharactersListContainer>

    </Container>
  )
}

export default Characters;