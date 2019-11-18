import React from 'react';

function CreateUser({ username, email, onChange, onCreate })
{
    // onCreate : 버튼 클릭시 새항목 추가
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
            />
            <button onClick={onCreate}>항목</button>
        </div>
    )
}

export default CreateUser;