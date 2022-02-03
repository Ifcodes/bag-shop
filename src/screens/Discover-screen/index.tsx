import Search from '../../atoms/SearchComponent'
import Header from '../../molecules/Header'
import { Container, SafeViewContainer, ScrollContainer, TouchableOpacity } from '../../utils/styles'
import { itemList } from '../Main-screen/itemList'
import { Image } from '../Main-screen'
import { Text } from '../../atoms/Typography'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { categoryList } from './categoryList'
import { StatusBar } from 'expo-status-bar'


export default function DiscoverScreen () {
  return(
    <SafeViewContainer dashboard>
      <StatusBar />
      <Header title='Discover' imgUrl/>

      <Search />

      <ScrollContainer 
        bgColor='#FFFFFF'
        marginTop='16'
      >
        {categoryList.map(({imageUrl, productName, number}, index: number) => (
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
                  {number}
                </Text>
              </Container>
              <TouchableOpacity 
                row 
                justifySelf='flex-end'
              >
                <Ionicons name="chevron-forward" size={18} color="#CECED2" />
              </TouchableOpacity>
            </Container>
          
          </Container>
        ))}
      </ScrollContainer>
    </SafeViewContainer>
  )
}