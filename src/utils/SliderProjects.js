import {ProjectsData} from '../data/db';
import Card from '../components/Body/Projects/Card/Card';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Utils.css';

const MySlider = () => {
    return (
        <Swiper
        className="swiper"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    {ProjectsData.map(item => <SwiperSlide key={item.id}><Card key={item.id} {...item}/></SwiperSlide>)}
                </Swiper>
    )
};

export default MySlider;