import styled from 'styled-components/native';
import { colors } from '../../styles/variables';


export const Container = styled.View`
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