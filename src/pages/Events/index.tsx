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
          // `http://10.0.2.2:3000/events`,
        )
        // console.log('result xxx', result)
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

      {/* Caso haja erro na API, fazer um tratamento e exibir na tela */}
    </S.Container>
  )
}
