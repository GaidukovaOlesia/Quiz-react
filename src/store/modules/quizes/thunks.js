import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { favouriteQuiz, newQuiz, quizes } from '../../../api';

const fetchQuizes = createAsyncThunk(`${moduleName}/fetchQuizes`, async () => {
  const { data } = await quizes.fetch();
  return data;
});

const postQuiz = createAsyncThunk(`${moduleName}/postQuiz`, async (body) => {
  const { data } = await newQuiz.fetch(body);
  return data;
});

const putQuiz = createAsyncThunk(`${moduleName}/putQuiz`, async ({ body, id }) => {
  const { data } = await favouriteQuiz.fetch(body, id);
  return data;
});

export default { fetchQuizes, postQuiz, putQuiz };
