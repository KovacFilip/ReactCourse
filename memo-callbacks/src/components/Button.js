import React from 'react';

export const Button = React.memo(({ onClick }) => {
    console.log('BUTTON RE-RERENDERED');

    return <button onClick={onClick}>Click me</button>;
});
