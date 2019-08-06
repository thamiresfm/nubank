import React from 'react'

import QRcode from 'react-native-qrcode'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Code, NavItem, Nav, NavTex, SignOutButtonTex, SignOutButton } from './styles';


export default function Menu({translateY}){
    return(
        <Container style={{
            opacity:translateY.interpolate({
              inputRange:[0,150],
              outputRange:[0,1],
            })
          }}>
            <Code>
                <QRcode
                    value="https://www.youtube.com"
                    size={80}
                    fgColor="#FFF"
                    bgColor="#8B10AE"
                
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF"/>
                    <NavTex>Me ajuda</NavTex>
                </NavItem>

                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF"/>
                    <NavTex>Perfil</NavTex>
                </NavItem>

                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF"/>
                    <NavTex>Configurar cartão</NavTex>
                </NavItem>

                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF"/>
                    <NavTex>Configurações do app</NavTex>
                </NavItem>

                
            </Nav>


            <SignOutButton onPress={() => {}}>
                <SignOutButtonTex>SAIR DO APP</SignOutButtonTex>
            </SignOutButton>


        </Container>
    )
}