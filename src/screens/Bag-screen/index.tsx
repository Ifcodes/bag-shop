import { SafeViewContainer, ScrollContainer, Container, TouchableOpacity } from '../../utils/styles'
import { Text } from '../../atoms/Typography';
import Search from '../../atoms/SearchComponent';
import Header from '../../molecules/Header';
import { Ionicons } from '@expo/vector-icons';
import { Image } from '../Main-screen';
import { productList } from './product';
import { Button } from '../../atoms/Button';
import { StatusBar } from 'expo-status-bar';


export default function BagScreen () {
  return(
    <SafeViewContainer dashboard>
      <StatusBar />
      <Header title='Bag' />
      <Search />
      <ScrollContainer 
        bgColor='#FFFFFF'
        marginTop='16'
      >
        <Text
          weight='bold'
          size='22px'
          marginTop='19'
          marginLeft='16'
        > 3 Items </Text>
        {productList.map(({imageUrl, productName, color}, index: number) => (
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
                  {color}
                </Text>
              </Container>
            </Container>
          
          </Container>
        ))}
        <Container
          flex={1}
          row
          justify='space-between'
          paddingLeft='16'
          paddingRight='16'
          border
          marginTop='75'
        >
        </Container>
        <Container
          flex={1}
          row
          justify='space-between'
          borderBottomColor
          bdBottomWidth='1px'
          marginLeft='16'
          marginTop='10.5'
          paddingRight='16'
          paddingBottom='10.5'
        >
          <Text>Items</Text>
          <Text color='#2f324066'>{productList.length}</Text>
        </Container>
        <Container
          flex={1}
          row
          justify='space-between'
          borderBottomColor
          bdBottomWidth='1px'
          marginLeft='16'
          marginTop='10.5'
          paddingRight='16'
          paddingBottom='10.5'
        >
          <Text>Shipping</Text>
          <TouchableOpacity row align='flex-end'>
            <Text 
              color='#2f324066' 
              align='right'
            >
              United State
            </Text>
            <Ionicons name="chevron-forward" size={18} color="#2f324066" />
          </TouchableOpacity>
        </Container>
        <Container
          row
          justify='flex-end'
          paddingRight='16'
          paddingTop='16'
          paddingBottom='16'
        >
          <Text weight='bold' lineHeight='28'>$256.00</Text>
        </Container>
      </ScrollContainer>
     <Container 
      align='center'
      marginTop='9'
      marginBottom='9'
    >
      <Button>
        <Text color='white' weight='bold'>Checkout</Text>
      </Button>
     </Container>
    </SafeViewContainer>
  )
}
