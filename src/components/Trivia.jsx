import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import play from "../assets/sounds/play.wav";
import correct from "../assets/sounds/correct.wav";
import wrong from "../assets/sounds/wrong.wav";
import wait from "../assets/sounds/wait.wav";

const Trivia = ({ data, setEndGame, questionNumber, setQuestionNumber }) => {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState('answer');
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);
    const [waitTime] = useSound(wait);

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration)
    }

    const handleClick = (answer) => {
        setSelectedAnswer(answer);
        setClassName('answer active');
        delay(3000, () =>
            setClassName(answer.correct ? 'answer correct' : 'answer wrong')
        );
        delay(5000, () => {
            if (answer.correct) {
                correctAnswer();
                delay(1000, () => {
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null);
                })
            } else {
                wrongAnswer();
                delay(1000, () => {
                    setEndGame(true);
                })
            }
        });
    };

    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((answer) => (
                    <div key={answer.id} className={selectedAnswer === answer ? className : 'answer'}
                        onClick={() => handleClick(answer)}
                    >{answer.text}</div>

                ))}
            </div>

        </div>
    )
}

export default Trivia
