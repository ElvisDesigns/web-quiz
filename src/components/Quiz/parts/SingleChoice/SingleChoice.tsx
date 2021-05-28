/* eslint-disable */
import {FC} from 'react';
import {QuizQuestion} from "../../../../@types/global";
import {useAppSelector, useAppDispatch} from '../../../../app/hooks';
import {getAnswers, addAnswer, getShowAnswers, getPoints} from "../../../../store/quizReducer";
import parse from 'html-react-parser';

import clsx from "clsx";
import './SingleChoice.style.scss';

export interface SingleChoiceProps {
    question: QuizQuestion
    isImage?: boolean
    incompleteAnswers: string[]
}

const SingleChoice: FC<SingleChoiceProps> = ({question, isImage, incompleteAnswers}) => {
    const text = 'Atzimejiet vienu:';
    const {question: quizQuestion, description = '', pts, answers = [], name, correctAnswers} = question;
    const storeAnswer = useAppSelector(getAnswers)?.[name];
    const submittedAnswers = useAppSelector(getShowAnswers);
    const points = useAppSelector(getPoints)
    const dispatch = useAppDispatch();

    return (
        <div className={clsx('SingleChoice-Wrapper', incompleteAnswers.includes(name) && 'SingleChoice-Wrapper_isRed')}>
            <div className={clsx('SingleChoice-QuestionTitle')}>{quizQuestion}</div>
            <div className={clsx('SingleChoice-Pts')}>{ submittedAnswers ? `${points?.[name]}/${pts} punkti` : `${pts} punkti`}</div>
            <div>{ text }</div>
            <div className={clsx('SingleChoice-Description')}>{parse(description)}</div>
            <div className={clsx('SingleChoice-AnswersWrapper', isImage && 'SingleChoice-AnswersWrapper_isImage')}>{
                (answers as any[]).map((answer: string, idx: number) => (
                    /* @ts-ignore */
                    <div className={clsx('SingleChoice-Answer', isImage && 'SingleChoice-Answer_isImage', submittedAnswers && correctAnswers.includes(idx) && 'SingleChoice-Answer_isGreen', storeAnswer === idx && submittedAnswers && !correctAnswers.includes(idx) && 'SingleChoice-Answer_isRed' )}>
                        <input id={`${name}${answer}${idx}`}
                               name={quizQuestion}
                               checked={storeAnswer === idx}
                               disabled={ submittedAnswers }
                               onChange={() => dispatch(addAnswer({[name]: idx}))}
                               type='radio'/>
                        <label
                            htmlFor={`${name}${answer}${idx}`}>{isImage ? <img
                            className={clsx('SingleChoice-Label', storeAnswer === idx && isImage && 'SingleChoice-Label_isSelected')}
                            src={answer}/> : answer}</label></div>))
            }</div>
        </div>
    )
}

export default SingleChoice;
