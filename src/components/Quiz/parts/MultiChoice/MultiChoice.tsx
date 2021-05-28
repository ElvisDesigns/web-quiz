/* eslint-disable */
import {FC} from 'react';
import {QuizQuestion} from "../../../../@types/global";
import {useAppSelector, useAppDispatch} from '../../../../app/hooks';
import {getAnswers, addAnswer, getShowAnswers, getPoints} from "../../../../store/quizReducer";
import parse from 'html-react-parser';

import clsx from "clsx";
import './MultiChoice.style.scss';

export interface MultiChoiceProps {
    question: QuizQuestion
    isImage?: boolean
    incompleteAnswers: string[]
}

const MultiChoice: FC<MultiChoiceProps> = ({question, isImage, incompleteAnswers}) => {
    const text = 'Atzimejiet vienu vai vairakas:';
    const {question: quizQuestion, description = '', pts, answers = [], name, correctAnswers} = question;
    const storeAnswer = useAppSelector(getAnswers)?.[name] as number[] || [];
    const submittedAnswers = useAppSelector(getShowAnswers);
    const points = useAppSelector(getPoints)
    const dispatch = useAppDispatch();

    const onChange = (name: string, idx: number, checked: boolean) => {
        if (checked) {
            dispatch(addAnswer({[name]: [...storeAnswer, idx]}));
        } else {
            dispatch(addAnswer({
                [name]: storeAnswer.filter(e => e !== idx)
            }));
        }
    }

    return (
        <div className={clsx('MultiChoice-Wrapper', incompleteAnswers.includes(name) && 'MultiChoice-Wrapper_isRed')}>
            <div className={clsx('MultiChoice-QuestionTitle')}>{quizQuestion}</div>
            <div className={clsx('MultiChoice-Pts')}>{ submittedAnswers ? `${points?.[name]}/${pts} punkti` : `${pts} punkti`}</div>
            <div>{ text }</div>
            <div className={clsx('MultiChoice-Description')}>{parse(description)}</div>
            <div className={clsx('MultiChoice-AnswersWrapper', isImage && 'MultiChoice-AnswersWrapper_isImage')}>{
                (answers as any[]).map((answer: string, idx: number) => (
                    /* @ts-ignore */
                    <div className={clsx('MultiChoice-Answer', isImage && 'MultiChoice-Answer_isImage', submittedAnswers && correctAnswers.includes(idx) && 'SingleChoice-Answer_isGreen', storeAnswer.includes(idx) && submittedAnswers && !correctAnswers.includes(idx) && 'SingleChoice-Answer_isRed')}><input id={`${name}${answer}${idx}`}
                                                                       name={quizQuestion}
                                                                       checked={storeAnswer.includes(idx)}
                                                                                                                disabled={submittedAnswers}
                                                                       onChange={({currentTarget: {checked}}) => onChange(name, idx, checked)}
                                                                       type='checkbox'/><label
                        htmlFor={`${name}${answer}${idx}`}>{isImage ? <img
                        className={clsx('MultiChoice-Label', storeAnswer.includes(idx) && isImage && 'MultiChoice-Label_isSelected')}
                        src={answer}/> : answer}</label></div>))
            }</div>
        </div>
    )
}

export default MultiChoice;
