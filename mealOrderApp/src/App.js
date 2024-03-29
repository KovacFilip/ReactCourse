import React, { useState } from 'react';
import { Cart } from './components/Cart/Cart';
import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals/Meals';
import { CartProvider } from './store/CartProvider';

function App() {
    const [showCart, setShowCart] = useState(false);

    const openCart = () => {
        setShowCart(true);
    };

    const closeCart = () => {
        setShowCart(false);
    };

    return (
        <CartProvider>
            {showCart && <Cart closeCart={closeCart} />}
            <Header openCart={openCart} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
