let finnishProfile
const CUTOFF = 5

export const createModel = async trainingData => {
  console.log('Start create model')
  return new Promise(async (resolve, reject) => {
    try {
      finnishProfile = getNgram(trainingData)
      resolve(finnishProfile)
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

export const scoreSentence = decryptCandidate => {
  const decryptCandidateProfile = getNgram(decryptCandidate)

  let score = 0
  decryptCandidateProfile.forEach(x => {
    if (finnishProfile.has(x)) score++
  })
  return (score / decryptCandidateProfile.size) * 100
}
