import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { Home } from '@pages/Home'
import { Events } from '@pages/Events'
import { Contact } from '@pages/Contact'
import { SignIn } from '@pages/SignIn'
import { SignUp } from '@pages/SignUp'

type AppRoutes = {
  contact: undefined
  signin: undefined
  signup: undefined
  events: undefined
  home: undefined
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="events">
      <Screen name="home" component={Home} />
      <Screen name="events" component={Events} />
      <Screen name="contact" component={Contact} />
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />
    </Navigator>
  )
}
