import { useSwiper } from "swiper/react";

export default function SlideNavButtons() {
	const swiper = useSwiper();

	return (
		<div className="swiper-nav-buttons">
			<button type="button" className="btn" onClick={() => swiper.slidePrev()}>
      <svg
								id="i-arrow-left"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 32 32"
								width="32"
								height="32"
								fill="none"
								stroke="white"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							>
								<path d="M10 6 L2 16 10 26 M2 16 L30 16" />
							</svg>
			</button>
			<button type="button" className="btn " onClick={() => swiper.slideNext()}>
      <span className="right-arrow" aria-hidden="true">
							<svg
								id="i-arrow-right"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 32 32"
								width="32"
								height="32"
								fill="none"
								stroke="white"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							>
								<path d="M22 6 L30 16 22 26 M30 16 L2 16" />
							</svg>
						</span>
			</button>
		</div>
	);
}
