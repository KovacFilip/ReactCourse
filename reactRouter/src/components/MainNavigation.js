import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
