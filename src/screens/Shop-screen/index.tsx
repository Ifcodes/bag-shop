import { SearchBar } from 'react-native-screens'
import styled, { css } from 'styled-components/native'
import Search from '../../atoms/SearchComponent'
import { Text } from '../../atoms/Typography'
import Header from '../../molecules/Header'
import { Container, SafeViewContainer } from '../../utils/styles'
import { Ionicons } from '@expo/vector-icons';
import { itemList } from './itemList'

const ImageBackground = styled.ImageBackground` 
  width: 343px;
  height: 310px;
  border-radius: 10px;
`
const Image = styled.Image`
  width: 40px;
  height: 40px;

`
const ImageWrapper = styled.View`
  width: 348px;
  height: 315px;
  margin-top: 28px;
  align-self: center;
  border-radius: 10px;
  border:3px solid #D7410B;
  justify-content: center;
`
const TouchableOpacity = styled.TouchableOpacity<{
  row?: boolean,
  marginTop?: string,
  align?: string;
  justifySelf?: string;
  justify?: string;
}>`
  margin-top: ${({marginTop}) => marginTop || 0}px;
  margin-right: 16px;
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  align-items: ${({align}) => align || 'flex-start'};
  ${({justify}) => justify && css` justify-content: ${justify}`};
`
export default function ShopScreen () {
  return(
    <SafeViewContainer bgColor='#F9F9F9' dashboard>
      <Header title='Shop' imgUrl/>
      <Search />
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
          <TouchableOpacity marginTop='99' align='flex-end'>
            <Text color='#0085FF' align='right'>BUY NOW</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ImageWrapper>
      <Container
        row
        justify='space-between'
        marginTop='27'
        marginLeft='16'
      >
        <Text size='22px' weight='bold'>Bags & Wallets</Text>
        <TouchableOpacity row align='flex-end'>
          <Text color='#0085FF' align='right'>Explore</Text>
          <Ionicons name="chevron-forward" size={18} color="#0085FF" />
        </TouchableOpacity>
      </Container>
      {itemList.map(({imageUrl, productName, price}, index: number) => (
        <Container 
          row align='center' 
          key={`newKey-${index}`} 
          marginTop='27' 
        >
          <Image source={imageUrl}/>
          <Container row justify='space-between'>
            <Container marginLeft='16'>
              <Text>{productName}</Text>
              <Text>${price}</Text>
            </Container>
            <TouchableOpacity row justifySelf='flex-end'>
              <Text color='#0085FF' align='right'>Label</Text>
            </TouchableOpacity>
          </Container>
        </Container>
      ))}
    </SafeViewContainer>
  )
}