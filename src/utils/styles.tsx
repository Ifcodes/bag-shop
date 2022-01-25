import styled, { css } from "styled-components/native";
import {Platform, StatusBar} from 'react-native'

export const Container = styled.View`
  flex: 1,  
`

export const SafeViewContainer = styled.SafeAreaView<{
  bgColor?: string,
  bgImg?: string,
  dashboard?: boolean
}>`
  flex: 1;
  padding-top: ${({dashboard}) => Platform.OS === 'android' || !dashboard 
    ? `${StatusBar.currentHeight || 0 + 10}px`
    : 0
  };
  padding-left: ${({dashboard}) => dashboard ? '16px' : 0} ;
  padding-right: ${({dashboard}) => dashboard ? '16px' : 0} ;
  

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
