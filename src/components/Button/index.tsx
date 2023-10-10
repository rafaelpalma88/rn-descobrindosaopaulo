import * as S from './styles'
import { TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
  text: string
}

export function Button({ text }: Props) {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}
