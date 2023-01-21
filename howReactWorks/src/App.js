import React, { useState, useCallback } from 'react';

import './App.css';
import { DemoOutput } from './components/Demo/DemoOutput';
// import DemoOutput from './components/Demo/DemoOutput';
import { Button } from './components/UI/Button/Button';

function App() {
    const [showParagraph, setShowParagraph] = useState(false);

    console.log('RE-EVALUATING APP');

    const toggleParagraphHandler = useCallback(() => {
        setShowParagraph((prevState) => {
            return !prevState;
        });
    }, []);

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={false} />
            <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
        </div>
    );
}

export default App;
