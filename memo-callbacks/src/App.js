import { useCallback, useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { useInput } from './hooks/useInput';

function App() {
    console.log('APP RE-RENDERED');
    const [state, setState] = useState(false);
    const [i1, changeI1] = useInput();
    const [i2, changeI2] = useInput();

    const changeState = useCallback(() => {
        setState((prevState) => !prevState);
    }, []);

    return (
        <div className="App">
            {state && <div>This is a text</div>}
            <Button onClick={changeState} />
            <Button onClick={changeState} />

            <Input value={i1} setValue={changeI1} />
            <Input value={i2} setValue={changeI2} />
        </div>
    );
}

export default App;
