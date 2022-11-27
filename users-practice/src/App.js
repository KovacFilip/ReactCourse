import React, { useState } from 'react';
import List from './components/List';
import WarningBanner from './components/WarningBanner';
import Form from './form/Form';

function App() {
    const [list, setList] = useState([]);
    const [showWarningText, setShowWarningText] = useState('');

    const addToListHandler = (name, age) => {
        setList((prevList) => {
            return [...prevList, { name, age }];
        });
    };

    const showWarningHandler = (text) => {
        setShowWarningText(text);
    };

    const hideWarningHandler = () => {
        setShowWarningText('');
    };

    return (
        <div>
            {showWarningText !== '' ? (
                <WarningBanner
                    text={showWarningText}
                    hideWarning={hideWarningHandler}
                />
            ) : (
                <div>
                    <Form
                        addToList={addToListHandler}
                        showWarning={showWarningHandler}
                    />
                    <List list={list} />
                </div>
            )}
        </div>
    );
}

//     return (
//         <div>
//             {showWarningText !== '' && (
//                 <WarningBanner
//                     text={showWarningText}
//                     hideWarning={hideWarningHandler}
//                 />
//             )}
//             <Form
//                 addToList={addToListHandler}
//                 showWarning={showWarningHandler}
//             />
//             <List list={list} />
//         </div>
//     );
// }

export default App;
