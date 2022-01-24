import React, { useState } from "react";
import {View, StyleSheet, Text, TouchableHighlight, Pressable} from 'react-native'
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons'; 
import { useNavigate } from "react-router";

const navItems = [
  {
    navIcon: <Feather name="home" size={24} color="#3ebb68" />,
    navPath: '/',
    navTitle: 'Home',
    isActive: true
  },
  {
    navIcon: <Ionicons name="folder-open-sharp" size={24} color="#3ebb68" />,
    navPath: '/shop',
    navTitle: 'Shop',
    isActive: false
  },
  {
    navIcon: <Feather name="plus-square" size={24} color='#3ebb68' />,
    navPath: '/discover',
    navTitle: 'Discover',
    isActive: false
  },
   {
    navIcon: <AntDesign name="user" size={24} color='#3ebb68' />,
    navPath: '/add-to-cart',
    navTitle: 'Add',
    isActive: false
  },
  {
    navIcon: <AntDesign name="user" size={24} color='#3ebb68' />,
    navPath: '/checkout',
    navTitle: 'Profile',
    isActive: false
  }
]

const BottomNav = () => {
  const [navList,setNavList] = useState(navItems)
  const navigate = useNavigate()

  const toggleMenu = (index : number) =>{
    setNavList(navList.map((item, idx) => {
      if(idx === index){
        navigate(item.navPath)
        item.isActive = true
      }else{
        item.isActive = false
      } 
      return item
    }))
  }

  return(
    <View style={styles.navContainer}>
      {navList.map((nav, index) => {
        return(
         <Pressable 
          key={`nav-key-${index}`} 
          style={styles.navItemWrapper}
          onPress={() => toggleMenu(index)}
        >
          {nav.isActive 
           ? <Text style={styles.navTitle}>{nav.navTitle}</Text>
           : nav.navIcon
          }
          {nav.isActive && <View style={styles.dot}></View>}
        </Pressable>
        )
      })} 
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center', 
    backgroundColor: "white", 
    paddingVertical: 16,
  },
  navTitle: {
    color: '#3ebb68',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  navItemWrapper: {
    alignItems: "center",
  },
  dot: {
    backgroundColor: '#3ebb68',
    width: 10,
    height: 10,
    borderRadius: 100,
  }
})