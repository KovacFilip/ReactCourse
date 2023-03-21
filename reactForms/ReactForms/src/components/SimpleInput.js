import { useState } from 'react';

const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    let formIsValid = enteredNameIsValid;

    const onInputBlurHandler = () => {
        setEnteredNameTouched(true);
    };

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (!formIsValid) {
            return;
        }

        console.log(`enteredName: ${enteredName}`);
        setEnteredNameTouched(false);
        setEnteredName('');
    };

    const nameInputClasses = !nameInputIsInvalid
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
                    onBlur={onInputBlurHandler}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid} type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default SimpleInput;
