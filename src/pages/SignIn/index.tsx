import { useState } from 'react'
import { Input } from '@components/Input'
import { Center, Text, VStack, Pressable, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

export function SignIn() {
  const [cpfNumber, setCpfNumber] = useState<string | undefined>('')
  const [show, setShow] = useState(false)

  const formatCPF = (text: string) => {
    // Remove todos os caracteres não numéricos do texto
    const cleanedText = text.replace(/\D/g, '')

    // Aplica a máscara de CPF (XXX.XXX.XXX-XX)
    const formattedText = cleanedText.replace(
      /(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/,
      (match, p1, p2, p3, p4) => {
        let result = ''
        if (p1) result += p1
        if (p2) result += `.${p2}`
        if (p3) result += `.${p3}`
        if (p4) result += `-${p4}`
        return result
      },
    )

    setCpfNumber(formattedText)
  }
  return (
    <VStack flex={1} bg="gray.900">
      <Center style={{ flex: 1, paddingLeft: 30, paddingRight: 30 }} my={24}>
        <Text color="gray.100" fontSize="sm" style={{ marginBottom: 40 }}>
          Descobrindo São Paulo
        </Text>
        <Input
          keyboardType="numeric"
          placeholder="CPF"
          value={cpfNumber}
          onChangeText={formatCPF}
          maxLength={14}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={!show}
          autoCapitalize="none"
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? 'visibility' : 'visibility-off'}
                  />
                }
                size={5}
                mr="3"
                color="muted.400"
              />
            </Pressable>
          }
        />
      </Center>
    </VStack>
  )
}
