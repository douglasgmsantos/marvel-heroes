import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.6);
`;

export const FeatureItem = styled.View`
  justify-content: center;
`;

export const FeatureImageContainer = styled.View`
 justify-content: center;
 align-items:center;
 padding-bottom: 5px;
`;
export const FeatureImage = styled.Image`
  justify-content: center;
`;

export const FeatureTitle = styled.Text`
  color: #FFF;
  font-weight: 500;
  font-size: 12px
`;
