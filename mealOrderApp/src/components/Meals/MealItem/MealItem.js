import React, { useContext } from 'react';
import { CartContext } from '../../../store/cart-context';
import classes from './MealItem.module.css';
import { MealItemForm } from './MealItemForm';

export const MealItem = ({ name, desc, price, id, ...props }) => {
    const fprice = `$${price.toFixed(2)}`;

    const cartCtx = useContext(CartContext);

    const onAddHandler = (amount) => {
        cartCtx.addItem({ name, desc, price, id, amount });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{desc}</div>
                <div className={classes.price}>{fprice}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddHandler={onAddHandler} />
            </div>
        </li>
    );
};
