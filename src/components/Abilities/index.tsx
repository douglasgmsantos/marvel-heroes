import React from 'react';

import AbilityStrengthBar from '../AbilityStrengthBar';

import {
  Container,
  Title,
  Ability,
  AbilityName,

} from './styles';

interface IAbilitiesProps {
  force: number;
  intelligence: number;
  agility: number;
  endurance: number;
  velocity: number;
}

const Abilities: React.FC<IAbilitiesProps> = ({
  agility,
  endurance,
  force,
  intelligence,
  velocity
}: IAbilitiesProps) => {
  return (
    <Container>
      <Title>Habilidades</Title>
      <Ability>
        <AbilityName>Força</AbilityName>
        <AbilityStrengthBar level={force} />
      </Ability>
      <Ability>
        <AbilityName>Inteligência</AbilityName>
        <AbilityStrengthBar level={intelligence} />
      </Ability>
      <Ability>
        <AbilityName>Agilidade</AbilityName>
        <AbilityStrengthBar level={agility} />
      </Ability>
      <Ability>
        <AbilityName>Resistência</AbilityName>
        <AbilityStrengthBar level={endurance} />
      </Ability>
      <Ability>
        <AbilityName>Velocidade</AbilityName>
        <AbilityStrengthBar level={velocity} />
      </Ability>
    </Container>
  )
}

export default Abilities;