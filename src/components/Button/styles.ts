import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  flex: 1;
  background-color: orange;
  color: black;
  padding: 10px 5px;
  border-radius: 10px;
`

export const Text = styled.Text`
  color: black;
  text-align: center;
`
