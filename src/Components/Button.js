import React from 'react';
import './Button.scss';

function Button({children})
{
    return <button class="Button">{children}</button>;
};

export default Button;