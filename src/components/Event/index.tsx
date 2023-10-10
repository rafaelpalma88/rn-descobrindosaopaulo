import { Linking } from 'react-native'
import { IEvent } from '../../types/event'
import * as S from './styles'
import { getDayOfWeek } from '../../utils/getDayOfWeek'
import { getDay } from '../../utils/getDay'
import { getMonth } from '../../utils/getMonth'
import { getHourAndMinutes } from '../../utils/getHour'
import { Button } from '../Button'
import { firstLetterUppercase } from '../../utils/firstLetterUppercase'

export function Event({
  id,
  active,
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
      <Button text="Fale com o organizador" />
    </S.Container>
  )
}
