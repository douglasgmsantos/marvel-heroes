import React from 'react';

import { Image } from 'react-native';

import MenuIcon from '../../assets/icons/menu/Menu.png';
import MarvelIcon from '../../assets/icons/marvel/Marvel.png';
import SearchIcon from '../../assets/icons/search/Search.png';

import {
  Container,
  IconContainer,
  TitleContainer,
  Title,
  Subtitle
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <IconContainer>
        <Image source={MenuIcon} width={24} height={24} />
        <Image source={MarvelIcon} width={24} height={24} />
        <Image source={SearchIcon} width={24} height={24} />
      </IconContainer>
      <TitleContainer>
        <Title>Bem vindo ao Marvel Heroes</Title>
        <Subtitle>Escolha o seu personagem</Subtitle>
      </TitleContainer>
    </Container>
  )
}

export default Header;