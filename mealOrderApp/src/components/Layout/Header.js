import React from 'react';
import MealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton';

export const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt="meals" />
            </div>
        </>
    );
};
