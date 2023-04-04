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
import CreateModal from '../components/Dialogs/CreateModal';

export default function QuizCard({ quizName, quizImage, quizDescription }) {
  const [open, setOpenModal] = useState(false);
  const pathToQuiz = quizName.toLowerCase();

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
                <Typography gutterBottom variant='h5' component='div'>
                  {quizName}
                </Typography>
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
