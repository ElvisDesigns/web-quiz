import {FC} from 'react';
import {QuizQuestion} from "../../../../@types/global";
import {useAppSelector, useAppDispatch} from '../../../../app/hooks';
import {getAnswers, addAnswer, getShowAnswers, getPoints} from "../../../../store/quizReducer";
import parse from 'html-react-parser';

import clsx from "clsx";
import './Text.style.scss';

export interface TextProps {
    question: QuizQuestion
    isArea?: boolean
    incompleteAnswers: string[]
}

const Text: FC<TextProps> = ({question, incompleteAnswers}) => {
    const text = 'Ierakstat atbildu';
    const {question: quizQuestion, description = '', pts, name, correctAnswers} = question;
    const storeAnswer = useAppSelector(getAnswers)?.[name] as string || '';
    const submittedAnswers = useAppSelector(getShowAnswers);
    const points = useAppSelector(getPoints)
    const dispatch = useAppDispatch();

    return (
        <div className={clsx('Text-Wrapper', incompleteAnswers.includes(name) && 'Text-Wrapper_isRed')}>
            <div className={clsx('Text-QuestionTitle')}>{quizQuestion}</div>
            <div className={clsx('Text-Pts')}>{ submittedAnswers ? `${points?.[name]}/${pts} punkti` : `${pts} punkti`}</div>
            <div>{ text }</div>
            <div className={clsx('Text-Description')}>{parse(description)}</div>
            { /* @ts-ignore */ }
            <div className={clsx('Text-AnswersWrapper', (correctAnswers.includes(storeAnswer) && submittedAnswers ? 'Text-AnswersWrapper_isGreen' : 'Text-AnswersWrapper_isRed'))}>
                <input type='text' value={storeAnswer} disabled={submittedAnswers} onChange={({ currentTarget: { value } }) => dispatch(addAnswer({[name]: value}))}/>
            </div>
        </div>
    )
}

export default Text;
