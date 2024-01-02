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
import { useForm, Controller } from 'react-hook-form'
import { AuthNavigatorRoutesProps } from 'src/routes/auth.routes'

type FormDataProps = {
  email: string
  password: string
}

export function SignIn() {
  const [show, setShow] = useState(false)

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function handleSignIn({ email, password }: FormDataProps) {
    console.log('email -> ', email)
    console.log('password -> ', password)

    // setIsLoading(true)

    // try {
    //   signIn(email, password)
    // } catch(error) {
    //   const isAppError = error instanceof AppError

    //   const title = isAppError ? error.message : 'Não foi possivel entrar. Tente novamente mais tarde.'

    //   toast.show({
    //     title,
    //     placement: 'top',
    //     bgColor: 'red.500'
    //   })
    // } finally {
    //   setIsLoading(false)
    // }
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
          <View marginBottom={30}>
            <LogoDisfrutaParaguay
              width={300} // Largura personalizada do SVG
              height={100} // Altura personalizada do SVG
            />
          </View>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              //  mudar cor cursor quando está digitando para facilitar para o usuário
              <Input
                placeholder="E-mail"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
              />
            )}
            name="email"
          />
          {errors.email && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
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
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          <Button
            variant="solid"
            text="Entrar"
            onPress={handleSubmit(handleSignIn)}
          />
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
