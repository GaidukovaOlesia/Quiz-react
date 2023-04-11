import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import thunks from './thunks';
import actions from './actions';

const initialState = {
  filterQuizes: [],
  quizes: [],
};

/**
 * eslint-disable no param-reassign
 */
export const quizesSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterQuizes, (state, { payload }) => {
      if (payload.search === '') {
        state.filterQuizes = state.quizes; // eslint-disable-line no-param-reassign
      } else {
        state.filterQuizes = state.quizes.filter((quiz) => quiz.nameQuiz.toLowerCase().indexOf(payload.search.toLowerCase()) >= 0); // eslint-disable-line no-param-reassign
      }
    });
    builder.addCase(thunks.fetchQuizes.fulfilled, (state, { payload }) => {
      state.quizes = payload;// eslint-disable-line no-param-reassign
      state.filterQuizes = payload;// eslint-disable-line no-param-reassign
    });
  },
});

export default quizesSlice.reducer;
