import { useDispatch, useSelector } from 'react-redux';
import { toggleVisible } from '../../store/cartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
    const dispatch = useDispatch();
    const amount = useSelector((state) =>
        state.cart.items.reduce((acc, curr) => (acc += curr.amount), 0)
    );

    const showCart = () => {
        dispatch(toggleVisible());
    };

    return (
        <button onClick={showCart} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{amount}</span>
        </button>
    );
};

export default CartButton;
