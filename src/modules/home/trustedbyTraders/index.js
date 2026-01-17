'use client'
import React from 'react'
import styles from './trustedbyTraders.module.scss';
import Marquee from "react-fast-marquee";

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
const QuoteIcon = '/assets/icons/quote.svg';
const Meena = '/assets/images/meena.webp';
const Kevin = '/assets/images/Kevin.webp';
const Danial = '/assets/images/Danial.webp';
const Sarah = '/assets/images/Sarah.webp';
const Ana = '/assets/images/Ana.webp';
const Luca = '/assets/images/Luca.webp';
const Mithcel = '/assets/images/Mithcel.webp';
const Jayesh = '/assets/images/Jayesh.webp';
const Carlos = '/assets/images/Carlos.webp';
const Laura = '/assets/images/Laura.webp';
const Ahmed = '/assets/images/Ahmed.webp';
const testimonials = [
    {
        id: 1,
        name: 'Daniel K',
        country: 'United Kingdom',
        text: 'So I personally use this platform i genuinely say that this platform is very easy and very good to start and my opinion this this is one the best company.',
        profileImage: Danial,
    },
    {
        id: 2,
        name: 'Kevin L.',
        country: 'Singapore',
        text: 'I’ve had a great experience with Sea Global FX. The platform is easy to use, deposits are processed quickly, and the support team is always there when you need them. The withdrawals have been smooth with no issues at all. Overall, a very professional and reliable service.',
        profileImage: Kevin,
    },
    {
        id: 3,
        name: 'Sarah W.',
        country: 'Ireland',
        text: 'I experienced a deposit delay caused by the bank, but Sea Global FX handled the situation with professionalism and care. Their support team communicated clearly and resolved the issue promptly. A reliable and well-managed platform.',
        profileImage: Sarah,
    },
    {
        id: 4,
        name: 'Ana P.',
        country: 'Brazil ',
        text: 'Platform offers a truly world-class trading environment. The fast execution and low spreads make a real difference in my day-to-day trading. With over 4 years of professional trading experience, I can confidently say this platform stands out for its reliability and transparency.',
        profileImage: Ana,
    },
    {
        id: 5,
        name: 'Ahmed H.',
        country: 'Egypt ',
        text: 'Sea Global FX is really easy to use and nicely laid out. Everything is clear and straightforward, which makes the whole experience smooth. It’s a good option if you’re looking for a simple, no-stress platform.',
        profileImage: Ahmed,
    },
    {
        id: 6,
        name: 'Meena Mehta',
        country: 'India  ',
        text: 'It’s a great trading platform—easy to use and works really well. I’d definitely recommend it to my friends.',
        profileImage: Meena,
    },
    {
        id: 7,
        name: 'Mitchel Bard',
        country: 'UAE  ',
        text: 'It’s really good for crypto trading compared to many platforms. It offers 24/7 support, secure deposits, tight spreads, and allows trading with lower amounts, which makes it very convenient.',
        profileImage: Mithcel,
    },
    {
        id: 8,
        name: 'Luca M.',
        country: 'Italy  ',
        text: 'I’ve been using Sea Global FX Broker for some time now, and my experience has been excellent. Trading is smooth, spreads are stable, and execution is fast. What I appreciate most is the withdrawal process—it’s quick, hassle-free, and funds are credited on time.',
        profileImage: Luca,
    },
    {
        id: 9,
        name: 'Jayesh Mehta',
        country: 'India   ',
        text: 'Mujhe lagta hai Sea Global FX ek bahut hi great trading app hai. Use karna easy hai aur trading ke liye kaafi achha hai. Mujhe personally kaafi pasand hai aur main sabhi traders ko recommend karta hoon.',
        profileImage: Jayesh,
    },
    {
        id: 10,
        name: 'Carlos M.',
        country: 'España   ',
        text: 'La verdad es que es la primera vez que veo un bróker que realmente se preocupa por que te vaya bien. Lo recomiendo al 100%.',
        profileImage: Carlos,
    },
    {
        id: 11,
        name: 'Laura G.',
        country: 'México   ',
        text: 'Plataforma de trading muy fácil de usar y, sobre todo, con retiros rápidos. Totalmente recomendada.',
        profileImage: Laura,
    },
    // add more objects as needed
];

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
                    320: { slidesPerView: 1.2, spaceBetween: 20 },
                    480: { slidesPerView: 1.2, spaceBetween: 20 },
                    640: { slidesPerView: 1.1, spaceBetween: 40 },
                    768: { slidesPerView: 1.5, spaceBetween: 50 },
                    1024: { slidesPerView: 3.1, spaceBetween: 80 },
                }}
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className={styles.box}>
                            <img src={QuoteIcon} alt="QuoteIcon" />

                            <div className={styles.textgrid}>
                                <div className={styles.line}></div>

                                <div className={styles.content}>
                                    <p>{item.text}</p>

                                    <div className={styles.profile}>
                                        <div className={styles.profileImage}>
                                            {item.profileImage && (
                                                <Image width={60} height={60} src={item.profileImage} alt={item.name} />
                                            )}
                                        </div>

                                        <div>
                                            <h4>{item.name}</h4>
                                            <span>{item.country}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}
