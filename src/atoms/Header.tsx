import styled from "styled-components/native"
import { Text } from './Typography'

type Props = {
  title: string,
  imgUrl?: string,
}

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 58px;
  padding-right: 16px;
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
      >
        {title}
      </Text>
      <Image source={{uri: imgUrl}} style={{width: 36, height:36}}/>
    </HeaderWrapper>
  )
}

export default Header