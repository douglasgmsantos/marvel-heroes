import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const Container = styled(ImageBackground)`
  height: 100%; 
`;

export const Content = styled.ScrollView`

`;


export const Header = styled.SafeAreaView`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  padding: 90px;
`;

export const BackRouter = styled.TouchableOpacity`
  padding-left: 30px;
`;


export const ContainerBasic = styled.SafeAreaView`
  margin-top: 350px;
  width: 50%;
`;

export const Name = styled.Text` 
  font-size: 16px;
  color: #FFF;
  font-weight: 500;
`;

export const AlterEgo = styled.Text` 
  font-size: 40px;
  color: #FFF;
  font-family: gilroy-heavy;
`;


