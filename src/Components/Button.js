import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({children, size})
{
    return <button class={classNames('Button', size, color)}>{children}</button>;
};

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};
export default Button;