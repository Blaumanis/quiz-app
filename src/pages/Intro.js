import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

const Intro = () => {
  const {
    startGame,
    score,
    play,
    data,
    scoreRef,
    playRef,
  } = useContext(GlobalContext)

  return (
    <>
      <div className='end-container'>
        {startGame[0] ? (
          <p ref={scoreRef} className='score'>
            You scored {score[0]} out of {data.length}
          </p>
        ) : (
          <></>
        )}
        <Link
          to='/questions'
          ref={playRef}
          className='play'
          onClick={() => play()}
        >
          Play
        </Link>
      </div>
    </>
  )
}

export default Intro
