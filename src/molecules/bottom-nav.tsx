import { Feather, Ionicons, AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OnboardingScreen from "../screens/Onboarding-screen";
import MainScreen from "../screens/Main-screen"
import DiscoverScreen from "../screens/Discover-screen";
import AddToCartScreen from "../screens/AddToCart-screen";
import BagScreen from "../screens/Bag-screen";
// import { Text } from "../atoms/Typography"
import { Text } from 'react-native';
import ProfileScreen from '../screens/Profile-Screen';



const {Navigator, Screen} = createBottomTabNavigator()

const BottomNav = () => {

  return(
    <Navigator
      initialRouteName= 'OnboardingScreen'
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarInactiveBackgroundColor: ' rgba(247, 247, 247, 0.8)',
        tabBarActiveBackgroundColor: ' rgba(247, 247, 247, 0.8)',
        tabBarStyle: { height: 84, paddingBottom: 16},
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'grey'
      }}
    >
      
      <Screen 
        name='MainScreen'
        component={MainScreen}
        options={{
          tabBarLabel: ({color, focused}) => (
            <Text style={{color: `${focused ? '#0085FF' : 'grey'}`, fontWeight: 'bold'}}>Main</Text>
          ),
          tabBarIcon: ({focused}) => (
            <AntDesign name="appstore1" size={24} color={!focused ? '#A3A3A3' : '#0085FF'} />
          )
        }}
      />

      <Screen 
          name='Search'
          component={DiscoverScreen}
          options={{
            tabBarLabel: ({color, focused}) => (
              <Text style={{color: `${focused ? '#0085FF' : 'grey'}`, fontWeight: 'bold'}}>Search</Text>
            ),
            tabBarIcon: ({focused}) => (
              <Feather name="search" size={24} color={!focused ? '#A3A3A3' : '#0085FF'} />
            )
          }}
      />

      <Screen 
          name='Wishlist'
          component={AddToCartScreen}
          options={{
            tabBarLabel: ({color, focused}) => (
              <Text style={{color: `${focused ? '#0085FF' : 'grey'}`, fontWeight: 'bold'}}>Wishlist</Text>
            ),
            tabBarIcon: ({focused}) => (
              <Ionicons name="heart" size={24} color={!focused ? '#A3A3A3' : '#0085FF'} />
            )
          }}
      />

       <Screen 
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarLabel: ({color, focused}) => (
              <Text style={{color: `${focused ? '#0085FF' : 'grey'}`, fontWeight: 'bold'}}>Profile</Text>
            ),
            tabBarIcon: ({focused}) => (
              <FontAwesome5 name="user-alt" size={24} color={!focused ? '#A3A3A3' : '#0085FF'} />
            )
          }}
      />

       <Screen 
          name='Bag'
          component={BagScreen}
          options={{
            tabBarLabel: ({color, focused}) => (
              <Text style={{color: `${focused ? '#0085FF' : 'grey'}`, fontWeight: 'bold'}}>Bag</Text>
            ),
            tabBarIcon: ({focused}) => (
              <MaterialIcons name="shopping-bag" size={24} color={!focused ? '#A3A3A3' : '#0085FF'} />
            )
          }}
      />

    </Navigator>
  )
}

export default BottomNav

