import { useEffect, useState } from 'react'
import {
  FlatList,
  // ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

interface IParticipant {
  id: string
  name: string
}

export function Home() {
  const [participants, setParticipants] = useState<IParticipant[]>([])
  const [participant, setParticipant] = useState<string>('')
  const [idIncrement, setIdIncrement] = useState<number>(1)

  async function handleParticipantAdd() {
    await setParticipants((state) => [
      ...state,
      { id: String(idIncrement), name: participant },
    ])
    await setIdIncrement((state) => state + 1)
    await setParticipant('')
  }

  async function handleParticipantRemove(id: string) {
    console.log(`Você clicou em remover o participante ${id}`)

    const newArrayParticipants = participants.filter(
      (participant) => participant.id !== id,
    )
    await setParticipants(newArrayParticipants)
  }

  useEffect(() => {
    console.log('participants', participants)
  }, [participants])

  useEffect(() => {
    console.log('participant', participant)
  }, [participant])

  useEffect(() => {
    console.log('idIncrement', idIncrement)
  }, [idIncrement])

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipant}
          value={participant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            name={item.name}
            onRemove={() => handleParticipantRemove(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View>
            <Text style={{ color: 'white' }}>Lista vazia</Text>
          </View>
        )}
      />
      {/* 
      Exemplo de ScrollView para futura consulta
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.length > 0 &&
          participants.map((participant) => {
            return (
              <Participant
                key={participant.id}
                name={participant.name}
                onRemove={() => handleParticipantRemove(participant.id)}
              />
            )
          })}
      </ScrollView> */}
    </View>
  )
}
