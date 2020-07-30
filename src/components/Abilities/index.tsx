import React from 'react';

import AbilityStrengthBar from '../AbilityStrengthBar';

import {
  Container,
  Title,
  Ability,
  AbilityName,

} from './styles';

const Abilities: React.FC = () => {
  return (
    <Container>
      <Title>Habilidades</Title>
      <Ability>
        <AbilityName>Força</AbilityName>
        <AbilityStrengthBar level={90} />
      </Ability>
      <Ability>
        <AbilityName>Inteligência</AbilityName>
        <AbilityStrengthBar level={70} />
      </Ability>
      <Ability>
        <AbilityName>Agilidade</AbilityName>
        <AbilityStrengthBar level={65} />
      </Ability>
      <Ability>
        <AbilityName>Resistência</AbilityName>
        <AbilityStrengthBar level={88} />
      </Ability>
      <Ability>
        <AbilityName>Velocidade</AbilityName>
        <AbilityStrengthBar level={80} />
      </Ability>
    </Container>
  )
}

export default Abilities;