import styled, { css } from "styled-components/native";

export const Button = styled.Pressable<{
  onBoarding?: boolean,
  top?: string,
}>`
  width: 343px;
  height: 48px;
  border-radius: 10px;
  background-color: ${({onBoarding}) => onBoarding ? '#78788051' : '#0085FF'};
  align-items: center;
  justify-content: center;

  ${({top}) => top && 
    css`
      margin-top: ${top}px;
    `
  };
`