import { useCallback, useState } from 'react';

export const useInput = () => {
    const [value, setValue] = useState('');

    const onChangeValue = useCallback((ev) => {
        setValue(ev.target.value);
    }, []);

    return [value, onChangeValue];
};
