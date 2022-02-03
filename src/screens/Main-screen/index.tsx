import styled, { css } from 'styled-components/native'
import Search from '../../atoms/SearchComponent'
import { Text } from '../../atoms/Typography'
import Header from '../../molecules/Header'
import { Container, SafeViewContainer, ScrollContainer, TouchableOpacity } from '../../utils/styles'
import { Ionicons } from '@expo/vector-icons';
import { itemList } from './itemList'
import { StatusBar } from 'expo-status-bar'

const ImageBackground = styled.ImageBackground` 
  width: 343px;
  height: 310px;
  border-radius: 10px;
`
export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`
const ImageWrapper = styled.View`
  width: 348px;
  height: 315px;
  margin-top: 13px;
  align-self: center;
  border-radius: 10px;
  border:3px solid #D7410B;
  justify-content: center;
`
export default function MainScreen () {
  return(
    <SafeViewContainer bgColor='#F9F9F9' dashboard>
      <StatusBar />
      <Header title='Shop' imgUrl/>

      <Search />

      <ScrollContainer
        bgColor='#FFFFFF'
        marginTop='16'
      >

        <ImageWrapper>
          <ImageBackground source={require('../../atoms/images/orangeBgImg.png')}>
            <Text
              marginTop='16'
              marginLeft='16' 
              weight='bold'
              color='rgba(255, 255, 255, 0.5)'
            >
              BAGS & WALLETS
            </Text>
            <Text
              marginTop='4'
              marginLeft='16' 
              weight='bold'
              color='rgb(255, 255, 255)'
              size='34px'
              lineHeight='40'
            >
              Recycled polyster soft packable bag
            </Text>
            <Text
              marginTop='4'
              marginLeft='16' 
              weight='normal'
              color='rgb(255, 255, 255)'
              size='17px'
            >
              Spacious and practical, this bag can be packed away into the pouch at the front.
            </Text>
            <TouchableOpacity 
              marginTop='99' 
              align='flex-end'
              paddingRight='16'
            >
              <Text color='#0085FF' align='right'>BUY NOW</Text>
            </TouchableOpacity>
          </ImageBackground>
        </ImageWrapper>

        <Container
          row
          justify='space-between'
          align='center'
          marginTop='27'
          marginLeft='16'
          paddingLeft='16'
          paddingRight='16'
        >
          <Text size='22px' weight='bold'>Bags & Wallets</Text>
          <TouchableOpacity row align='flex-end'>
            <Text color='#0085FF' align='right'>Explore</Text>
            <Ionicons name="chevron-forward" size={18} color="#0085FF" />
          </TouchableOpacity>
        </Container>

        {itemList.map(({imageUrl, productName, price}, index: number) => (
          <Container 
            row 
            align='center' 
            key={`newKey-${index}`} 
            marginTop='27'
            marginLeft='16'
            marginRight='16' 
          >
            <Image source={imageUrl}/>
            <Container 
              flex={1}
              row
              justify='space-between'
              align='center'
              borderBottomColor
              bdBottomWidth='1px'
              paddingBottom='15.5'
              marginLeft='16'
            >
              <Container>
                <Text 
                  color='#000000'
                  weight='bold'
                  marginBottom='2'
                >
                  {productName}
                </Text>
                <Text 
                  color='rgba(47, 50, 64, 0.4)'
                  weight='bold'
                >
                  ${price}
                </Text>
              </Container>
              <TouchableOpacity 
                row 
                justifySelf='flex-end'
                radius='100'
                bgColor='rgba(120, 120, 128, 0.08)'
                paddingLeft='10'
                paddingRight='10'
                paddingTop='5'
                paddingBottom='5'
              >
                <Text color='#0085FF' align='right'>LABEL</Text>
              </TouchableOpacity>
            </Container>
          
          </Container>
        ))}
      </ScrollContainer>
    </SafeViewContainer>
  )
}