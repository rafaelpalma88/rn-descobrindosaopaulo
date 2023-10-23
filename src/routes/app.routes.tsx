import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/Home'
import { Events } from '../pages/Events'
import { Contact } from '../pages/Contact'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="events" component={Events} />
      <Screen name="contact" component={Contact} />
    </Navigator>
  )
}
