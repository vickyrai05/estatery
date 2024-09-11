'use client';
import { Container, Row, Col } from "react-bootstrap";
import '../../../../public/styling/sass/cities.scss';
import feature1 from '../../../../public/images/feature1.png'
import feature2 from '../../../../public/images/feature2.png'
import feature3 from '../../../../public/images/feature3.png'
import feature4 from '../../../../public/images/feature4.png'
import feature5 from '../../../../public/images/feature5.png'
import feature6 from '../../../../public/images/feature6.png'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";



const Cities = () => {
    return (
        <section className="cities_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="city_area">
                            <div className="content">
                                <div className="heading">
                                    See More Properties
                                </div>
                                <div className="sub-heading">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                            <div className="slider">
                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    loop={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 115,
                                        modifier: 2.8
                                    }}
                                    pagination={{ clickable: true }}
                                    navigation={true}
                                    modules={[EffectCoverflow, Pagination, Navigation]}
                                    className="swiper_container"
                                >
                                    <SwiperSlide>
                                        <Image src={feature1} alt="" title="" fetchPriority="low" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={feature2} alt="" title="" fetchPriority="low" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={feature3} alt="" title="" fetchPriority="low" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={feature4} alt="" title="" fetchPriority="low" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={feature5} alt="" title="" fetchPriority="low" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={feature6} alt="" title="" fetchPriority="low" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Cities;
