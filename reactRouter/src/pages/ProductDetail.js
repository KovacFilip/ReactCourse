import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {
    const params = useParams();

    return <h1> Product Detail Page, {params.productId}</h1>;
};
