import {Animated} from 'react-native'
import styled from 'styled-components/native';


export const Container = styled.View`
  flex:1;
  background:#8b10AE;
  justify-content:center;
`;

export const Content  = styled.View`
  flex:1;
  max-height:400px;
  z-index:5;


`;
export const  Title  = styled.Text`

`;
export const  Card  = styled(Animated.View)`
  flex:1;
  background:#FFF;
  border-radius:4px;
  margin:0 20px;
  height:100%;
  position:absolute;
  left:0;
  right:0;
  top:0;



`;


export const  CardHeard  = styled.View`
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:30px;

`;

export const  CardContent  = styled.View`
    flex:1;
    padding:0 30px;
    justify-content:center;
`;

export const  Descriptions  = styled.Text`
  font-size:13px;
  margin-top:3px;
  color:#333;

`;

export const  CardFooter  = styled.View`
  padding:30px;
  background:#eee;
  border-radius:4px;

`;

export const  Annotation  = styled.Text`
  font-size:12px;
  color:#333;

`;