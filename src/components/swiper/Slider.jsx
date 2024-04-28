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


const Slider = () => {
	return (
		<>
			<div className="">
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={3}
					loop={true}
					// navigation
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
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
		</>
	);
};

export default Slider;
