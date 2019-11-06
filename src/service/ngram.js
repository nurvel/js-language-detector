export default class Ngram {
  constructor  () {
    this.languageProfile = null
    this.CUTOFF = 5
  }

  createModel = async trainingData => {
    console.log('Start create model')
    return new Promise(async (resolve, reject) => {
      try {
        this.languageProfile = await this.getNgram(trainingData)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }

  getNgram = async text => {
    let ngrams = new Set()

    for (let i = 0; i <= text.length - this.CUTOFF; i++) {
      let gram = text.substring(i, i + this.CUTOFF)
      ngrams.add(gram.toLowerCase())
    }

    return ngrams
  }

  scoreSentence = async decryptCandidate => {
    const decryptCandidateProfile = await this.getNgram(decryptCandidate)

    let score = 0
    decryptCandidateProfile.forEach(x => {
      if (this.languageProfile.has(x)) score++
    })
    return (score / decryptCandidateProfile.size) * 100
  }
}
