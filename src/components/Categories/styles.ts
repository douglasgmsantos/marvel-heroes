import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top: 20px;
`;

export const IconContainer = styled(LinearGradient)`
  background: #000;
  height: 56px;
  width: 56;
  border-radius: 28px;
  display: flex;
  justify-content:center;
  align-items:center;
`;

