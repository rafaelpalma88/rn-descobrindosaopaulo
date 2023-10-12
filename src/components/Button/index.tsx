import * as S from './styles'
import { TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
  text: string
}

export function Button({ text, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}
