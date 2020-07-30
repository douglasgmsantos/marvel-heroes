import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

interface IBars {
  visibility: boolean;
}

export const Bar = styled.View<IBars>`
  width: 1px;
  height: 15px;
  background: ${p => p.visibility ? "#FFF" : darken(0.5, "#FFF")};
  margin-right: 5px;
`