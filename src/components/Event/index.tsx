import { Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { IEvent } from '../../@types/event' // aquinao funcinou o path mapping
import { getDayOfWeek } from '@utils/getDayOfWeek'
import { getDay } from '@utils/getDay'
import { getMonth } from '@utils/getMonth'
import { getHourAndMinutes } from '@utils/getHour'
import { firstLetterUppercase } from '@utils/firstLetterUppercase'
import { Button } from '@components/Button'
import * as S from './styles'

export function Event({
  image,
  title,
  address,
  startDate,
  endDate,
  latitude,
  longitude,
}: IEvent) {
  function openGoogleMaps(latitude: string, longitude: string) {
    const url = `geo:${latitude},${longitude}`
    Linking.openURL(url)
  }

  const navigation = useNavigation()

  function handleContactOrganizer() {
    navigation.navigate('contact')
  }

  return (
    <S.Container>
      <S.EventTitle>{title}</S.EventTitle>
      <S.CustomText>
        {firstLetterUppercase(getDayOfWeek(startDate))} - {getDay(startDate)}/
        {getMonth(startDate)} das {`${getHourAndMinutes(startDate)}`} as{' '}
        {`${getHourAndMinutes(endDate)}`}
      </S.CustomText>
      <S.CustomText>Endereço: {address}</S.CustomText>
      <Button
        text="Abrir o endereço"
        onPress={() => openGoogleMaps(latitude, longitude)}
      />
      <Button
        onPress={handleContactOrganizer}
        testID="contact-organizer"
        text="Fale com o organizador"
      />
    </S.Container>
  )
}
