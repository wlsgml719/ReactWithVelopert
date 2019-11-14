import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({children, size})
{
    return <button class={classNames('Button', size)}>{children}</button>;
};

Button.defaultProps = {
    size: 'medium'
};
export default Button;