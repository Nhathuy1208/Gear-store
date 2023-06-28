import React from "react";

import { Cards } from "../components";
import { client } from "../lib/client";

const Home = ({ products }) => {
    return (
        <>
            <div className="products-banner">
                <h3>Mount</h3>
                <p>
                    Todays gaming mouse is optimized, besides the powerful
                    design helps gamers feel the power in their hands!
                </p>
            </div>
            <Cards products={products} type="mouse" />
        </>
    );
};

export const getServerSideProps = async () => {
    const query = '*[_type == "mouse"]';
    const products = await client.fetch(query);

    return {
        props: { products },
    };
};
export default Home;
