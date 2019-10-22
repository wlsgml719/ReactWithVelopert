import React from 'react';

function Hello({color, name, isSpecial})
{
    return (
        <div style={{color}}>
            {isSpecial && <b>*</b>}
            안녕하세요 Hello 컴포넌트 입니다. 제 주인님은 {name} 에요.
        </div>
    )
};

Hello.defaultProps = {
    name : '지니지니'
};

export default Hello;