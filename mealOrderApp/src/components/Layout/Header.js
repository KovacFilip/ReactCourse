import React from 'react';
import MealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton';

export const Header = ({ openCart }) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={openCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt="meals" />
            </div>
        </>
    );
};
