import styled from 'styled-components/native';

export const Container = styled.View`
  background: rgba(0, 0, 0, 0.9);
  padding: 12px 15px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: 800;
  padding-bottom: 20px;
`;

export const MovieContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const MovieImage = styled.Image`
  width: 140px;
  height: 230px;
  border-radius: 20px;
  padding: 15px;  
  margin-right: 10px;
`;