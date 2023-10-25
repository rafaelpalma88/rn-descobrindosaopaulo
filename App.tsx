/* eslint-disable camelcase */
import { SafeAreaView, StatusBar } from 'react-native'
import { Routes } from './src/routes'
import useCustomTheme from '@hooks/useCustomTheme'
import { ThemeProvider } from 'styled-components'
import lightTheme from './src/themes/light'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <>
      {/* Verificar se está certo este SafeAreaView */}
      {/* <SafeAreaView> */}
      <ThemeProvider theme={lightTheme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>

      {/* </SafeAreaView> */}
    </>
  )
}
