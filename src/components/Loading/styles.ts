import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.GRAY_700};
`

export const LoadIndicator = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.colors.WHITE,
  size: 'large',
}))``
