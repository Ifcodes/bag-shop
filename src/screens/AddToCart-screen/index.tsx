import { StatusBar } from 'react-native';
import { StatusBar as SB } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native'
import { Container, SafeViewContainer, ScrollContainer, TouchableOpacity } from '../../utils/styles'
import { Text } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { Image } from '../Main-screen';
import React from 'react';



const ImageBackground = styled.ImageBackground`
  width: auto;
  height: 544px;
  padding-top: ${StatusBar.currentHeight}px;
`
export default function AddToCartScreen () {
  return(
    <SafeViewContainer>
      <ImageBackground source={require('../../atoms/images/curvedbag.png')}>

        <SB style='light'/>

        <Container
          row
          justify='space-between'
          align='center'
          paddingTop='25'
          paddingLeft='16'
          paddingRight='16'
        >
          <TouchableOpacity row align='flex-end'>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity 
            row 
            align='center'
            justify='center'
            radius='100'
            bgColor='#323234'
            paddingRight='10'
            paddingLeft='10'
            paddingBottom='5'
            paddingTop='5'
          >
            <Text color='white' size='14px' weight='normal'>
              ADD TO BAG
            </Text>
          </TouchableOpacity>
        </Container>
      </ImageBackground>
      <ScrollContainer bgColor='white'>
        <Text
          marginTop='16'
          marginLeft='16'
          size='15px'
          weight='bold'
          color='#2f32407f;'
        >
          BAGS & WALLET
        </Text>
        <Container
          paddingLeft='16'
        >
          <Text 
            weight='bold'
            marginTop='8'
            size='22px'
          >
            Curved crossbody bag
          </Text>
          <Text marginTop='8' color='#22232666'>$79</Text>
        </Container>
        <Container
          bgColor='white'
          row
          justify='center'
          marginLeft='16'
          marginRight='16'
          marginTop='20'
          radius='10'
          shadow
          border
        >
          <Text>ONE SIZE</Text>
        </Container>
          <Container 
            row 
            align='center' 
            justify='center'
            marginTop='27'
            marginLeft='16'
            marginRight='16' 
          >
            <Image source={require('../../atoms/images/ls-wallet.png')}/>
            <Container 
              flex={1}
              row
              justify='space-between'
              align='center'
              paddingBottom='15.5'
              marginLeft='16'
            >
              <Container>
                <Text 
                  color='#000000'
                  weight='bold'
                  marginBottom='2'
                >
                  Leather travel wallet
                </Text>
              </Container>
              <TouchableOpacity 
                row 
                justifySelf='flex-end'
              >
                <Ionicons name="chevron-forward" size={24} color="#CECED2" />
              </TouchableOpacity>
            </Container>
          
          </Container>
        <Text 
          color='#2f32407f' 
          size='15px' 
          marginLeft='16'
          marginTop='16'
          marginRight='16'
          marginBottom='16'
        >
          The COS take on street-style accessories. The curved crossbody bag has a distinct form with a padded front pocket for extra volume that folds with secure popper buttons. Style with your favourite winter looks.
        </Text>
      </ScrollContainer>
      
    </SafeViewContainer>
  )
}
