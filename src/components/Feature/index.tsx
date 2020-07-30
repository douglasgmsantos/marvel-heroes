import React from 'react';

import HeightIcon from '../../assets/icons/height/Height.png'
import WeightIcon from '../../assets/icons/weight/Weight.png'
import AgeIcon from '../../assets/icons/age/Age.png'
import UniverseIcon from '../../assets/icons/universe/Universe.png'


import {
  Container,
  FeatureItem,
  FeatureImageContainer,
  FeatureImage,
  FeatureTitle
} from './styles';

interface IFeatureProps {
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
  }
}
const Feature: React.FC<IFeatureProps> = ({
  caracteristics
}: IFeatureProps) => {


  return (
    <Container>
      <FeatureItem>
        <FeatureImageContainer>
          <FeatureImage source={AgeIcon} />
        </FeatureImageContainer>

        <FeatureTitle>{new Date().getFullYear() - caracteristics.birth} anos</FeatureTitle>
      </FeatureItem>
      <FeatureItem>
        <FeatureImageContainer>
          <FeatureImage source={WeightIcon} />
        </FeatureImageContainer>
        <FeatureTitle>{caracteristics.weight.value} {caracteristics.weight.unity}</FeatureTitle>
      </FeatureItem>
      <FeatureItem>
        <FeatureImageContainer>
          <FeatureImage source={HeightIcon} />
        </FeatureImageContainer>
        <FeatureTitle>{caracteristics.height.value} {caracteristics.height.unity}</FeatureTitle>
      </FeatureItem>
      <FeatureItem>
        <FeatureImageContainer>
          <FeatureImage source={UniverseIcon} />
        </FeatureImageContainer>
        <FeatureTitle>{caracteristics.universe}</FeatureTitle>
      </FeatureItem>
    </Container>
  );
}

export default Feature;