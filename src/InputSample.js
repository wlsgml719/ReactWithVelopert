import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const {name, nickname} = inputs;
    const nameInput = useRef();

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const onReset = () =>
    {
        setInputs({
            name : '',
            nickname: ''
        });
        nameInput.current.focus();
    };

    return(
        <div>
            <input name="name" onChange={onChange} value={name} ref={nameInput}></input>
            <input name="nickname" onChange={onChange} value={nickname}></input>
            <button onClick={onReset}>초기화</button>
            <div>값: </div>
            {name} ({nickname})
        </div>
    );
};

export default InputSample;