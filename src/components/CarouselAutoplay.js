import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import RecipeReviewCard from './RecipeReviewCard';
import { CircularProgress } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

/**
 * The function for the basic example.
 *
 * @return {FunctionComponent} - Function component.
 */
const CarouselAutoplay = (props) => {
    return (
        <div className="wrapper">
            { !props.productsIsLoaded ? (
                <div className="flex justify-center">
                    {/* <Skeleton variant="text" />
                    <Skeleton variant="circle" width={40} height={40} />
                    <Skeleton variant="rect" width={210} height={118} /> */}

                </div>
            ) : (
                <Splide
                    className="mb-3"
                    options={{
                        type: "loop",
                        gap: "0.5rem",
                        autoplay: true,
                        pauseOnHover: false,
                        resetProgress: false,
                        arrows: "slider",
                        width: "100%",
                        lazyLoad: "nearby",
                        breakpoints: {
                            640: {
                                perPage: 2
                            },
                            768: {
                                perPage: 4
                            },
                            1024: {
                                perPage: 5
                            },
                            1440: {
                                perPage: 7
                            },
                            2560: {
                                perPage: 8
                            }
                        }
                    }}
                    hasSliderWrapper
                >
                    {props.products.map((item, index) => (
                        <SplideSlide key={index}>
                            <RecipeReviewCard
                                productsIsLoaded={props.productsIsLoaded}
                                data={item}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            )}
        </div>
    );
};

export default CarouselAutoplay;