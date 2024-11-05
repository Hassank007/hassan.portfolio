"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import user from "../../../asset/user.png";
import { TiStarFullOutline } from "react-icons/ti";
import { PiQuotes } from "react-icons/pi";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`md:top-0 md:-mt-[5rem] xl:block hidden cursor-pointer right-3 xl:right-5 top-[50%] bg-primary-white text-primary-black w-10 h-10 rounded-full absolute z-20 p-[3px] md:flex items-center justify-center transition-all duration-200 ease-linear`}
            onClick={onClick}
        >
            <IoIosArrowRoundForward
                size={35}
                className="transition-all duration-200 ease-linear"
            />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`cursor-pointer xl:block hidden xl:left-[91%] md:-mt-[5rem] md:top-0 right-16 top-[50%] absolute z-20 p-[3px] bg-primary-white text-primary-black w-10 h-10 rounded-full md:flex items-center justify-center transition-all duration-200 ease-linear`}
            onClick={onClick}
        >
            <IoIosArrowRoundBack
                size={35}
                className="transition-all duration-200 ease-linear"
            />
        </div>
    );
}

const Cards = () => {
    const data = [
        {
            id: 1,
            title: 'Sean & Alex',
            country: 'United States',
            description: 'Hassan transformed our online presence! The website he developed for our brand is modern, fast, and has significantly improved user engagement.'
        },
        {
            id: 2,
            title: 'Emma Davis',
            country: 'United States',
            description: 'Working with Hassan was a fantastic experience. He built a sleek and responsive site for our company, which has really helped increase our visibility online.'
        },
        {
            id: 3,
            title: 'Lucas Walker',
            country: 'United States',
            description: 'I’m beyond impressed with the website Hassan delivered. It’s visually appealing and optimized for all devices, which has made a positive impact on our business.'
        },
        {
            id: 4,
            title: 'Olivia Martin',
            country: 'Canada',
            description: 'Hassan created a user-friendly and attractive website for our business. His attention to detail and design skills are exceptional!'
        },
        {
            id: 5,
            title: 'Sophia Thompson',
            country: 'United States',
            description: 'Thanks to Hassan, our new website has driven more traffic and engagement than we ever expected. Highly recommended!'
        },
        {
            id: 6,
            title: 'David Johnson',
            country: 'United States',
            description: 'Hassan took our vision and turned it into a fantastic website that represents our brand beautifully. His skills and professionalism are top-notch!'
        }
    ];
    


    const settings = {
        dots: false,
        dotsClass: "slick-dots line-indicator",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    infinite: true,
                    dots: false,

                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            },
        ],
        customPaging: (i) => <div className="mt-3 text-xs opacity-0">{i}</div>,
    };

    return (
        <div className="mt-10 xl:mt-20 w-full">
            <Slider {...settings} className="w-full">
                {data.map((e) => (
                    <div
                        key={e.id}
                        className="flex relative text-center mx-auto w-[390px] h-[340px] cursor-pointer flex-col rounded-xl py-5 px-4 md:px-6 bg-primary-gray text-primary-gray justify-center items-center"
                    >
                        <div className="flex gap-4 items-start justify-start">

                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-primary-white font-semibold text-[22px]">{e.title}</h2>
                                <p className="text-primary-white/30">{e.country}</p>
                            </div>
                        </div>
                        <p className="pt-6 text-primary-white text-left text-xl font-light ">{e.description}</p>

                        <div className="absolute bottom-6 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <span key={index} className="text-primary-green text-xl shimmer-star">
                                            <TiStarFullOutline />

                                        </span>
                                    ))}
                                </div>
                                <PiQuotes size={24} />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <style jsx>{`
                .shimmer-star {
                    animation: shimmer 1.5s infinite;
                }

                @keyframes shimmer {
                    0% {
                        opacity: 0.5;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0.5;
                    }
                }
            `}</style>
        </div>
    );
};

export default Cards;