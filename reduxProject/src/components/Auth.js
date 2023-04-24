import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';
import classes from './Auth.module.css';

const Auth = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const loginHandler = () => {
        dispatch(login());
    };

    return (
        <div>
            {!isAuthenticated && (
                <main className={classes.auth}>
                    <section>
                        <form>
                            <div className={classes.control}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className={classes.control}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" />
                            </div>
                            <button onClick={loginHandler}>Login</button>
                        </form>
                    </section>
                </main>
            )}
        </div>
    );
};

export default Auth;
