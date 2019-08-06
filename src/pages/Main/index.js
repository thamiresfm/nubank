import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

import {Animated} from 'react-native'
import {PanGestureHandler,State } from 'react-native-gesture-handler'

import Heard from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'

import {Container , Content , Card, CardHeard, CardContent, Title, Descriptions, CardFooter, Annotation } from './styles';
import { statement } from '@babel/template';


export default function Main(){

  let offset = 0

  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY, 

        }
      }
    ],
    {
      useNativeDriver:true
    },
  )

  function onHandlerStateChanged(event){
    if(event.nativeEvent.oldState === State.ACTIVE){
      let opened = false
      const {translationY} = event.nativeEvent
      offset += translationY

      // translateY.setOffset(offset)
      // translateY.setValue(0)

      if(translationY >= 100){
        opened = true

      }else{
        translateY.setOffset(offset)
        translateY.setValue(0)
        offset = 0

      }


      Animated.timing(translateY, {
        toValue: opened ? 400 : 0,
        duration: 200,
        useNativeDriver:true,
      }).start(() => {
        offset = opened? 400: 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      
      })
      

    }


  }

  return(
    <Container >
     
      <Heard/>
        <Content>
         <Menu translateY={translateY}/>

         <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
         >

            <Card style={{
              transform:[{
                translateY:translateY.interpolate({
                  inputRange:[-350, 0,400],
                  outputRange:[-50, 0,400],
                  extrapolate:'clamp',
                }),
              }]
            }}>
              <CardHeard>
                <Icon name='attach-money' size={28} color='#666'/>
                <Icon name='visibility-off' size={28} color='#666'/>
              </CardHeard>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Descriptions>R$ 478.899,87</Descriptions>

              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferência de R$ 2.000,00 recebida de Glasiele.
                </Annotation>

              </CardFooter>

            </Card>
          </PanGestureHandler>
        </Content>




      <Tabs  translateY={translateY} />
    </Container>
  )
}




