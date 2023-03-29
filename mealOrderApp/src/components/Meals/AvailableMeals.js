import React, { useEffect, useState } from 'react';
import { getMeals } from '../../backend/firebaseFunctions';
import { Card } from '../UI/Card';
import classes from './AvailableMeals.module.css';
import { MealItem } from './MealItem/MealItem';

export const AvailableMeals = () => {
    const [loaded, setLoaded] = useState(false);
    const [meals, setMeals] = useState({});

    useEffect(() => {
        getMeals()
            .then((res) => {
                console.log(res.data);
                setMeals(
                    res.data.map((el) => {
                        return (
                            <MealItem
                                name={el.name}
                                desc={el.description}
                                price={el.price}
                                id={el.id}
                                key={el.id}
                            />
                        );
                    })
                );
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);

    if (!loaded) {
        return <div>Loading</div>;
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{meals}</ul>
            </Card>
        </section>
    );
};
