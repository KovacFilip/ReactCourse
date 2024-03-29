import React from 'react';

import classes from './Button.module.css';

export const Button = React.memo((props) => {
    console.log('RE-EVALUATING BUTTON');

    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
});
