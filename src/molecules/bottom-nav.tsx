import React, { ComponentType, useState } from "react";
import {View, StyleSheet, Text, TouchableHighlight, Pressable} from 'react-native'
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons'; 
import { useNavigate } from "react-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OnboardingScreen from "../screens/Onboarding-screen";
import ShopScreen from "../screens/Shop-screen";
import DiscoverScreen from "../screens/Discover-screen";
import AddToCartScreen from "../screens/AddToCart-screen";
import CheckoutScreen from "../screens/Checkout-screen";
import { generateId } from "../utils/generateId";
import NavBarIcons from "../atoms/vectors/NavBarIcon";

// type Props = {
//     screenName: string,
//     component: JSX.Element,
//     navIcon: JSX.Element,
//     navTitle: string,
//     isActive: boolean,
// }

const navItems: Array<{
  screenName: string,
  component: ComponentType<any>,
  navIcon: JSX.Element,
  navTitle: any,
  isActive: boolean,
}> = [
  {
    screenName: 'Onboarding',
    component: OnboardingScreen,
    navIcon: <Feather name="home" size={24} color="#3ebb68" />,
    navTitle: 'Home',
    isActive: true
  },
  {
    screenName: 'Shop',
    component: ShopScreen,
    navIcon: <Ionicons name="folder-open-sharp" size={24} color="#3ebb68" />,
    navTitle: 'Shop',
    isActive: false
  },
  {
    screenName: 'Discover',
    component: DiscoverScreen,
    navIcon: <Feather name="plus-square" size={24} color='#3ebb68' />,
    navTitle: 'Discover',
    isActive: false
  },
   {
    screenName: 'Add-to-cart',
    component: AddToCartScreen,
    navIcon: <AntDesign name="user" size={24} color='#3ebb68' />,
    navTitle: 'Add',
    isActive: false
  },
  {
    screenName: 'Checkout',
    component: CheckoutScreen,
    navIcon: <AntDesign name="user" size={24} color='#3ebb68' />,
    navTitle: 'Profile',
    isActive: false
  }
]

const TabBar = createBottomTabNavigator()

const BottomNav = () => {
  const [navList,setNavList] = useState(navItems)
  // const navigate = useNavigate()

  const toggleMenu = (index : number) =>{
    setNavList(navList.map((item, idx) => {
      if(idx === index){
        item.isActive = true
      }else{
        item.isActive = false
      } 
      return item
    }))
  }

  return(
    <TabBar.Navigator
      initialRouteName= 'Shop'
      screenOptions={{headerShown: false}}
    >
      {navList.map(({navIcon, navTitle, screenName, component}, index: number) => (
        <TabBar.Screen 
          key={`tab-key-${generateId()}`}
          name={screenName}
          component={component}
          options={{
            tabBarLabel: ({color, focused}) => (
              <Text style={{color: `${focused ? '#3ebb68' : 'grey'}`, fontWeight: 'bold'}}>{navTitle}</Text>
            ),
            tabBarIcon: ({focused}) => (
              <NavBarIcons focused={focused} index={index}/>
            )}
          }
        />
      ))}
    </TabBar.Navigator>
    // <View style={styles.navContainer}>
    //   {navList.map((nav, index) => {
    //     return(
    //      <Pressable 
    //       key={`nav-key-${index}`} 
    //       style={styles.navItemWrapper}
    //       onPress={() => toggleMenu(index)}
    //     >
    //       {nav.isActive 
    //        ? <Text style={styles.navTitle}>{nav.navTitle}</Text>
    //        : nav.navIcon
    //       }
    //       {nav.isActive && <View style={styles.dot}></View>}
    //     </Pressable>
    //     )
    //   })} 
    // </View>
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