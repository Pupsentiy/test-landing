import {FC} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import {
    introItemRowFirst,
    introItemRowThree,
    introItemRowTwo,
} from "../../core/constants/constants";

import arLeft from '../../assets/img/arLeft.svg'
import arRight from '../../assets/img/arRight.svg'

import './SwiperComponent.scss'
const SwiperComponent:FC = () => {
    SwiperCore.use([Pagination, Navigation]);
    const dataSwiper = [...introItemRowFirst,...introItemRowTwo,...introItemRowThree].filter(el => !el.img.includes('row2.2'))

    return (
        <Swiper
            className='swiper'
            slidesPerView={1}
            centeredSlides={true}
            grabCursor={true}
            initialSlide={0}
            speed={700}
            pagination={{ clickable: true, type: "bullets" }}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
        >
            {dataSwiper && dataSwiper.map((item,idx) =>
            <SwiperSlide key={idx} className='swiper-slide'>
                <img src={item.img} alt="slide"/>
                <p className="desc">{item.text}</p>
            </SwiperSlide>
            )}
            <img src={arLeft} alt="prev" className="swiper-button-prev"/>
            <img src={arRight} alt="next" className="swiper-button-next"/>
        </Swiper>
    );
};

export default SwiperComponent;