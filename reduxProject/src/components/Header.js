import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import classes from './Header.module.css';

const Header = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <div>
            {isAuthenticated && (
                <header className={classes.header}>
                    <h1>Redux Auth</h1>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">My Products</a>
                            </li>
                            <li>
                                <a href="/">My Sales</a>
                            </li>
                            <li>
                                <button onClick={logoutHandler}>Logout</button>
                            </li>
                        </ul>
                    </nav>
                </header>
            )}
        </div>
    );
};

export default Header;
