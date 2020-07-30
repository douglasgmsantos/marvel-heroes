import styled from 'styled-components/native';
import { FlatList } from 'react-native';


export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 5px;
  margin-bottom: 300px;
`;


export const CharactersListContainer = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  display: flex;
  flex-direction: row;
`;
