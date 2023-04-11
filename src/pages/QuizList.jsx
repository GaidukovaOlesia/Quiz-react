import React, { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import QuizCard from './QuizCard';
import { quizesThunks } from '../store/modules/quizes';

const QuizWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
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
      {filterQuizes.map((quiz, index) => (
        <QuizCard
          key={index}
          quizName={quiz.nameQuiz}
          id={index}
          quizImage={quiz.avatar}
          quizDescription={quiz.description}
        />
      ))}
    </QuizWrapper>
  );
}
