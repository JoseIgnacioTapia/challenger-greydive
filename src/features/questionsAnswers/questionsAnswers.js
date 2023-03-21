import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  answers: {},
  loading: false,
};

// Get Questions
export const getQuestionsItems = createAsyncThunk(
  'questionsAnswers/getQuestionsItems',
  async thunkAPI => {
    try {
      const resp = await fetch('/api/db.json');
      const data = await resp.json();

      return data.items;
    } catch (error) {
      console.log(error);
    }
  }
);

// Get Answers
export const getAnswers = createAsyncThunk(
  'questionsAnswers/getAnswers',
  async thunkAPI => {
    try {
      const resp = await fetch(
        'https://answers-f0c70-default-rtdb.firebaseio.com/answers.json'
      );
      const data = await resp.json();

      const arr = [];

      for (const key in data) {
        arr.push({
          id: key,
          ...data[key],
        });
      }

      return arr[arr.length - 1];
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
      })
      .addCase(getAnswers.pending, state => {
        state.loading = true;
      })
      .addCase(getAnswers.fulfilled, (state, action) => {
        state.loading = false;
        state.answers = action.payload;
      })
      .addCase(getAnswers.rejected, state => {
        state.loading = false;
      });
  },
});

export default questionsAnswersSlice.reducer;
