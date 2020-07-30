import React, { useState, useMemo, useEffect } from 'react';
import { Container, Bar } from './styles';
import { Text } from 'react-native';

interface IAbilityStrengthBar {
  level: number;
  levelBase?: number;
}

interface IBars {
  id: number;
  visibility: boolean;
}

const AbilityStrengthBar: React.FC<IAbilityStrengthBar> = ({ level, levelBase = 44 }: IAbilityStrengthBar) => {
  var [bars, setBars] = useState([]);

  useEffect(() => {
    setBars([...Array.from(Array(levelBase), (_, i) => i + 1)]);
  }, [levelBase])

  return (
    <Container>
      {bars && bars.map((bar) => (
        <Bar
          key={bar}
          visibility={(level / 10) * 4.4 >= bar}
        />
      ))}
    </Container>
  )
}

export default AbilityStrengthBar;