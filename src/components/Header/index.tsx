import { Button, HStack, Heading, Icon, VStack } from 'native-base'
import { EvilIcons, Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { limitLetters } from '@utils/limitLetters'
import { AppNavigatorRoutesProps } from 'src/routes/app.routes'

interface Props {
  title: string
}

export function Header({ title }: Props) {
  const navigation = useNavigation<AppNavigatorRoutesProps>()
  return (
    <HStack bg="gray.600" paddingTop={6} pb={5} px={8} alignItems="center">
      <Button
        size={8}
        bg="transparent"
        justifyContent="center"
        alignItems="center"
        onPress={() => {
          navigation.navigate('events')
        }}
      >
        <Icon as={Entypo} name="chevron-left" size={26} color="gray.300" />
      </Button>
      <Heading pl={4} color="gray.100">
        {limitLetters(title, 20)}
      </Heading>
    </HStack>
  )
}
