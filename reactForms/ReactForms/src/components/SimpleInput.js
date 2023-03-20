import { useState } from 'react';

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }

        console.log(`enteredName: ${enteredName}`);
        setEnteredNameIsValid(true);
        setEnteredName('');
    };

    const nameInputClasses = enteredNameIsValid
        ? 'form-control'
        : 'form-control invalid';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    value={enteredName}
                />
                {!enteredNameIsValid && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className="form-actions">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;