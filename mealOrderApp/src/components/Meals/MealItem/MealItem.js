import React from 'react';
import classes from './MealItem.module.css';
import { MealItemForm } from './MealItemForm';

export const MealItem = ({ name, desc, price, id, ...props }) => {
    const fprice = `$${price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{desc}</div>
                <div className={classes.price}>{fprice}</div>
            </div>
            <div>
                <MealItemForm id={id} />
            </div>
        </li>
    );
};
