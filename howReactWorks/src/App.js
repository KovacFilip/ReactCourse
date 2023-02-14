import React, { useCallback, useState } from 'react';

import './App.css';
import { DemoOutput } from './components/Demo/DemoOutput';
import { Button } from './components/UI/Button/Button';

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log('RE-EVALUATING APP');

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph((prevState) => {
                return !prevState;
            });
        }
    }, [allowToggle]);

    const allowToggleHandler = () => {
        setAllowToggle((prevState) => !prevState);
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph} />
            <Button onClick={allowToggleHandler}>Allow toggle</Button>
            <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
        </div>
    );
}

export default App;
