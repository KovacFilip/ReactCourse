import React from 'react';
import styles from './ListItem.module.css';

const ListItem = ({ name, age }) => {
    return (
        <div className={`${styles.listItem} ${styles.container}`}>
            <label className={styles.name}>Name: {name}</label>
            <label className={styles.age}>Age: {age}</label>
        </div>
    );
};

export default ListItem;
