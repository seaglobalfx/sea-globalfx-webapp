'use client'
import React from 'react'
import styles from './trustedbyTraders.module.scss';
import Marquee from "react-fast-marquee";

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const QuoteIcon = '/assets/icons/quote.svg';
export default function TrustedbyTraders() {
    return (
        <div className={styles.trustedbyTraders}>
            <div className={styles.title}>
                <h2>
                    Trusted by Traders <span>Worldwide</span>
                </h2>
                <p>
                    Our platform is recognized for its commitment to transparent pricing,
                    reliable execution, and professional
                    service. Thousands of traders choose us for our technology, support, and trading conditions.
                </p>
            </div>
            <Swiper
                grabCursor
                loop
                slidesPerView={3.1}
                centeredSlides
                spaceBetween={80}
                speed={800}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={false}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation = swiper.params.navigation || {};
                }}
                onInit={(swiper) => {
                    if (swiper.navigation) {
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }
                }}
                modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1.3,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 1.3,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 1.1,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 50,
                    },
                    1024: {
                        slidesPerView: 3.1,
                        spaceBetween: 80,
                    },
                }}
            >

                {
                    [...Array(10)].map(() => {
                        return (
                            <SwiperSlide>
                                <div className={styles.box}>
                                    <img src={QuoteIcon} alt='QuoteIcon' />
                                    <div className={styles.textgrid}>
                                        <div className={styles.line}></div>
                                        <div className={styles.content}>
                                            <p>
                                                Our platform is recognized for its commitment to transparent pricing, reliable execution, and professional
                                                service. Thousands of traders choose us for our technology, support, and trading conditions.
                                            </p>
                                            <div className={styles.profile}>
                                                <div className={styles.profileImage}>
                                                </div>
                                                <div>
                                                    <h4>
                                                        Milind Gaba
                                                    </h4>
                                                    <span>
                                                        India
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
