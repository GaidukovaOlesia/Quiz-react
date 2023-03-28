import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { quiz } from '../api';
import QuizCard from './quizCard';

const QuizWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export default function QuizList() {
  const [quizData, setQuiz] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await quiz.fetch();
        setQuiz(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <QuizWrapper>
      {quizData.map((quiz, index) => (
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
