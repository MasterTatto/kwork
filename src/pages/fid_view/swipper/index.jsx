import React, {useRef, useState} from 'react';
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import s from './styles.module.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import img1 from '../../../assets/image/swipper.png'
import img2 from '../../../assets/image/img6.png'
import img3 from '../../../assets/image/img4.png'
import {Avatar} from "@mui/material";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Back from "../../../common/back";

const SwipperContent = () => {
    const swiperRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className={s.swipper}>
            <Back/>

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onActiveIndexChange={(e) => {
                    setCurrentIndex(e?.activeIndex)
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide><Avatar sx={{width: '100%', borderRadius: 0, height: '257px'}} src={img1}
                                     alt="img1"/></SwiperSlide>
                <SwiperSlide><Avatar sx={{width: '100%', borderRadius: 0, height: '257px'}} src={img2}
                                     alt="img2"/></SwiperSlide>
                <SwiperSlide><Avatar sx={{width: '100%', borderRadius: 0, height: '257px'}} src={img3}
                                     alt="img3"/></SwiperSlide>
            </Swiper>

            <div className={s.dots}>
                <div className={classNames(s.dot, currentIndex === 0 && s.active_dot)}/>
                <div className={classNames(s.dot, currentIndex === 1 && s.active_dot)}/>
                <div className={classNames(s.dot, currentIndex === 2 && s.active_dot)}/>
            </div>
        </div>
    );
};

export default SwipperContent;
