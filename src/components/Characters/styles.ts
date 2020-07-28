import styled from 'styled-components/native';
import { FlatList } from 'react-native';


export const Container = styled.View`
`;


export const CharactersListContainer = styled(FlatList).attrs({
  horizontal: true
})`
  display: flex;
  flex-direction: row;
`;
