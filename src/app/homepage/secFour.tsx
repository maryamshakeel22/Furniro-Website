"use client"
import { useRef, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Image from "next/image";
import { cardCarousel } from "./cardcarousal";
import { FaArrowLeft, FaArrowRight, } from "react-icons/fa6";

const SecFour = () => {
    const [currentSlide, setCurrentSlide] = useState(cardCarousel[0].id);
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        dotsClass: 'slick-dots custom-dots',
        infinite: true,
        useCSS: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: (index: number) => {
            setCurrentSlide(cardCarousel[index].id);
        },
        customPaging: function (i: number) {
            return (
                <div
                    className={`slick-dot ${currentSlide === cardCarousel[i].id ? "slick-active" : ""
                        }`}
                >
                    <div className="dot-inner"></div>
                </div>
            );
        },
        responsive: [
            {
                breakpoint: 1426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false
                }
            }
        ]
    };

    return (
        <section className="bg-[#FCF8F3] mb-[67px]">
            <div className="lg:pl-[100px] py-[44px] lg:pr-0 flex lg:items-center lg:flex-row gap-11 flex-col px-3">
                <div className="w-auto">
                    <h1 className="text-[#3A3A3A] font-bold lg:text-[40px] lg:leading-[48px] mb-2 sm:text-2xl text-lg">50+ Beautiful rooms inspiration</h1>
                    <p className="text-[#616161] font-medium lg:leading-6 max-w-[368px] text-sm">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <button className="bg-[#B88E2F] mt-[25px] py-3 min-w-[176px] text-[#FFFFFF] font-semibold leading-6">Explore More</button>
                </div>
                <div className="lg:w-11/12 overflow-hidden relative">
                    {
                        currentSlide !== 1 && (
                            <button onClick={() => sliderRef.current?.slickPrev()} className="absolute z-10 top-56 lg:left-6 left-0 scale-[-1] w-12 h-12 rounded-full shadow-2xl bg-white flex items-center justify-center">
                                <FaArrowRight width={20} height={20} className="text-black" />
                            </button>
                        )
                    }
                    <div className='overflow-hidden scroll-smooth'>
                        <Slider {...settings} ref={sliderRef}>
                            {cardCarousel.map((item) => (
                                <div key={item.id} className={`${currentSlide === item.id ? 'w-[404px] h-[482px]' : 'w-[372px] h-[386px]'} relative px-3`}>
                                    <Image src={item.img} alt="product-img" loading='lazy'
                                    width={500} height={500} className="w-full h-full object-cover" />
                                    <div className={`absolute z-20 left-6 bottom-6 select-none flex items-end ${currentSlide === item.id ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className='bg-white py-6 px-8 w-auto opacity-90'>
                                            <div className='flex gap-2 items-center'>
                                                {/* <span className='font-medium'>{item.level}</span>
                                                <Image src={'/images/line.png'} alt="line-icon" width={40} height={20} />
                                                <span className='font-medium'>{item.title}</span> */}
                                            </div>
                                            <h1 className='mt-[8px] font-semibold text-2xl'>{item.subTitle}</h1>
                                        </div>
                                        <div className='bg-[#B88E2F] flex items-center justify-center w-[40px] h-[40px]'>
                                        <FaArrowRight width={20} height={20} className="text-black" />
                                        </div>
                                    </div>
                                </div>
                            )
                            )}
                        </Slider>
                    </div>
                    <button onClick={() => sliderRef.current?.slickNext()} className="absolute z-10 top-56 lg:right-6 right-0 w-12 h-12 rounded-full shadow-2xl bg-white flex items-center justify-center">
                    <FaArrowRight width={20} height={20} className="text-black" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SecFour;

// import React from 'react'
// import Image from "next/image";
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "@/components/ui/carousel"

// const SecFour = () => {
//   return (
//     <div>
//         <section className="text-gray-600 bg-[#FCF8F3] body-font">
//   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//       50+ Beautiful rooms 
//       inspiration
//       </h1>
//       <p className="mb-5 leading-relaxed">
//       Our designer already made a lot of beautiful prototipe of rooms that inspire you
//       </p>
//       <div className="flex justify-center">
//       <button className='text-center border border-[#B88E2F] text-sm font-semibold py-2 px-10 justify-center mt-9 text-white bg-[#B88E2F] items-center'>Explore More</button>
//       </div>
//     </div>
//     <div className="lg:max-w-lg lg:w-[372] md:w-[372] w-[5/6] hidden md:block">
//     <Carousel>
//   <CarouselContent>
//     <CarouselItem>
//     <Image
//         className="object-cover object-center rounded"
//         alt="hero"
//         src={'/sec4.1.png'}
//         width={372}
//         height={486}
//       />
//     </CarouselItem>
//     <CarouselItem>
//     <Image
//         className="object-cover object-center rounded"
//         alt="hero"
//         src={'/sec4.2.png'}
//         width={372}
//         height={486}
//       />
//     </CarouselItem>
//     <CarouselItem>
//     <Image
//         className="object-cover object-center rounded"
//         alt="hero"
//         src={'/sec4.3.png'}
//         width={372}
//         height={486}
//       />
//     </CarouselItem>
//   </CarouselContent>
//   <CarouselPrevious />
//   <CarouselNext />
// </Carousel>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

// export default SecFour