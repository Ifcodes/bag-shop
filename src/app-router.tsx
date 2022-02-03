import { Navigate, Route, Routes } from "react-router"
import BottomNav from "./molecules/bottom-nav"
import AddToCartScreen from "./screens/AddToCart-screen"
import CheckoutScreen from "./screens/Bag-screen"
import DiscoverScreen from "./screens/Discover-screen"
import OnboardingScreen from "./screens/Onboarding-screen"
import ShopScreen from "./screens/Main-screen"
import { SafeViewContainer } from "./utils/styles"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const {Navigator, Screen} = createNativeStackNavigator()

const AppRouter = () => {
  return(
    <Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name='Onboarding'
        component={OnboardingScreen}
      />
      <Screen 
        name='BottomNav'
        component={BottomNav}
      />
    </Navigator>

  )
}

export default AppRouter