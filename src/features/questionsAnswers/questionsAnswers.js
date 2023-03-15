import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  answers: [],
  loading: false,
};

// Get Questions
export const getQuestionsItems = createAsyncThunk(
  'questionsAnswers/getQuestionsItems',
  async thunkAPI => {
    try {
      const resp = await fetch('src/api/db.json');
      const data = await resp.json();

      return data.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const questionsAnswersSlice = createSlice({
  name: 'questionsAnswers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getQuestionsItems.pending, state => {
        state.loading = true;
      })
      .addCase(getQuestionsItems.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(getQuestionsItems.rejected, state => {
        state.loading = false;
      });
  },
});

export default questionsAnswersSlice.reducer;
