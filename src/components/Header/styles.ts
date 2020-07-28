import styled from 'styled-components/native';
import { spacing } from '../../styles/variables'

export const Container = styled.SafeAreaView`
    
`

export const IconContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items:center;
    width: 100%;
    padding: ${spacing.md}px;
`;

export const TitleContainer = styled.View`

`;

export const Title = styled.Text`
    font-size: 14px;
    color: #B7B7C8;
    margin-bottom: 10px;
    font-weight: 500;
`;

export const Subtitle = styled.Text`
    font-family: gilroy-heavy;
    font-size: 32px;
`;
