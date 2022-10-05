export const playText = (text) => {
  const uttarance = new SpeechSynthesisUtterance(text)
  uttarance.rate = 1
  uttarance.lang = 'tr'
  speechSynthesis.speak(uttarance)
}
