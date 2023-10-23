import { firstLetterUppercase } from '.'

describe('Utils: firstLetterUppercase', () => {
  it('should convert first letter to Uppercase', () => {
    const func = firstLetterUppercase('teste')
    expect(func).toBe('Teste')
  })

  it('should return text if a string is null', () => {
    const func = firstLetterUppercase(null)
    expect(func).toBe(null)
  })

  it('should return text if a string is empty', () => {
    const func = firstLetterUppercase('')
    expect(func).toBe('')
  })
})
