// Create a custom hook, that implements a form input functionality
import { useState } from 'react';

const useInput = () => {
    const [value, setValue] = useState('');
    const [wasTouched, setWasTouched] = useState(false);

    const isValueValid = value !== '';

    const setBlur = () => {
        setWasTouched(true);
    };

    const error = wasTouched && !isValueValid;

    const styles = error ? 'error' : '';
    console.log(
        `value: ${value}, wasTouched: ${wasTouched}, isValid: ${isValueValid}, error: ${error}, styles: ${styles}`
    );

    const onChangeValue = (ev) => {
        setWasTouched(true);
        setValue(ev.target.value);
    };

    return {
        value: value,
        onChangeValue: onChangeValue,
        blur: setBlur,
        styles: styles,
    };
};

export default useInput;
