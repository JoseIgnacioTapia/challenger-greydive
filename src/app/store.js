import { configureStore } from '@reduxjs/toolkit';
import questionsAnswerReducer from '../features/questionsAnswers/questionsAnswers';

export const store = configureStore({
  reducer: {
    questionsAnswers: questionsAnswerReducer,
  },
});
