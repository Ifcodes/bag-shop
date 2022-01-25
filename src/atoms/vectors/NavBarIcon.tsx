import { Feather, Ionicons, AntDesign } from '@expo/vector-icons'; 

type Props = {
  color?: string, 
  focused: boolean,
  index: number
}

const iconList = [
  <Feather name="home" size={24} color="#3ebb68" />,
  <Ionicons name="folder-open-sharp" size={24} color="#3ebb68" />,
  <Feather name="plus-square" size={24} color='#3ebb68' />,
  <AntDesign name="user" size={24} color='#3ebb68' />,
  <AntDesign name="user" size={24} color='#3ebb68' />
]

const NavBarIcons = ({focused, index}: Props) => {
  const iconList = [
  <Feather name="home" size={24} color={`${focused ? "#3ebb68" : 'grey'}`} />,
  <Ionicons name="folder-open-sharp" size={24} color={`${focused ? "#3ebb68" : 'grey'}`}/>,
  <Feather name="plus-square" size={24} color={`${focused ? "#3ebb68" : 'grey'}`} />,
  <AntDesign name="user" size={24} color={`${focused ? "#3ebb68" : 'grey'}`} />,
  <AntDesign name="user" size={24} color={`${focused ? "#3ebb68" : 'grey'}`} />
]
  return(
    <>
      {iconList.map((item, idx) => {
        if(index === idx) item
      })}
    </>
  )
}

export default NavBarIcons