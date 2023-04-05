// Create a custom hook, that implements a form input functionality
import { useCallback, useState } from 'react';

export const useInput = () => {
    const [value, setValue] = useState('');
    const [wasTouched, setWasTouched] = useState(false);

    const isValueValid = value !== '';

    const setBlur = useCallback(() => {
        setWasTouched(true);
    }, []);

    const setUnblur = () => setWasTouched(false);

    const erase = () => setValue('');

    const error = wasTouched && !isValueValid;

    const styles = error ? 'error' : '';

    const onChangeValue = useCallback((ev) => {
        setWasTouched(true);
        setValue(ev.target.value);
    }, []);

    return [value, erase, setUnblur, onChangeValue, setBlur, styles];
};
