import React, { useEffect, useState } from 'react'

const Timer = ({setEndGame, questionNumber}) => {

    const [timer, setTimer]= useState(30);

    useEffect(() => {
        if (timer === 0 ) return setEndGame(true);
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [setEndGame, timer]);

    useEffect(() => {
        setTimer(30);
    },[questionNumber]);

    return (
       timer
    )
}

export default Timer
