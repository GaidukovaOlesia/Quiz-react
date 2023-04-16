import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { jsQuiz } from '../../../api';

const fetchQuiz = createAsyncThunk(`${moduleName}/fetchQuiz`, async (name, thunkAPI) => {
  try {
    const { data } = await jsQuiz.fetch(name);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Page in progress');
  }
});

export default { fetchQuiz };
