import { Link } from "react-router-dom";

export const ProductsPage = () => {
    return (
        <>
            <h1>This is the products page</h1>
            <p>
                Go to: <Link to="/">Go home</Link>
            </p>
        </>
    );
};
