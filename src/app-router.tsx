import { Navigate, Route, Routes } from "react-router"
import BottomNav from "./molecules/bottom-nav"
import AddToCartScreen from "./screens/AddToCart-screen"
import CheckoutScreen from "./screens/Checkout-screen"
import DiscoverScreen from "./screens/Discover-screen"
import OnboardingScreen from "./screens/Onboarding-screen"
import ShopScreen from "./screens/Shop-screen"
import { SafeViewContainer } from "./utils/styles"

const AppRouter = () => {
  return(
    <SafeViewContainer>
      <Routes>
        <Route path='/' element={<OnboardingScreen />}/>
        <Route path='/add-to-cart' element={<AddToCartScreen />}/>
        <Route path='/shop' element={<ShopScreen />}/>
        <Route path='/discover' element={<DiscoverScreen />}/>
        <Route path='/checkout' element={<CheckoutScreen />}/>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
      <BottomNav />
    </SafeViewContainer>

  )
}

export default AppRouter