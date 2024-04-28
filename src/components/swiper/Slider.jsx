import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectCoverflow,
} from "swiper/modules";
import imageData from "./mock.json";
import SlideNavButtons from "./SwiperNavButtons";
import './style.css';


const Slider = () => {
	return (
		<>
			<div className="swiper-container">
				<div className="swiper-inner-container">
					<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={3}
					loop={true}
					navigation
					spaceBetween={30}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2,
						slideShadows: true,
					}}
					pagination={{ type: "fraction" }}
					modules={[
						EffectCoverflow,
						Pagination,
						Navigation,
						Scrollbar,
						A11y,
						EffectCoverflow,
					]}
					className="mySwiper text-light"
				>
					{imageData.map((image) => (
						<SwiperSlide key={image.id}>
							<img src={image.image} />
						</SwiperSlide>
					))}
					<SlideNavButtons/>
				</Swiper>

				</div>
			</div>
		</>
	);
};

export default Slider;
