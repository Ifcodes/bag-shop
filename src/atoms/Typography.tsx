import styled from "styled-components/native";

type Props = {
  size?: string,
  weight?: number | string,
  align?: 'left' | 'center' | 'right'
  color?: string,
  marginLeft?: string,
  marginRight?: string,
  marginTop?: string,
  marginBottom?: string
}

export const Text = styled.Text<Props>`
  font-size: ${({size}) => size || '16px'};
  color: ${({color}) => color || '#000000'};
  font-weight: ${({weight}) => weight || 400};
  text-align:  ${({align}) => align || 'left'};
  margin-top: ${({marginTop}) => marginTop || '0'}px;
  margin-left: ${({marginLeft}) => marginLeft || '0'}px;
  margin-bottom: ${({marginBottom}) => marginBottom || '0'}px;
  margin-right: ${({marginRight}) => marginRight || '0'}px;
`