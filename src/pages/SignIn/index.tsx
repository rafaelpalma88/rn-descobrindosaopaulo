import { useState } from 'react'
import { Input } from '@components/Input'
import {
  Center,
  Text,
  VStack,
  Pressable,
  Icon,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  View,
} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import LogoDisfrutaParaguay from '@assets/logoDisfrutaParaguay.svg'
import { Dimensions } from 'react-native'

export function SignIn() {
  const [cpfNumber, setCpfNumber] = useState<string | undefined>('')
  const [show, setShow] = useState(false)

  const navigation = useNavigation()

  function handleLogin() {
    return true
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      {/* <KeyboardAvoidingView
        behavior="padding" // Comportamento para ajustar a exibição ao abrir o teclado
        style={{ flex: 1 }}
      > */}
      <VStack flex={1} bg="gray.900">
        <Center
          style={{
            flex: 1,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          {/* <Text color="gray.100" fontSize="sm" style={{ marginBottom: 40 }}>
            Descobrindo São Paulo
          </Text> */}
          {/* <Image
            source={logoDescSp}
            style={{ width: '100%', height: 150, marginBottom: 20 }}
            resizeMode="cover"
            alt="Descobrindo São Paulo"
          /> */}
          <View marginBottom={30}>
            <LogoDisfrutaParaguay
              width={300} // Largura personalizada do SVG
              height={100} // Altura personalizada do SVG
            />
          </View>

          {/* <Input
            keyboardType="numeric"
            placeholder="CPF"
            value={cpfNumber}
            onChangeText={formatCPF}
            maxLength={14}
            // autoComplete="off"
            // mudar cor cursor quando está digitando para facilitar para o usuário
          /> */}
          <Input
            keyboardType="email-address"
            placeholder="E-mail"
            // value={email}
            // onChangeText={formatCPF}
            // maxLength={14}
            // autoComplete="off"
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
          <Button variant="solid" text="Entrar" onPress={handleLogin} />
        </Center>
        <Center
          style={{
            paddingTop: 30,
            paddingRight: 30,
            paddingBottom: 50,
            paddingLeft: 30,
          }}
        >
          <Text color="white" style={{ marginTop: 10, marginBottom: 10 }}>
            Ainda não tem acesso?
          </Text>
          <Button
            variant="outline"
            text="Solicite acesso"
            onPress={() => {
              navigation.navigate('signup')
            }}
          />
        </Center>
      </VStack>
      {/* </KeyboardAvoidingView> */}
    </ScrollView>
  )
}
