import { Button as NativeBaseButton, IButtonProps } from 'native-base'
import * as S from './styles'

interface Props extends IButtonProps {
  text: string
}

export function Button({ text, ...rest }: Props) {
  return (
    <NativeBaseButton w="full" {...rest} testID="button">
      <S.Text>{text}</S.Text>
    </NativeBaseButton>
  )
}
