import { Center, Spinner, VStack } from 'native-base'

export function Loading() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Center style={{ flex: 1, paddingLeft: 30, paddingRight: 30 }} my={24}>
        <Spinner color="white" size="lg" />
      </Center>
    </VStack>
  )
}
