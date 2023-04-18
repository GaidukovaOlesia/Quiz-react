import React, { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { quizesThunks } from '../store/modules/quizes';
import QuizCard from './QuizCard';

const FavouritesWrapper = styled(Box)(() => ({
  height: '100%',
}));

export default function Favourites() {
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
    <FavouritesWrapper>
      <h2 style={{
        paddingTop: '40px',
        color: 'rgb(7,60,42)',
        fontSize: '30px',
        margin: 'auto',
        textAlign: 'center',
      }}
      >Favourites</h2>
      <div className='favourite'>
        {filterQuizes.map((quiz, index) => {
          if (quiz.favourite === true) {
            return (
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
            );
          }
          return null;
        })}
    </div>
    </FavouritesWrapper>
  );
}
