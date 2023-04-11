import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import thunks from './thunks';

const initialState = {
  quiz: [],
  error: '',
};

/**
 * eslint-disable no param-reassign
 */
export const quizSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchQuiz.fulfilled, (state, { payload }) => {
      state.error = '';// eslint-disable-line no-param-reassign
      state.quiz = payload;// eslint-disable-line no-param-reassign
    });
    builder.addCase(thunks.fetchQuiz.rejected, (state, { payload }) => {
      state.error = payload;// eslint-disable-line no-param-reassign
    });
  },
});

export default quizSlice.reducer;
