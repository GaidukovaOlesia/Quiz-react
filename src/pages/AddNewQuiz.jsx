import React from 'react';
import { Box, styled } from '@mui/material';

const QuizWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  height: '100vh',
}));

export default function AddNewQuiz() {
  return (
    <QuizWrapper>
      <h2>Add new quiz</h2>
    </QuizWrapper>
  );
}
