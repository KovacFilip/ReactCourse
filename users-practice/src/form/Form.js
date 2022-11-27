import React, { useState } from 'react';
import styles from './Form.module.css';
import styles2 from './Paper.module.css';

const Form = ({ addToList, showWarning }) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (userName.trim().length === 0) {
            showWarning('UserName cannot be left empty');
            return;
        }

        if (age.toString().trim().length === 0) {
            showWarning('Age has to be filled in');
            return;
        }

        addToList(userName, age);

        setUserName('');
        setAge('');
    };

    const handleChangeUserName = (ev) => {
        setUserName(ev.target.value);
    };

    const handleChangeAge = (ev) => {
        setAge(ev.target.value);
    };

    return (
        <div className={styles2.div}>
            <form onSubmit={handleSubmit}>
                <label className={styles.label}>Username</label>
                <input
                    className={styles.input}
                    value={userName}
                    onChange={handleChangeUserName}
                />
                <label className={styles.label}>Age</label>
                <input
                    className={styles.input}
                    type="number"
                    value={age}
                    onChange={handleChangeAge}
                />
                <button type="submit" className={styles.button}>
                    Add User
                </button>
            </form>
        </div>
    );
};

export default Form;
