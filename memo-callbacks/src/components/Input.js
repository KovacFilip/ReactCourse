import React from 'react';

export const Input = React.memo(({ setValue, value }) => {
    console.log(`INPUT ${value} RE-RENDERING`);

    return <input value={value} onChange={setValue} />;
});
