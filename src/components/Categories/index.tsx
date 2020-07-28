import React from 'react';
import { Image } from 'react-native';

import Hero from '../../assets/icons/hero/Hero.png';
import Villian from '../../assets/icons/villian/Villian.png';
import AntHeroe from '../../assets/icons/antHeroe/AntHeroe.png';
import Alien from '../../assets/icons/alien/Alien.png';
import Human from '../../assets/icons/human/Human.png';

import {
  Container,
  IconContainer
} from './styles';


var categories = [
  { id: 1, img: Hero, color: "" },
  { id: 2, img: Villian, color: "" },
  { id: 3, img: AntHeroe, color: "" },
  { id: 4, img: Alien, color: "" },
  { id: 5, img: Human, color: "" }
]
const Categories: React.FC = () => {
  return (
    <Container>
      {categories.map(category => (
        <IconContainer key={category.id}>
          <Image source={category.img} />
        </IconContainer>
      ))}

    </Container>
  )
}

export default Categories;