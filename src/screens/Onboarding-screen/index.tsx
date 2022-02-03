import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StatusBar as SB } from 'react-native'
import styled from 'styled-components/native'
import { Button } from '../../atoms/Button'
import { Text } from '../../atoms/Typography'
import { Container, TouchableOpacity } from '../../utils/styles'

const ImageBackground = styled.ImageBackground`
  width: auto;
  height: auto;
  flex: 1;
  padding-top: ${SB.currentHeight}px;
  padding-left: 16px;
  padding-right: 16px;
`
export default function OnboardingScreen ({navigation}: any) {
  return(
   <ImageBackground source={require('../../atoms/images/onboardImg.png')}>
     <StatusBar style='light'/>
     <Container row align='center' marginTop='16' justify='space-between'>
       <Container row align='center'>
        <Container 
          width='36' 
          height='36' 
          radius='10' 
          bgColor='#898989'
        ></Container>
        <Text marginLeft='12' color='white'>System</Text>
       </Container>
       <TouchableOpacity>
          <Text color='#0085FF' align='right'>Skip</Text>
       </TouchableOpacity>
     </Container>
     <Container marginTop='412'>
       <Text size='34px' lineHeight='40' color='white' weight='bold'>
         Discover seasonal pieces in a range of styles and fits.
       </Text>
       <Text size='17px' lineHeight='22' color=' #ffffff7f' marginTop='16'>
         Reinvent your look with the latest in Men’s clothes, shoes and accessories.
       </Text>
     </Container>
     <Container row justify='center' marginTop='44'>
      <Button
        onBoarding
        onPress={() => navigation.navigate('BottomNav')}
      >
        <Text color='white' size='17px' weight='bold'>Get Started</Text>
      </Button>
     </Container>
      
   </ImageBackground>
  )
}