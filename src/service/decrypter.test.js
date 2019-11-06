import { getLetter, caesarCipher } from './decrypter'

test('getLetter returns right charachers', () => {
  expect(getLetter('a', 1)).toBe('b')
  expect(getLetter('e', 1)).toBe('f')
  expect(getLetter('ö', 1)).toBe('a')
  expect(getLetter('a', 2)).toBe('c')
  expect(getLetter('e', 2)).toBe('g')
  expect(getLetter('ö', 2)).toBe('b')
})

test('decodeData returns right centences', () => {
  expect(caesarCipher('Össöbj ös cövm', 1)).toBe('Attack at dawn')
  expect(caesarCipher('Ksqräl igqqäl näiqsr nmqicr', 2)).toBe(
    'Mustan kissan paksut posket'
  )
})

