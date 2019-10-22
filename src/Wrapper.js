import React from 'react';

function Wrapper({children})
{
    const style = {
        backgroundColor : 'red'
    };

    return (
        <div style={style}>{children}</div>
    );
}
export default Wrapper;