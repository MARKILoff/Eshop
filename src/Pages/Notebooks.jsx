import React, { useState } from 'react';
import RecipeRviewCard from "../components/RecipeReviewCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';


const Notebooks = props => {
    const [brand, setBrand] = useState({ currentBrand: "" });

    return (
        <>
            <div className="mt-5 w-full h-full flex justify-around">
                {props.categories.map(category =>
                    category.catalog_id === 2 ? (
                        <div
                            className="text-gray-500 text-2xl"
                            key={category.id}
                        >
                            <p>{category.title}</p>
                            {props.brands.map(brand =>
                                brand.category_id === category.id ? (
                                    <a
                                        onClick={() => setBrand({
                                            currentBrand: brand.name
                                        })
                                        }
                                        className="block cursor-pointer text-lg"
                                        key={brand.id}
                                    >
                                        {brand.name}
                                    </a>
                                ) : null
                            )}
                        </div>
                    ) : null
                )}
            </div>
            <hr/>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-2">
                {brand.currentBrand !== ""
                    ? props.products.map((product, index) =>
                    brand.currentBrand === product.brandName ? (
                        <div className="text-red-500" key={index}>
                            <RecipeRviewCard
                            productsIsLoaded={props.productsIsLoaded}
                            data={product}
                            />
                        </div>
                    ) : null
                    )
                : null}
            </div>
        </>
    );
};
export default Notebooks;