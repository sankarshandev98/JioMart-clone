import { useEffect } from "react";
import { useState } from "react";
import { CartState } from "../Component/Context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css";
import RingLoader from "react-spinners/RingLoader";

const Home = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    const {
        state: { products },
        productState: { sort, byStock, searchQuery },
    } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }

        if (byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }


        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery)
            );
        }

        return sortedProducts;
    };
    return (
        <div className="home">
            {loading ? (
                <RingLoader className="spin"
                    color={"#008ECC"} loading={loading} size={150} />
            )
                : (
                    <>
                        <Filters />
                        <div className="productContainer">
                            {transformProducts().map((prod) => (
                                <SingleProduct prod={prod} key={prod.id} />
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Home;