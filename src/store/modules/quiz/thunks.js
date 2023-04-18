import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { quiz } from '../../../api';

const fetchQuiz = createAsyncThunk(`${moduleName}/fetchQuiz`, async (name, thunkAPI) => {
  try {
    const { data } = await quiz.fetch(name);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Page in progress');
  }
});

export default { fetchQuiz };
