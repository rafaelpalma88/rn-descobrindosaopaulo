import styled from 'styled-components/native'
import { Spinner } from 'native-base'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.GRAY_700};
`

export const LoadIndicator = styled(Spinner).attrs((props) => ({
  color: props.theme.colors.WHITE,
  size: 'large',
}))``
