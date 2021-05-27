import {SINGLE_SELECT, MULTI_SELECT, IMAGE_SINGLE_SELECT, IMAGE_MULTI_SELECT, TEXT_FIELD} from '../consts';

export type QuizQuestionType = SINGLE_SELECT | MULTI_SELECT | IMAGE_SINGLE_SELECT | IMAGE_MULTI_SELECT | TEXT_FIELD;

export interface QuizQuestion {
    name: string
    type: QuizQuestionType
    question: string
    description?: string
    answers?: string[] | number[]
    correctAnswers: string[] | number[]
    pts?: number
}