import { useState } from 'react';

const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const emailRegex = /^\S+@\S+\.\S+$/;

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = enteredEmail.match(emailRegex);
    const emailInputIsInvalid =
        enteredEmailIsValid === null && enteredEmailTouched;

    let formIsValid = enteredNameIsValid && enteredEmailIsValid;

    const onEmailInputBlurHandler = () => {
        setEnteredEmailTouched(true);
    };

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        setEnteredEmailTouched(true);
    };

    const onNameInputBlurHandler = () => {
        setEnteredNameTouched(true);
    };

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
        setEnteredNameTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (!formIsValid) {
            return;
        }

        console.log(
            `enteredName: ${enteredName}, enteredEmail: ${enteredEmail}`
        );
        setEnteredNameTouched(false);
        setEnteredEmailTouched(false);
        setEnteredName('');
        setEnteredEmail('');
    };

    const nameInputClasses = !nameInputIsInvalid
        ? 'form-control'
        : 'form-control invalid';

    const emailInputClasses = !emailInputIsInvalid
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
                    onBlur={onNameInputBlurHandler}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label>Your Email</label>
                <input
                    type="text"
                    id="email"
                    onChange={emailInputChangeHandler}
                    value={enteredEmail}
                    onBlur={onEmailInputBlurHandler}
                />
                {emailInputIsInvalid && (
                    <p className="error-text">Email is not valid</p>
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
