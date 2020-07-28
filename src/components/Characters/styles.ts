import styled from 'styled-components/native';

import { colors } from '../../styles/variables'

export const Container = styled.View`
  
`;


export const CharactersListContainer = styled.View``;

export const CharactersListHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: ${colors.primaryRed};
  font-size:18px;
  font-weight: bold;
`;

export const MoreCharacter = styled.Text`
  color: ${colors.primaryGrey};
  font-size:14px;
  font-weight: 500;
`;

export const CharactersList = styled.ScrollView.attrs({
  horizontal: true
})``;


export const CardImage = styled.Image`
  width: 140px;
  height: 230px;
  border-radius: 20px;
  padding: 15px;
  border: 1px solid #000;
`

export const Card = styled.View`
  /* width: 140px;
  height: 230px;
  border-radius: 20px;
  padding: 15px;
  */
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
