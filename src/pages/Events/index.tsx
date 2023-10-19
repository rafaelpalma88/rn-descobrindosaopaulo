import axios from 'axios'
import { Text, View } from 'react-native'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { Event } from '../../components/Event'
import { IEvent } from '../../types/event'
import { events as eventsMock } from '../../../test'

export function Events() {
  const [events, setEvents] = useState<IEvent[]>([])
  const [loading, setLoading] = useState<boolean>(true)

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
    <S.Container>
      <S.Title>Eventos</S.Title>

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
              <Event
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
  )
}
