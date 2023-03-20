import { useRef, useState } from 'react';

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log(`enteredName: ${enteredName}`);

        const refEnteredName = nameInputRef.current.value;
        console.log(`refEnteredName: ${refEnteredName}`);
    };

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                />
            </div>
            <div className="form-actions">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
