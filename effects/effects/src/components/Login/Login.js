import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../Input/Input';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === 'PASSWORD_VALIDATE') {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: '', isValid: false };
};

const Login = (props) => {
    const authCtx = useContext(AuthContext);

    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: false,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: false,
    });

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        console.log('running useEffect');
        const timeoutId = setTimeout(() => {
            // console.log('TIMEOUT');
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            // console.log('CLEANUP');
            clearTimeout(timeoutId);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'PASSWORD_VALIDATE' });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        authCtx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    isValid={emailIsValid}
                    type="email"
                    labelText="E-Mail"
                    value={emailState.value}
                    onBlur={validateEmailHandler}
                    onChange={emailChangeHandler}
                />
                <Input
                    isValid={passwordIsValid}
                    type="password"
                    labelText="Password"
                    value={passwordState.value}
                    onBlur={validatePasswordHandler}
                    onChange={passwordChangeHandler}
                />
                {/* <div
                    className={`${classes.control} ${
                        !emailState.isValid ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div> */}
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
