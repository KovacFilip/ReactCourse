import React from 'react';

export const DemoOutput = (props) => {
    console.log('DEMO OUTPUT RUNNING');
    return <p>{props.show ? 'This is new' : ''}</p>;
};
