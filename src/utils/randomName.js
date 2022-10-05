export const randomName = (array) => {
  const initialComputerAnswer = array[Math.floor(Math.random() * array.length)]

  return initialComputerAnswer
}
