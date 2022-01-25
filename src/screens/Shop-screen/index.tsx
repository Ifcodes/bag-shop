import Header from '../../atoms/Header'
import { SafeViewContainer } from '../../utils/styles'

export default function ShopScreen () {
  return(
    <SafeViewContainer bgColor='#F9F9F9' dashboard>
      <Header title='Shop' imgUrl='../../atoms/images/68016194.jpeg'/>
    </SafeViewContainer>
  )
}