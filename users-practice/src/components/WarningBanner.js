import React from 'react';
import styles from './WarningBanner.module.css';

const WarningBanner = ({ text, hideWarning }) => {
    return (
        <div className={styles.back}>
            <div className={styles.WarningBanner}>
                <div className={styles.container}>
                    <label className={styles.label}>{text}</label>
                    <button
                        onClick={hideWarning}
                        className={styles.understandButton}
                    >
                        I understand!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WarningBanner;
