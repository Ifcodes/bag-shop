import styled from "styled-components/native";

type Props = {
  size?: string,
  weight?: number,
  align?: 'left' | 'center' | 'right'
  color?: string,
  // fontFamily?: string,
}

export const Text = styled.Text<Props>`
  font-size: ${({size}) => size || '16px'};
  color: ${({color}) => color || '#000000'};
  font-weight: ${({weight}) => weight || 400};
  text-align:  ${({align}) => align || 'left'};
`