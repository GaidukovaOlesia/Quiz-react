import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Timer from '../components/Timer/Timer';
import { quizThunks } from '../store/modules/quiz';

const QuizWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100vh',
  padding: '20px',
}));

export default function Quiz() {
  const { name } = useParams();
  const { quiz, error } = useSelector((state) => state.quizReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  useEffect(() => {
    (async () => {
      try {
        await dispatch(quizThunks.fetchQuiz(name));// eslint-disable-next-line react-hooks/exhaustive-deps
      } catch (err) {
        // setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    )();
  }, []);

  if (loading) return (<div style={{ height: '100vh' }}>Loading...</div>);
  console.log(error);
  if (error === '' && quiz) {
    return (<QuizWrapper>
      <div className='container__quiz'>
        <div className='quiz__wrapper'>
          <Timer
            restart={restart}
          />
          <div className='quiz' key={quiz.id}>
            {
              showScore
                ? <div className='section__score'>
                  <div>Correct answers {score} out of {quiz.length}</div>
                  <div style={{ marginBottom: '20px', fontSize: '60px' }}>Congratulations!</div>
                </div>
                : <div className='quiz__section'>
                  <div className='question__section'>
                    <div className='question__count'>
                      <span>Вопрос {currentQuestion + 1} </span> / {quiz.length}
                    </div>
                    <div className='question__text'>{quiz[currentQuestion].questionText}</div>
                    <p className='score'>Score: {score}</p>
                  </div>
                  <div className='answer__section'>
                    {quiz[currentQuestion].answerOptions.map((answer) => (
                      <button
                        className='answer__btn'
                        onClick={() => handleAnswerOptionClick(answer.isCorrect)}
                        key={answer}>{answer.answerText}</button>
                    ))}
                  </div>
                </div>
            }
          </div>
        </div>
        <div className='image'>
          <img className='img' src={`/images/${name}.png`} alt='photo'/>
        </div>
      </div>
    </QuizWrapper>);
  }
  if (error === 'Page in progress') return (<div style={{ height: '100vh' }}>Page in Progress ...</div>);
}
