import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/quiz_service';
import { ForwardingQuizType } from './Types/quiz_types';
import QuestionCard from './Components/QuestionCard';
import InputForm from './Components/InputForm';


function App() {

  let [quiz, setQuiz] = useState<ForwardingQuizType[]>([])
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setScore] = useState(0)
  let [showResult, setShowResult] = useState(false)
  let [restartWorker, setRestartWorker] = useState(0)
  let [numberOfQuestions, setNumberOfQuestions] = useState(0)
  let [levelOfDifficulty, setLevelOfDifficulty] = useState("")


  useEffect(() => {
    async function fetchData() {
      const questions: ForwardingQuizType[] = await getQuizDetails(numberOfQuestions, levelOfDifficulty);
      setQuiz(questions)
    }
    fetchData();
  }, [numberOfQuestions, levelOfDifficulty]);


  const handleSubmit = (e: React.FormEvent<EventTarget>, userAnswer: string) => {
    e.preventDefault();
    const currentQuestion: ForwardingQuizType = quiz[currentStep];
    if (userAnswer === currentQuestion.correct_answer) {
      setScore(++score);
    }
    if (currentStep !== quiz.length - 1)
      setCurrentStep(++currentStep);
    else {
      setShowResult(true);
    }
  }

  const handleInputSubmit = (level:string, questions:number) => {
    setNumberOfQuestions(questions)
    setLevelOfDifficulty(level)
  }


  const restartQuiz = () => {
    setRestartWorker(restartWorker+1)
    setCurrentStep(0)
    setScore(0)
    setShowResult(false)
    setNumberOfQuestions(0)
    setLevelOfDifficulty("")
  }


  if(!numberOfQuestions){
    return <InputForm callback={handleInputSubmit} />
  }


  if (!quiz.length)
    return <h3>Loading.. </h3>


  if(showResult){
    return (<div className="question-container result-container">
      <h2>Result</h2>

      <p className="result-text">
        You final score is 
          <b> {score}</b> out of <b>{quiz.length}</b>
      </p>
      <button onClick={restartQuiz} className="btn-restart">Restart Quiz</button>
    </div>)
  }


  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuestionCard
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
