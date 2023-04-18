import React, { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import QuizCard from './QuizCard';
import { quizesThunks } from '../store/modules/quizes';

const QuizWrapper = styled(Box)(() => ({
  height: '100%',
}));

export default function QuizList() {
  const { filterQuizes } = useSelector((state) => state.quizesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(quizesThunks.fetchQuizes());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <QuizWrapper>
      <h2 style={{
        paddingTop: '40px',
        color: 'rgb(7,60,42)',
        fontSize: '30px',
        margin: 'auto',
        textAlign: 'center',
      }}
      >
        Choose a quiz and test your knowledge!
      </h2>
      <div className='favourite'>
        {filterQuizes.map((quiz, index) => (
          <QuizCard
            sx={{
              boxShadow: '10px 10px 42px 0 rgba(0, 0, 0, 0.75)',
            }}
            key={index}
            quizName={quiz.nameQuiz}
            id={quiz.id}
            quizImage={quiz.avatar}
            quizDescription={quiz.description}
          />
        ))}
    </div>
    </QuizWrapper>
  );
}
