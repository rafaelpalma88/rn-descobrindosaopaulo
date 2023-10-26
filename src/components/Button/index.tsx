import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

interface Props extends IButtonProps {
  text: string
  variant?: 'solid' | 'outline'
}

export function Button({ text, variant = 'solid', ...rest }: Props) {
  return (
    <NativeBaseButton
      w="full"
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      testID="button"
      {...rest}
    >
      <Text
        color={variant === 'outline' ? 'green.700' : 'white'}
        fontFamily="heading"
        fontSize="sm"
      >
        {text}
      </Text>
    </NativeBaseButton>
  )
}
