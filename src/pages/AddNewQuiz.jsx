import React from 'react';
import {
  Box,
  Stack,
  styled,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { quizRules } from '../constants/rules';
import { InputText } from '../components/Forms/InputText';
import { quizesThunks } from '../store/modules/quizes';

const QuizWrapper = styled(Box)(() => ({
  height: '100vh',
}));

const FormStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '600px',
  borderRadius: '10px',
  margin: 'auto',
  backgroundColor: '#bce7de',
  boxShadow: '10px 10px 42px 0 rgba(0, 0, 0, 0.75)',
  boxSizing: 'border-box',
  padding: '15px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const FormStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginBottom: theme.spacing(3),
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {},
  '& > *:last-of-type': {
    marginBottom: theme.spacing(4),
  },
}));

export default function AddNewQuiz() {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch(quizesThunks.postQuiz(data));
    console.log('Form submitted', data);
  };
  return (
    <QuizWrapper>
      <h2 style={{
        paddingTop: '40px',
        color: 'rgb(7,60,42)',
        fontSize: '30px',
        margin: ' 0 auto 60px',
        textAlign: 'center',
      }}
      >
        Add new quiz
      </h2>
      <FormStyled>
        <FormStack>
          <InputText
            fullWidth
            control={control}
            name='nameQuiz'
            label='NameQuiz'
            rules={quizRules.nameQuiz}
          />
          <InputText
            fullWidth
            required
            name='avatar'
            control={control}
            rules={quizRules.avatar}
            label='Avatar'
            margin='normal'
          />
          <InputText
            fullWidth
            required
            name='description'
            control={control}
            rules={quizRules.description}
            label='Description'
            margin='normal'
          />
          <Button
            sx={{
              color: 'rgb(7,60,42)',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
            fullWidth
            size='large'
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </FormStack>
      </FormStyled>
    </QuizWrapper>
  );
}
