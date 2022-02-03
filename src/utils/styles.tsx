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
  border?: boolean,
  radius?: string,
  align?: string,
  justify?: string,
  marginLeft?: string,
  marginRight?: string,
  marginTop?: string,
  marginBottom?: string,
  borderBottomColor?: boolean,
  bdBottomWidth?: string,
  borderWidth?: string,
  flex?: number,
  shadow?: boolean,
}>`
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  align-items: ${({align}) => align || 'flex-start'};
  justify-content: ${({justify}) => justify || 'flex-start'};
  margin-top: ${({marginTop}) => marginTop || '0'}px;
  margin-right: ${({marginRight}) => marginRight || '0'}px;
  margin-left: ${({marginLeft}) => marginLeft || '0'}px;
  margin-bottom: ${({marginBottom}) => marginBottom || '0'}px;

  ${({flex}) => flex && css`
    flex: ${flex}
  `}

  ${({height}) => 
    height &&
    css` 
      height: ${height}px;
    `
  };

  ${({width}) => 
    width &&
    css` 
      width: ${width}px;
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
      padding-top: ${paddingTop}px;
    `
  }

  ${({paddingBottom}) => 
    paddingBottom &&
    css`
      padding-bottom: ${paddingBottom}px;
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
      border-radius: ${radius}px;
    `
  };
  ${({borderBottomColor}) => 
    borderBottomColor  &&
    css` 
      border-bottom-color: #7878804c;
    `
  };

  ${({bdBottomWidth}) => 
    bdBottomWidth  &&
    css` 
      border-bottom-width: ${bdBottomWidth};
    `
  };

  ${({border}) => 
    border  &&
    css` 
      border: 0.5px solid #7878804c;
    `
  };

  ${({shadow}) => 
    shadow  &&
    css` 
      box-shadow: 0px 1px 2px #00000014;
    `
  };
`

export const SafeViewContainer = styled.SafeAreaView<{
  bgColor?: string,
  bgImg?: string,
  dashboard?: boolean
}>`
  flex: 1;
  padding-top: ${({dashboard}) => dashboard 
    ? `${StatusBar.currentHeight || 0 + 10}px`
    : 0
  };

  

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
export const TouchableOpacity = styled.TouchableOpacity<{
  row?: boolean,
  align?: string;
  justifySelf?: string;
  justify?: string;
  bgColor?: string;
  radius?: string;
  width?: string;
  height?: string;
  paddingLeft?: string,
  paddingRight?: string,
  paddingTop?: string,
  paddingBottom?: string,
  marginLeft?: string,
  marginRight?: string,
  marginTop?: string,
  marginBottom?: string,
}>`
  margin-top: ${({marginTop}) => marginTop || 0}px;
  margin-bottom: ${({marginBottom}) => marginBottom || 0}px;
  margin-left: ${({marginLeft}) => marginLeft || 0}px;
  margin-right: ${({marginRight}) => marginRight || 0}px;
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  align-items: ${({align}) => align || 'flex-start'};
  ${({justify}) => justify && css` justify-content: ${justify}`};
  ${({bgColor}) => bgColor && css` background-color: ${bgColor}`};
  ${({radius}) => radius && css` border-radius: ${radius}px`};
  ${({width}) => width && css` width: ${width}px`};
  ${({height}) => height && css` height: ${height}px`};
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
      padding-top: ${paddingTop}px;
    `
  }

  ${({paddingBottom}) => 
    paddingBottom &&
    css`
      padding-bottom: ${paddingBottom}px;
    `
  }
`

export const ScrollContainer = styled.ScrollView<{
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
  flex?: number,
}>`
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  margin-top: ${({marginTop}) => marginTop || '0'}px;
  margin-right: ${({marginRight}) => marginRight || '0'}px;
  margin-left: ${({marginLeft}) => marginLeft || '0'}px;
  margin-bottom: ${({marginBottom}) => marginBottom || '0'}px;

  ${({flex}) => flex && css`
    flex: ${flex}
  `}

  ${({height}) => 
    height &&
    css` 
      height: ${height}px;
    `
  };

  ${({width}) => 
    width &&
    css` 
      width: ${width}px;
    `
  }

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
      padding-top: ${paddingTop}px;
    `
  }

  ${({paddingBottom}) => 
    paddingBottom &&
    css`
      padding-bottom: ${paddingBottom}px;
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
      border-radius: ${radius}px;
    `
  };
  ${({borderBottom}) => 
    borderBottom &&
    css` 
      border-bottom: ${borderBottom};
    `
  };

`