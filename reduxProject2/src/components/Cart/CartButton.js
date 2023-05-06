import { useDispatch } from 'react-redux';
import { toggleVisible } from '../../store/cartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
    const dispatch = useDispatch();

    const showCart = () => {
        console.log('Trying to change the show');
        dispatch(toggleVisible());
    };

    return (
        <button onClick={showCart} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
