import { SafeViewContainer } from '../../utils/styles'
import { Text } from '../../atoms/Typography'
import React from 'react'
import { StatusBar } from 'expo-status-bar'


export default function ProfileScreen () {
  return(
    <SafeViewContainer dashboard>
      <StatusBar />
      <Text>Profile Screen</Text>
    </SafeViewContainer>
  )
}