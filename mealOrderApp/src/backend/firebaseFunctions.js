import axios from 'axios';

const FIREBASE_URL =
    'https://react-http-d4588-default-rtdb.europe-west1.firebasedatabase.app/';

export const getMeals = () => {
    return axios.get(FIREBASE_URL + 'Meals.json');
};

export const placeOrder = (data) => {
    return axios.post(FIREBASE_URL + 'Orders.json', data);
};

export const postMeals = () => {
    axios
        .post(FIREBASE_URL + 'Meals.json', [
            {
                id: 'm1',
                name: 'Sushi',
                description: 'Finest fish and veggies',
                price: 22.99,
            },
            {
                id: 'm2',
                name: 'Schnitzel',
                description: 'A german specialty!',
                price: 16.5,
            },
            {
                id: 'm3',
                name: 'Barbecue Burger',
                description: 'American, raw, meaty',
                price: 12.99,
            },
            {
                id: 'm4',
                name: 'Green Bowl',
                description: 'Healthy...and green...',
                price: 18.99,
            },
        ])
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
