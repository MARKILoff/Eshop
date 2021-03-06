import React, { useState } from 'react';
import RecipeRviewCard from "../components/RecipeReviewCard";


const Phones = props => {
    const [brand, setBrand] = useState({ currentBrand: "" });

    return (
        <>
            <div className="mt-5 w-full h-full flex justify-around">
                {props.categories.map(category =>
                    category.catalog_id === 1 ? (
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
                    brand.currentBrand === product.brandName && product.categoryId === 1 ? (
                        <div className="text-red-500" key={index}>
                            <RecipeRviewCard
                            productsIsLoaded={props.productsIsLoaded}
                            data={product}
                            />
                        </div>
                    ) : null
                ) : null}
            </div>
        </>
    );
};

export default Phones;