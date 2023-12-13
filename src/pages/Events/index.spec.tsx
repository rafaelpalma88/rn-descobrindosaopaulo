import { NavigationContainer } from '@react-navigation/native'
import { Events } from '.'
import { render, screen } from '@testing-library/react-native'

describe('Pages: Events', () => {
  it('should render Events page', () => {
    const { debug } = render(
      <NavigationContainer>
        <Events />
      </NavigationContainer>,
    )
    debug()
  })
})
