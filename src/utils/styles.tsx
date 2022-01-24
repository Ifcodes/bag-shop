import styled, { css } from "styled-components/native";
import {Platform, StatusBar} from 'react-native'

export const Container = styled.View`
  flex: 1,  
`

export const SafeViewContainer = styled.SafeAreaView<{
  bgColor?: string
  bgImg?: string
}>`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight || 0 + 10}px`: 0};

  ${({bgColor}) => 
    bgColor && 
    css`
      background-color: ${bgColor}
    `
  }
  ${({bgImg}) => 
    bgImg && 
    css`
      background: url(bgImg)
    `
  }
`
