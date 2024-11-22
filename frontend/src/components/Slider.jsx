import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { assets } from '../assets/assets.js'

const Slider = () => {

    return (
        <>
            <Swiper navigation={true}
                autoplay={{ delay: 5000, disableOnInteraction: true, }}
                modules={[Navigation, Autoplay]}
                className="mySwiper" loop={true}>
                <SwiperSlide><img className='w-full bg-cover' src={assets.poster} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full bg-cover' src={assets.poster2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full bg-cover' src={assets.poster3} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider