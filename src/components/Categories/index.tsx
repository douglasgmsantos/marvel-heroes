import React from 'react';

import { Image } from 'react-native';

import { gradients } from '../../styles/variables'

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
  { id: 1, img: Hero, color: gradients.blue },
  { id: 2, img: Villian, color: gradients.red },
  { id: 3, img: AntHeroe, color: gradients.purple },
  { id: 4, img: Alien, color: gradients.green },
  { id: 5, img: Human, color: gradients.pink }
]
const Categories: React.FC = () => {
  return (
    <Container>
      {categories.map(category => (
        <IconContainer key={category.id} colors={[category.color.top, category.color.bottom]}>
          <Image source={category.img} />
        </IconContainer>
      ))}
    </Container>
  )
}

export default Categories;