import axios from 'axios'
import { Text } from 'react-native'
import { Container } from './styles'
import { useEffect, useState } from 'react'
import { Event } from '../../components/Event'
import { IEvent } from '../../types/event'

export function Events() {
  const [events, setEvents] = useState<IEvent[]>([])

  useEffect(() => {
    async function getEvents() {
      try {
        // const result = await axios.get(
        //   `https://api-descobrindo-sao-paulo.herokuapp.com/events`,
        // )
        const result = await axios.get(`http://localhost:3000/events`)
        setEvents(result.data)
      } catch (error) {
        console.log(error)
      }
    }

    getEvents()
  }, [])

  useEffect(() => {
    console.log('events xxx', events)
  }, [events])

  return (
    <Container>
      <Text>Eventos</Text>

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
    </Container>
  )
}
