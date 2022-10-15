import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Question = () => {
  const {currentQuestion, isClicked, handleClick, data} = useContext(GlobalContext)

  return (
    <>
          <main key={data[currentQuestion[0]].id} className={isClicked[0] ? "question-container pop-up" : "question-container"}>
            <div className="question-segment">
              <h2 className="title">Question {data[currentQuestion[0]].id}<span>/{data.length}</span></h2>
              <h3>{data[currentQuestion[0]].question}</h3>
            </div>
            <div className="answer-segment">
              <ul className="answer-list">
                {data[currentQuestion[0]].answers.map((item,idx)=>{
                  return <li key={idx} onClick={()=> handleClick(item.isCorrect)} className="answer">{item.answer}</li>
                })}
              </ul>
            </div>
          </main>
    </>
  )
}

export default Question