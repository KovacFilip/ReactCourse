import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const items = useSelector((state) => state.cart.items);

    const cartItems = items.map((item, index) => (
        <CartItem
            key={item.id}
            item={{
                title: item.title,
                quantity: item.amount,
                price: item.price,
                total: item.price * item.amount,
                id: item.id,
            }}
        />
    ));

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>{cartItems}</ul>
        </Card>
    );
};

export default Cart;
