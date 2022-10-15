import React, { useState, useRef, useEffect } from 'react'
import data from '../data'
export const GlobalContext = React.createContext(null)

export default ({ children }) => {
  // ============= STATES ==============
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const [isClicked, setIsClicked] = useState(false)
  const [startGame, setStartGame] = useState(false)

  // ============= REFERENCES ==============
  const scoreRef = useRef()
  const playRef = useRef()

  // ============= FUNCTIONS ==============
  // ---question button---
  const handleClick = (isCorrect) => {
    setIsClicked(true) // for adding animation
    let nextQuestion = currentQuestion + 1
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
      setStartGame(true)
      setInterval(() => {
        scoreRef.current.classList.add('disapear')
      }, 3000)
    }

    if (isCorrect) {
      setScore(score + 1)
    } else {
      setScore(score)
    }
  }

  const play = () => {
    startGame(true)
    setShowScore(false)
    setCurrentQuestion(0)
    setScore(0)
  }

  useEffect(() => {
    window.localStorage.setItem('score', JSON.stringify(score))
  }, [score])

  useEffect(() => {
    const scoreValue = JSON.parse(window.localStorage.getItem('score'))
    setScore(scoreValue)
  }, [])

  const store = {
    currentQuestion: [currentQuestion, setCurrentQuestion],
    showScore: [showScore, setShowScore],
    score: [score, setScore],
    isClicked: [isClicked, setIsClicked],
    startGame: [startGame, setStartGame],
    handleClick,
    play,
    data,
    scoreRef,
    playRef,
  }

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  )
}
