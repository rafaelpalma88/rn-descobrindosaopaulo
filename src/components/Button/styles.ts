import { Button as NativeBaseButton } from 'native-base'
import styled from 'styled-components/native'

export const Container = styled(NativeBaseButton)`
  background-color: orange;
  color: black;
  padding: 10px 5px;
  border-radius: 10px;
`

export const Text = styled.Text`
  color: black;
  text-align: center;
`
