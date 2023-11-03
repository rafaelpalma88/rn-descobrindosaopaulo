import { SignIn } from '@pages/SignIn'
import { SignUp } from '@pages/SignUp'
import { createNativeStackNavigator } from '@react-navigation/native-stack'




const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  )
}
