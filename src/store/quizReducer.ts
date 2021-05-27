import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../app/store";

export interface QuestionAnswers {
    [name: string]: number[] | number | string
}

export interface quizReducerState {
    answers: QuestionAnswers
    showCorrect: boolean
    correctPoints: QuestionAnswers
}

const initialState: quizReducerState = {
    answers: {},
    showCorrect: false,
    correctPoints: {}
};

export const quiz = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        addAnswer: (state, action: PayloadAction<QuestionAnswers>) => {
            state.answers = { ...state.answers, ...action.payload }
        },
        clearAnswers: (state) => {
            state.answers = {}
        },
        setCorrectPoints: (state, action: PayloadAction<QuestionAnswers>) => {
            state.correctPoints = action.payload
        },
        setShowAnswers: (state, action: PayloadAction<boolean>) => {
            state.showCorrect = action.payload
        }
    },
});

export const getAnswers = (state: RootState) => state.quiz.answers;
export const getShowAnswers = (state: RootState) => state.quiz.showCorrect;
export const getPoints = (state: RootState) => state.quiz.correctPoints;

export const { addAnswer, clearAnswers, setShowAnswers, setCorrectPoints } = quiz.actions;

export default quiz.reducer;
