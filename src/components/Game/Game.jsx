import Head from 'next/head'
import { useEffect, useState } from 'react'

import names from '@/data/names.json'
import { isComputerCanAnswer } from '@/service/isComputerCanAnswer'
import { getTranscript } from '@/utils/getTranscript'
import { playText } from '@/utils/playText'
import { randomName } from '@/utils/randomName'

export function Game() {
  const [computerAnswer, setComputerAnswer] = useState('')
  const [userAnswer, setUserAnswer] = useState('')

  const [usedNames, setUsedNames] = useState([])
  const [lastLetter, setLastLetter] = useState('')

  const [seconds, setSeconds] = useState(8)
  const [isActive, setIsActive] = useState(false)

  const [turnTitle, setTurnTitle] = useState('')

  const [gameStart, setGameStart] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [whoWin, setWhoWin] = useState('')

  let recognition
  if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.webkitSpeechRecognition
    recognition = new SpeechRecognition()

    recognition.continuous = true
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognition.lang = 'tr'
  }

  const endGame = (who) => {
    setGameOver(true)

    recognition.abort()
    if (who === 'user') {
      setWhoWin('Computer')
    }
    if (who === 'computer') {
      setWhoWin('User')
    }
  }

  const startGame = () => {
    setGameStart(true)
    const startingName = randomName(names)
    setComputerAnswer(startingName)
    playText(startingName)
    setUsedNames((array) => [...array, `${startingName} , `])
    setLastLetter(startingName.charAt(startingName.length - 1))
    setTurnTitle('User Turn!')
  }

  const computerPlay = (result) => {
    const firstLatter = result.charAt(result.length - 1)
    const found = randomName(
      names.filter(
        (name) => name.charAt(0) === firstLatter && !usedNames.includes(name)
      )
    )

    setComputerAnswer(found)
    setUsedNames((array) => [...array, `${found} , `])
    setLastLetter(found.charAt(found.length - 1))
    playText(found)
    setTurnTitle('User Turn!')
  }

  const checkUserAnswer = (result) => {
    setUserAnswer(result)

    if (
      lastLetter === result.charAt(0) &&
      !usedNames.includes(result) &&
      names.includes(result)
    ) {
      setUsedNames((array) => [...array, `${result} , `])
      setLastLetter(result.charAt(result.length - 1))
      setTurnTitle('Computer Turn!')
    } else {
      endGame('user')
    }
  }

  // Countdown timer
  useEffect(() => {
    let interval
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds - 1)
      }, 1000)
      if (seconds < 0) {
        if (turnTitle === 'User Turn!') {
          // endGame('user')

          setIsActive(false)
          recognition.stop()
        }
      }
    } else if (!isActive) {
      clearInterval(interval)
      setSeconds(8)
    }

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, seconds])

  // Game loop
  useEffect(() => {
    let timer

    if (gameStart) {
      if (turnTitle === 'User Turn!') {
        timer = setTimeout(() => {
          setIsActive(true)
          recognition.start()

          recognition.onresult = (event) => {
            const result = getTranscript(event)

            if (result.isFinal) {
              recognition.stop()
              setIsActive(false)
              const newUserAnswer = result.word.toLowerCase()

              checkUserAnswer(newUserAnswer)
            }
          }
        }, 1500)
      } else if (turnTitle === 'Computer Turn!') {
        const answerPossibility = isComputerCanAnswer(30)

        if (answerPossibility) {
          const waitComputer = Math.floor(Math.random() * 7000) + 2000

          setIsActive(true)

          timer = setTimeout(() => {
            setIsActive(false)
            computerPlay(userAnswer)
          }, waitComputer)
        } else {
          endGame('computer')
        }
      }
    }
    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turnTitle])

  const reset = () => {
    setComputerAnswer('')
    setUserAnswer('')
    setLastLetter('')
    setWhoWin('')
    setTurnTitle('')
    setUsedNames([])
    setGameOver(false)

    setTimeout(() => startGame(), 1000)
  }

  return (
    <div>
      <Head>
        <title>Kelime Oyunu</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {gameStart && gameOver ? (
        <button type="button" onClick={reset}>
          Play Again
        </button>
      ) : (
        <button
          type="button"
          onClick={startGame}
          disabled={gameStart}
          className="btn"
        >
          Start Game
        </button>
      )}

      {whoWin ? (
        <h3>
          {whoWin} kazandı, ilerlenen zincir sayisı: {usedNames.length}
        </h3>
      ) : (
        <>
          <h1>{turnTitle}</h1>
          <h2 className=".h2">{seconds}</h2>
        </>
      )}

      <p>Computer Answer: {computerAnswer}</p>
      <p>User Answer: {userAnswer}</p>
      <p>kullanılan kelimeler: {usedNames}</p>
    </div>
  )
}
