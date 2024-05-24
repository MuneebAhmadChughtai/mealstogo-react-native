import styled from 'styled-components';
import {Card} from 'react-native-paper';

export const Title = styled.Text`
  padding: ${props => props.theme.space[2]};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: 900;
  color: ${props => props.theme.colors.text.primary};
`;
export const Address = styled.Text`
  padding: ${props => props.theme.space[2]};
  font-family: ${props => props.theme.fonts.body};
  font-weight: 900;
  color: ${props => props.theme.colors.text.primary};
`;

export const ResturantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
  margin: 5px;
  border-radius: 0px;
`;

export const ResturantCardCover = styled(Card.Cover)`
  border-radius: ${props => props.theme.space[0]};
  margin: 10px;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-left: ${props => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
