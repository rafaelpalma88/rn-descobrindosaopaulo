import { limitLetters } from '.'

describe('Utils: limitLetters', () => {
  const text = 'Texto de exemplo'

  it('should convert Date to two yeats digit', () => {
    const value = limitLetters(text, 5)
    expect(value).toBe('Texto...')
  })
})
