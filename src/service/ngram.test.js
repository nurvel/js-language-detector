import Ngram from './ngram'

test('get ngrams', async () => {

  const ngram = new Ngram()

  const input = 'salamia taivaalta'
  let juttu = new Set()
  juttu.add('salam')
  juttu.add('alami')
  juttu.add('lamia')
  juttu.add('amia ')
  juttu.add('mia t')
  juttu.add('ia ta')
  juttu.add('a tai')
  juttu.add(' taiv')
  juttu.add('taiva')
  juttu.add('aivaa')
  juttu.add('ivaal')
  juttu.add('vaalt')
  juttu.add('aalta')

  let tulos = await ngram.getNgram(input)
  
  expect(tulos.size).toBe(juttu.size)
  expect(tulos).toEqual(juttu)
})

// test('Create Model', () => {})
