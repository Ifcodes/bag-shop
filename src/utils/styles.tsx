import styled, { css } from "styled-components/native";
import {Platform, StatusBar} from 'react-native'

export const Container = styled.View<{
  row?: boolean,
  width?: string,
  height?: string,
  paddingLeft?: string,
  paddingRight?: string,
  paddingTop?: string,
  paddingBottom?: string,
  bgColor?: string,
  border?: string,
  radius?: string,
  align?: string,
  justify?: string,
  marginLeft?: string,
  marginRight?: string,
  marginTop?: string,
  marginBottom?: string,
  borderBottom?: string,
  flex?: boolean,
}>`
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  flex: ${({flex}) => flex ? '1' : ''};
  align-items: ${({align}) => align || 'flex-start'};
  justify-content: ${({justify}) => justify || 'flex-start'};
  margin-top: ${({marginTop}) => marginTop || '0'}px;
  margin-right: ${({marginRight}) => marginRight || '0'}px;
  margin-left: ${({marginLeft}) => marginLeft || '0'}px;
  margin-bottom: ${({marginBottom}) => marginBottom || '0'}px;

  ${({height}) => 
    height &&
    css` 
      height: ${height}px;
    `
  };

  ${({paddingLeft}) => 
    paddingLeft &&
    css`
      padding-left: ${paddingLeft}px;
    `
  }

  ${({paddingRight}) => 
    paddingRight &&
    css`
      padding-right: ${paddingRight}px;
    `
  }

  ${({paddingTop}) => 
    paddingTop &&
    css`
      padding-top: ${paddingTop};
    `
  }

  ${({paddingBottom}) => 
    paddingBottom &&
    css`
      padding-bottom: ${paddingBottom};
    `
  }

  ${({bgColor}) => 
    bgColor &&
    css`
      background-color: ${bgColor};
    `
  };

  ${({radius}) => 
    radius &&
    css`
      border-radius: ${radius};
    `
  };
  ${({borderBottom}) => 
    borderBottom &&
    css` 
      border-bottom: ${borderBottom};
    `
  };

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
