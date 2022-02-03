import styled from "styled-components/native"
import { Text } from '../atoms/Typography'

type Props = {
  title: string,
  imgUrl?: boolean,
}

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 58px;
  padding-right: 16px;
  padding-left: 16px;
`
const Image = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 100px;
`

const Header = ({title, imgUrl}: Props) => {
  return(
    <HeaderWrapper>
      <Text
        size='34px'
        weight={600}
        lineHeight="40"
      >
        {title}
      </Text>
      {imgUrl 
        ? <Image source={require('../atoms/images/68016194.jpeg')}/>
        : null
      }
    </HeaderWrapper>
  )
}

export default Header