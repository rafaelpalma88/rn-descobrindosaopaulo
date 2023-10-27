/* eslint-disable camelcase */
import { SafeAreaView, StatusBar } from 'react-native'
import { Routes } from './src/routes'
// import useCustomTheme from '@hooks/useCustomTheme'
// import { ThemeProvider } from 'styled-components'
import { theme } from './src/themes'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading'
import { NativeBaseProvider } from 'native-base'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <>
      {/* <SafeAreaView> */}
      <NativeBaseProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          // backgroundColor="transparent"
          // translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </NativeBaseProvider>
      {/* </SafeAreaView> */}
    </>
  )
}
