import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@pages/Home'
import { Events } from '@pages/Events'
import { Contact } from '@pages/Contact'
import { SignIn } from '@pages/SignIn'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="signin">
      <Screen name="home" component={Home} />
      <Screen name="events" component={Events} />
      <Screen name="contact" component={Contact} />
      <Screen name="signin" component={SignIn} />
    </Navigator>
  )
}
