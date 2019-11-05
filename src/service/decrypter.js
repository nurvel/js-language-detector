import ngram from './ngramModel'
const plain = 'abcdefghijklmnopqrstuvwxyzåäö'.split('')
const ITERATIIONS = plain.length

const getLetter = (letter, increment) => {
  if (!plain.includes(letter.toLowerCase())) return letter

  const index = plain.indexOf(letter.toLowerCase())
  const newIndex = index + increment
  if (newIndex >= plain.length) {
    return plain[newIndex - plain.length]
  }
  return plain[index + increment]
}

const caesarCipher = (sentence, iteration) => {
  let decodedSentence = ''
  for (var i = 0; i < sentence.length; i++) {
    decodedSentence += getLetter(sentence.charAt(i), iteration)
    if (i === 0) decodedSentence = decodedSentence.toUpperCase()
  }
  return decodedSentence
}

export const decrypData = async (trainingData, cryptedData) => {
  await ngram.createModel(trainingData)

  const notSolved = cryptedData.bullshits.map(e => e.message)
  const solved = {}

  for (let i = 1; i < ITERATIIONS; i++) {
    notSolved.forEach(sentence => {
      const decryptCandidate = caesarCipher(sentence, i)
      const score = ngram.scoreSentence(decryptCandidate)

      if (solved[sentence] === undefined || solved[sentence].score < score) {
        solved[sentence] = {
          bullshit: sentence,
          solved: decryptCandidate,
          score: score
        }
      }
    })
  }

  let arranged = Object.values(solved).sort((a, b) => b.score - a.score)
  //arranged.forEach(x => console.log(x.solved, x.score))
  return arranged
}
