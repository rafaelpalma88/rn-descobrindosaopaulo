import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'
import { EventResume } from '@components/EventResume'
import { IEvent } from '../../@types/event'
import { events as eventsMock } from '../../../events'
import * as S from './styles'
import { Header } from '@components/Header'
import { Button, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from 'src/routes/app.routes'

export function EventsList() {
  const [events, setEvents] = useState<IEvent[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  useEffect(() => {
    async function getEvents() {
      try {
        const result = await axios.get(
          `https://api-descobrindosaopaulo.onrender.com/events`,
          // `http://localhost:3000/events`,
          // `http://127.0.0.1:3000/events`,
        )
        // resolver a questão do mock no expo-go
        // setEvents(result.data)
        setEvents(eventsMock)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getEvents()
  }, [])

  return (
    <>
      <Header title="Eventos" />
      <VStack flex={1}>
        <S.Container>
          {loading && (
            <View>
              <Text style={{ color: '#FFF' }}>Carregando eventos...</Text>
            </View>
          )}

          {!loading && events.length === 0 && (
            <View>
              <Text style={{ color: '#FFF' }}>Não há eventos cadastrados</Text>
            </View>
          )}

          <S.EventsList>
            {events
              .filter((event) => event.active)
              .map((event) => {
                return (
                  <EventResume
                    key={event.id}
                    id={event.id}
                    active={event.active}
                    image={event.image}
                    title={event.title}
                    address={event.address}
                    description={event.description}
                    startDate={event.startDate}
                    endDate={event.endDate}
                    latitude={event.latitude}
                    longitude={event.longitude}
                  />
                )
              })}
          </S.EventsList>

          {/* Caso haja erro na API, fazer um tratamento e exibir na tela */}
        </S.Container>
      </VStack>
    </>
  )
}
