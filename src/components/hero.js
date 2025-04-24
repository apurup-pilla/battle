import {
    Box,
    Typography
} from "@mui/material";
import React from "react";

import theme from "../theme";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = ({ ref }) => {
    return (
        <div ref={ref}>
            {/* Swiper Carousel */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                style={{ width: '100%' }}
            >
                {[
                    '/images/c1.jpg',
                    '/images/c2.jpg',
                    '/images/c1.jpg'
                ].map((img, i) => (
                    <SwiperSlide key={i}>
                        <Box sx={{ position: 'relative' }}>
                            <Box
                                component="img"
                                src={img}
                                alt={`Hero Slide ${i}`}
                                sx={{
                                    width: '100%',
                                    height: { xs: 'auto', md: '100vh' },
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Styles for arrows & dots */}
            <Box
                component="style"
                dangerouslySetInnerHTML={{
                    __html: `
                        .swiper-button-prev,
                        .swiper-button-next {
                            color: ${theme.palette.secondary.main};
                            background-color: rgba(0, 0, 0, 0.3);
                            padding: 6px;
                            border-radius: 50%;
                            width: 30px;
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            top: 50%;
                            transform: translateY(-50%);
                        }

                        .swiper-button-prev::after,
                        .swiper-button-next::after {
                            font-size: 16px;
                            font-weight: bold;
                        }

                        .swiper-pagination-bullet {
                            background-color: #ccc;
                            opacity: 1;
                            width: 10px;
                            height: 10px;
                            margin: 0 5px !important;
                        }

                        .swiper-pagination-bullet-active {
                            background-color: ${theme.palette.secondary.main};
                            width: 12px;
                            height: 12px;
                        }

                        @media (max-width: 600px) {
                            .swiper-button-prev,
                            .swiper-button-next {
                                width: 26px;
                                height: 26px;
                                padding: 4px;
                            }

                            .swiper-button-prev::after,
                            .swiper-button-next::after {
                                font-size: 14px;
                            }
                        }
                    `,
                }}
            />
        </div>
    )
}

export default Hero;
