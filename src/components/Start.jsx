import React, { useRef } from 'react'

const Start = ({setUserName}) => {

    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value);
    }

    return (
        <div className= " start">
            <input type="text"
            ref = {inputRef}
            placeholder="מה השם שלך?"
            className="start-input"
            />
            <button className="start-btn"
            onClick = {handleClick}>
            משחק חדש</button>
        </div>
    )
}

export default Start
