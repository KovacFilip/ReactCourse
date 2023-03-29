import axios from 'axios';

const FIREBASE_URL =
    'https://react-http-d4588-default-rtdb.europe-west1.firebasedatabase.app/';

const URL =
    'https://react-http-d4588-default-rtdb.europe-west1.firebasedatabase.app/Meals.json';

export const getMeals = () => {
    return axios.get(URL);
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

export const getMovies = async () => {
    axios
        .get(FIREBASE_URL + 'movies.json')
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
