let profile
const CUTOFF = 5

export const createModel = async trainingData => {
  console.log('Start create model')
  return new Promise(async (resolve, reject) => {
    try {
      profile = getNgram(trainingData)
      resolve(profile)
    } catch (error) {
      reject(error)
    }
  })
}

const getNgram = text => {
  let ngrams = new Set()

  for (let i = 0; i <= text.length - CUTOFF; i++) {
    let gram = text.substring(i, i + CUTOFF)
    ngrams.add(gram.toLowerCase())
  }

  return ngrams
}

export const scoreSentence = message => {
  const sentenceProfile = getNgram(message)

  let score = 0
  sentenceProfile.forEach(x => {
    if (profile.has(x)) score++
  })
  return (score / sentenceProfile.size) * 100
}
