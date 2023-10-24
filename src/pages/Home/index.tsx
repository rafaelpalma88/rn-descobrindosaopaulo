import { useEffect, useState } from 'react'
import {
  Alert,
  FlatList,
  // ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'
import { Button } from '../../components/Button'
import useCustomTheme from '../../hooks/useCustomTheme'

interface IParticipant {
  id: string
  name: string
}

export function Home() {
  const [participants, setParticipants] = useState<IParticipant[]>([])
  const [participant, setParticipant] = useState<string>('')
  const [idIncrement, setIdIncrement] = useState<number>(1)
  const { obtainTheme, changeTheme } = useCustomTheme()

  const currentTheme = obtainTheme()

  async function handleParticipantAdd() {
    // Empty participant
    if (participant === '') {
      return Alert.alert('Digite um nome', 'Você precisa preencher algo')
    }

    // Participant exists
    const participantExists = participants.filter(
      (item) => item.name === participant.trim(),
    )

    if (participantExists.length > 0) {
      return Alert.alert('Já existe', 'O participante já existe na lista')
    }

    // Add Participant
    await setParticipants((prevState) => [
      ...prevState,
      { id: String(idIncrement), name: participant.trim() },
    ])
    await setIdIncrement((state) => state + 1)
    await setParticipant('')
  }

  async function handleParticipantRemove(id: string, name: string) {
    console.log(`Você clicou em remover o participante ${id}`)

    // return console.warn('Teste x')
    // return console.error('Teste x')

    return Alert.alert(
      'Tem certeza?',
      `Tem certeza que deseja remover o participante ${name} ?`,
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: async () => {
            const newArrayParticipants = participants.filter(
              (participant) => participant.id !== id,
            )
            await setParticipants(newArrayParticipants)

            Alert.alert('Deletado!')
          },
        },
      ],
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          // onChangeText={setParticipant}
          onChangeText={(e) => setParticipant(e)}
          value={participant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {currentTheme === 'LIGHT' && <Text>Light</Text>}
      {currentTheme === 'DARK' && <Text>Dark</Text>}
      <Button text="Alterar tema" onPress={changeTheme} />

      <FlatList
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            name={item.name}
            onRemove={() => handleParticipantRemove(item.id, item.name)}
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
