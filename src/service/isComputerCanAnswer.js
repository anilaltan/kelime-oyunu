export const isComputerCanAnswer = (ratio) => {
  const answerPossibility = Math.floor(Math.random() * 100)
  if (answerPossibility > ratio) {
    return true
  }
  return false
}
