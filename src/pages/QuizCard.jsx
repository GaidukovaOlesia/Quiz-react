import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import CreateModal from '../components/Dialogs/CreateModal';
import { quizesThunks } from '../store/modules/quizes';

export default function QuizCard({
  quizName,
  quizImage,
  quizDescription,
  id,
}) {
  const [open, setOpenModal] = useState(false);
  const pathToQuiz = quizName.toLowerCase();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleAddFavourite = async (e) => {
    setChecked(!checked);
    const body = {
      nameQuiz: quizName,
      avatar: quizImage,
      description: quizDescription,
      favourite: e.target.checked,
      id,
    };
    await dispatch(quizesThunks.putQuiz({ body, id }));
  };
  return (
        <>
          <Card sx={{
            width: 330,
            height: '400px',
            backgroundColor: '#bce7de',
            margin: '150px 50px 50px',
            borderRadius: '10px',
          }}>
            <CardMedia sx={{
              width: '100%',
              margin: 'auto',
              objectFit: 'none',
            }}
             component='img'
             alt='quiz'
             height='180'
             image={quizImage}
            />
            <CardContent>
              <div className='d-flex justify-between align-center'>
                <Typography gutterBottom variant='h5' component='div'>
                  {quizName}
                </Typography>
                <input
                  style={{ cursor: 'pointer', textDecoration: 'none' }}
                  type='checkbox'
                  checked={checked}
                  onChange={handleAddFavourite}
                >
                </input>
              </div>
                <Typography variant='body2' color='text.secondary'>
                  {quizDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                    to={`/quiz/${pathToQuiz}`}
                  >
                    Start quiz
                  </Link>
                  </Button>
                <Button size='small' onClick={() => setOpenModal(true)}>Show More</Button>
            </CardActions>
            </Card>
            <CreateModal
              open={open}
              handleClose={() => setOpenModal(false)}
              quizName={quizName}
              quizImage={quizImage}
              quizDescription={quizDescription}
            />
        </>
  );
}
