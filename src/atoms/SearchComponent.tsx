import { TextInput } from "react-native"
import styled from "styled-components/native"
import { Container } from "../utils/styles"
import { Feather, MaterialIcons } from '@expo/vector-icons'; 

const SearchBox = styled.TextInput`
  color: #A3A3A3;
  font-size: 17px;
  height: 22px;
  padding-left: 8px;
  margin-left: 8px;
  margin-right: 8px;
  flex: 1;
`

const Search = () => {
  return(
    <Container
      bgColor='rgba(120, 120, 128, 0.08)'
      height='36'
      radius='20px'
      align='center'
      row
      justify= 'space-between'
      paddingLeft='8'
      paddingRight='8'
      marginTop='16'
    >
      <Feather name="search" size={22} color="#A3A3A3" />
      <SearchBox 
        placeholder='Search'
        placeholderTextColor='#A3A3A3'
      />
      <MaterialIcons name="keyboard-voice" size={22} color="#A3A3A3" />
    </Container>
  )
}

export default Search