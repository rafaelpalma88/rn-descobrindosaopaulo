import { Button, Linking, Text, TouchableOpacity } from 'react-native'
import { IEvent } from '../../types/event'
import { Container, CustomText } from './styles'
import { getDayOfWeek } from '../../utils/getDayOfWeek'
import { getDay } from '../../utils/getDay'
import { getMonth } from '../../utils/getMonth'
import { getHourAndMinutes } from '../../utils/getHour'

export function Event({
  id,
  active,
  image,
  title,
  address,
  description,
  startDate,
  endDate,
  latitude,
  longitude,
}: IEvent) {
  function openGoogleMaps(latitude: string, longitude: string) {
    const url = `geo:${latitude},${longitude}`
    console.log('url', url)
    Linking.openURL(url)
  }

  return (
    <Container>
      <CustomText>
        {getDayOfWeek(startDate)} - {getDay(startDate)}/{getMonth(startDate)}
      </CustomText>
      <CustomText>
        das {`${getHourAndMinutes(startDate)}`} as{' '}
        {`${getHourAndMinutes(endDate)}`}
      </CustomText>
      {/* <CustomText>Sábado - 29/ABR - das 19h as 22h</CustomText> */}
      <CustomText>{title}</CustomText>
      <CustomText>Descrição: {description}</CustomText>
      <CustomText>Endereço: {address}</CustomText>
      <TouchableOpacity onPress={() => openGoogleMaps(latitude, longitude)}>
        <Text>Abrir endereço</Text>
      </TouchableOpacity>
      <CustomText>Fale com o organizador</CustomText>
    </Container>
  )
}
