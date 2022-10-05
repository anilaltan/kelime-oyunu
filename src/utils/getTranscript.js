export const getTranscript = (event) => {
  for (let i = event.resultIndex; i < event.results.length; i += 1) {
    if (event.results[i].isFinal) {
      const { transcript } = event.results[i][0]

      return {
        isFinal: true,
        word: transcript.split(' ')[0]
      }
    }
  }

  return { isFinal: false, word: '' }
}
