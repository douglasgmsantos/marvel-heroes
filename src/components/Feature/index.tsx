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

const Feature: React.FC = () => {
  return (
    <Container>
      <FeatureItem>
        <FeatureImageContainer>
          <FeatureImage source={AgeIcon} />
        </FeatureImageContainer>
        <FeatureTitle>30 anos</FeatureTitle>
      </FeatureItem>
      <FeatureItem>
        <FeatureImageContainer>
          <FeatureImage source={WeightIcon} />
        </FeatureImageContainer>
        <FeatureTitle>30 anos</FeatureTitle>
      </FeatureItem>
      <FeatureItem>
        <FeatureImageContainer>
          <FeatureImage source={HeightIcon} />
        </FeatureImageContainer>
        <FeatureTitle>30 anos</FeatureTitle>
      </FeatureItem>
      <FeatureItem>
        <FeatureImageContainer>
          <FeatureImage source={UniverseIcon} />
        </FeatureImageContainer>
        <FeatureTitle>30 anos</FeatureTitle>
      </FeatureItem>
    </Container>
  );
}

export default Feature;