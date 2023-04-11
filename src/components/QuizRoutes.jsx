import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GridTemplate from './Templates/GridTemplate';
import Quiz from '../pages/Quiz';
import QuizList from '../pages/QuizList';
import AddNewQuiz from '../pages/AddNewQuiz';
import Favourites from '../pages/Favourites';

export default function QuizRoutes() {
  return (
    <GridTemplate>
      <Routes>
        <Route index element={ <QuizList /> } path='/'/>
        <Route path='/' element={<QuizList />}/>
        <Route path='create' element={<AddNewQuiz />}/>
        <Route path='favourites' element={<Favourites />}/>
        <Route path='/:name' element={<Quiz />}/>
      </Routes>
    </GridTemplate>
  );
}
