import React from "react";
import "./style.css";

const Testimonial = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

	function handlePrevButtonClick() {
		setCurrentSlideIndex(
			currentSlideIndex === 0 ? 3 - 1 : currentSlideIndex - 1
		);
	}
	function handleNextButtonClick() {
		setCurrentSlideIndex(
			currentSlideIndex === 3 - 1 ? 0 : currentSlideIndex + 1
		);
	}

	return (
		<div id="testimonial" className="row h-100 main-container row justify-content-center back-image">
			<div className="left-container col-5 d-flex flex-column justify-content-between">
				<h1 className="fw-bold">Testimonials</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
					sapiente perferendis et officiis adipisci consectetur repellat
					deleniti earum nemo cumque praesentium provident id consequatur
					dolorum, error animi suscipit, facilis perspiciatis officia nesciunt
					doloribus dolores! Dicta, alias nemo nihil consequatur porro nobis
					minima ipsam voluptatibus perferendis nesciunt fugiat, eos a quos quam
					rerum necessitatibus similique.
				</p>

				<h2 className="fw-bolder">Testimonial {currentSlideIndex + 1}</h2>
			</div>
			<div className="right-container col-5">
				<div
					id="carouselExampleControls"
					className="carousel slide"
				>
					<div className="carousel-inner ">
						<div className="carousel-item active">
							<img
								src="https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								className="d-block slider-images"
								alt="image1"
							/>
						</div>
						<div className="carousel-item">
							<img
								src="/src/assets/image2.jpg"
								className="d-block slider-images"
								alt="image2"
							/>
						</div>
						<div className="carousel-item">
							<img
								src="/src/assets/image3.jpg"
								className="d-block slider-images"
								alt="image3"
							/>
						</div>
					</div>
				</div>
				<div className="bottom-right-container">
					<button
						onClick={handlePrevButtonClick}
						className="carousel-control-prev left-button"
						type="button"
						data-bs-target="#carouselExampleControls"
						data-bs-slide="prev"
					>
						<span
							className="left-arrow"
							aria-hidden="true"
						>
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
						</span>
						<span className="visually-hidden">Previous</span>
					</button>
					<p className="text-center slideCounter">0{currentSlideIndex + 1} / 03</p>
					<button
						onClick={handleNextButtonClick}
						className="carousel-control-next right-button "
						type="button"
						data-bs-target="#carouselExampleControls"
						data-bs-slide="next"
					>
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
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
