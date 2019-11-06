import Ngram from './ngram'

const alfabet = 'abcdefghijklmnopqrstuvwxyzåäö'.split('')
const ITERATIIONS = alfabet.length

export const getLetter = (letter, increment) => {
  if (!alfabet.includes(letter.toLowerCase())) return letter

  const index = alfabet.indexOf(letter.toLowerCase())
  const newIndex = index + increment
  if (newIndex >= alfabet.length) {
    return alfabet[newIndex - alfabet.length]
  }
  return alfabet[index + increment]
}

export const caesarCipher = (sentence, iteration) => {
  let decodedSentence = ''
  for (var i = 0; i < sentence.length; i++) {
    decodedSentence += getLetter(sentence.charAt(i), iteration)
    if (i === 0) decodedSentence = decodedSentence.toUpperCase()
  }
  return decodedSentence
}

export const decrypData = async (trainingData, cryptedData) => {

  const ngram = new Ngram()
  await ngram.createModel(trainingData.trainingdata)

  const notSolved = cryptedData.bullshits.map(e => e.message)
  const solved = {}

  for (let i = 1; i < ITERATIIONS; i++) {

    for (let message of notSolved) {
      const decryptCandidate = caesarCipher(message, i)
      const score =  await ngram.scoreSentence(decryptCandidate)

      if (solved[message] === undefined || solved[message].score < score) {
        solved[message] = {
          bullshit: message,
          solved: decryptCandidate,
          score: score
        }
      }
    }

  }

  let arranged = Object.values(solved).sort((a, b) => b.score - a.score)
  return arranged
}
