import {FC, useState, useEffect} from 'react';
import {QuizQuestion} from "../../@types/global";
import {IMAGE_MULTI_SELECT, IMAGE_SINGLE_SELECT, MULTI_SELECT, SINGLE_SELECT, TEXT_FIELD} from "../../consts";
import SingleChoice from "./parts/SingleChoice/SingleChoice";
import MultiChoice from "./parts/MultiChoice/MultiChoice";
import Text from "./parts/Text/Text";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getAnswers, setShowAnswers, setCorrectPoints, getShowAnswers} from "../../store/quizReducer";
import clsx from "clsx";
import useCountDown from 'react-countdown-hook';
import './Quiz.style.scss';

export interface QuizProps {
    data: QuizQuestion[]
}

export interface declarationType {
    [name: string]: JSX.Element
}

export const TIME = 15; //laiks minutes

const Quiz: FC<QuizProps> = ({data}) => {
    const [stateIncompleteAnswers, setIncompleteAnswers] = useState<string[]>([]);
    const [message, setMessage] = useState<string>('');
    const [hasTimerBeenStarted, setHasTimerBeenStarted] = useState<boolean>(false);

    const initialTime = 1000 * 60 * TIME;
    const interval = 1000;

    const [timeLeft, {start, pause}] = useCountDown(initialTime, interval);

    useEffect(() => {
        start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const declaration = (question: QuizQuestion): declarationType => ({
        [SINGLE_SELECT]: <SingleChoice question={question} incompleteAnswers={stateIncompleteAnswers}/>,
        [MULTI_SELECT]: <MultiChoice question={question} incompleteAnswers={stateIncompleteAnswers}/>,
        [IMAGE_SINGLE_SELECT]: <SingleChoice question={question} incompleteAnswers={stateIncompleteAnswers}
                                             isImage={true}/>,
        [IMAGE_MULTI_SELECT]: <MultiChoice question={question} incompleteAnswers={stateIncompleteAnswers}
                                           isImage={true}/>,
        [TEXT_FIELD]: <Text question={question} incompleteAnswers={stateIncompleteAnswers}/>
    });

    const storeAnswer = useAppSelector(getAnswers);
    const dispatch = useAppDispatch();

    const validateQuestion = (question: QuizQuestion): boolean => {
        const {type, name} = question;

        if ((type === SINGLE_SELECT || type === IMAGE_SINGLE_SELECT) && (storeAnswer?.[name] || storeAnswer?.[name] === 0)) {
            return true;
        }

        if ((type === MULTI_SELECT || type === IMAGE_MULTI_SELECT) && storeAnswer?.[name] && (storeAnswer?.[name] as [])?.length) {
            return true;
        }

        return !!(type === TEXT_FIELD && storeAnswer?.[name]);
    }

    const calculatePoints = () =>
        data.reduce((acc: any, question) => {
            const {type, correctAnswers, pts = 0, name} = question;
            if ((type === SINGLE_SELECT || type === IMAGE_SINGLE_SELECT)) {
                // @ts-ignore
                return {...acc, [name]: correctAnswers.includes(storeAnswer?.[name]) ? pts : 0};
            }

            if ((type === MULTI_SELECT || type === IMAGE_MULTI_SELECT)) {
                const ptForAnswer = pts / correctAnswers.length;
                const correctAnswersPts = (storeAnswer?.[name] as [] || []).reduce((acc, val) => correctAnswers.includes(val) ? acc + ptForAnswer : acc, 0)
                const incorrectAnswersPts = (storeAnswer?.[name] as [] || []).reduce((acc, val) => !correctAnswers.includes(val) ? acc + ptForAnswer : acc, 0)

                return {...acc, [name]: correctAnswersPts - incorrectAnswersPts};
            }

            if (type === TEXT_FIELD) {
                // @ts-ignore
                return {...acc, [name]: correctAnswers.includes(storeAnswer?.[name]) ? pts : 0}
            }
            return acc
        }, {});

    const totalPoints = () => data.reduce((acc, {pts = 0}) => acc + pts, 0)
    // @ts-ignore
    const gottenPoints = (pts: any) => Object.values(pts).reduce((acc: number, pt = 0) => acc + pt, 0);



    useEffect(() => {
        if(!hasTimerBeenStarted && timeLeft > 0) {
            setHasTimerBeenStarted(true);
        }

        if(hasTimerBeenStarted && timeLeft === 0) {
            validateTest(true);
        }
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeLeft]);


    const validateTest = (skipIncomplete: boolean = false) => {
        if (!skipIncomplete) {
            const incompleteAnswers = data.reduce((acc: string[], question) => {
                const {name} = question;
                if (validateQuestion(question)) {
                    return acc;
                }
                return [...acc, name];
            }, [])

            if (incompleteAnswers?.length) {
                setIncompleteAnswers(incompleteAnswers);
                return;
            }
        }

        pause()
        setIncompleteAnswers([])
        dispatch(setShowAnswers(true));
        dispatch(setCorrectPoints(calculatePoints()))
        setMessage(`Apsveicam, Jūs ieguvāt ${gottenPoints(calculatePoints())} no ${totalPoints()} punktiem`)
        window.scrollTo(0, 0);
    }

    const submittedAnswers = useAppSelector(getShowAnswers);

    const onQuizButtonClick = () => {
        if (submittedAnswers) {
            window.location.reload();
        } else {
            validateTest();
        }
    }

    return (
        <div>
            <div className={clsx('Quiz-Timer')}>{`${Math.floor(timeLeft / 1000 / 60)}:${(timeLeft / 1000) - (Math.floor(timeLeft / 1000 / 60) * 60)}`}</div>
            <div className={clsx('Quiz-Message')}>{message}</div>
            {data.map(question => declaration(question)[question.type])}
            <button className={clsx('Quiz-Button')} onClick={onQuizButtonClick}>{ !submittedAnswers ? 'NODOT TESTU' : 'SĀKT TESTU NO JAUNA?'}</button>
        </div>
    )
}

export default Quiz;
