import styled from 'styled-components/native';
import { colors } from '../../styles/variables';

export const Container = styled.View`
  margin-top: 10px;
  margin-right: 10px;
`;

export const CardImage = styled.Image`
  width: 140px;
  height: 230px;
  border-radius: 20px;
  padding: 15px;
`

export const Card = styled.View`
  width: 140px;
  height: 230px;
  border-radius: 20px;
  padding: 15px;
  top: 150px;
  position: absolute;
`;

export const CardTitle = styled.Text`
  color: ${colors.primaryWhite};
  font-size: 10px;
`;

export const CardSubTitle = styled.Text`
  color: ${colors.primaryWhite};
  font-size: 20px;
  font-family: gilroy-heavy;
`;
