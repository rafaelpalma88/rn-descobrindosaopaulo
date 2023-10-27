import { Button, HStack, Heading, VStack } from 'native-base'
import { EvilIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { limitLetters } from '@utils/limitLetters'

interface Props {
  title: string
}

export function Header({ title }: Props) {
  const navigation = useNavigation()
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      {/* <Icon as={ChevronLeftIcon} size="5" color="coolGray.800" /> */}
      <Button
        size={8}
        bg="transparent"
        borderColor="red.700"
        borderWidth={1}
        justifyContent="center"
        alignItems="center"
        onPress={() => {
          navigation.navigate('events')
        }}
      >
        <EvilIcons name="chevron-left" size={36} color="white" />
      </Button>
      {/* <VStack pl={2}> */}
      <Heading pl={2} borderColor="red.700" borderWidth={1} color="gray.100">
        {limitLetters(title, 20)}
      </Heading>
      {/* </VStack> */}
    </HStack>
  )
}
