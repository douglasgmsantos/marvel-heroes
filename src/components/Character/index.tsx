import React from 'react';

import {
  Container,
  Card,
  CardImage,
  CardTitle,
  CardSubTitle

} from './styles';


interface ICharacterProps {
  imagePath: string;
  name: string;
  alterEgo: string;
}



const Character: React.FC<ICharacterProps> = ({ name, alterEgo, imagePath }: ICharacterProps) => {
  console.log("imagePath", imagePath)
  return (
    <Container>
      <CardImage source={{ uri: imagePath }}
      />
      <Card>
        <CardTitle>{alterEgo}</CardTitle>
        <CardSubTitle>{name}</CardSubTitle>
      </Card>
    </Container>
  )
}

export default Character;