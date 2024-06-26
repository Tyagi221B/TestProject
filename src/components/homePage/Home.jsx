import React from "react";
import "./style.css";

const Home = () => {
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
		<div id="home" className="full-container">
			<div className="carousel-container">
				{/* Carousel  */}
				<div 
				id="carouselExampleControlsHome" 
				data-bs-touch="true"
				data-bs-interval="4000"
				className="carousel slide " >
					<div className="carousel-inner">
						<div className="carousel-item active carousel-image bg-img-1">
							<div className="carousel-container-spacing"></div>
						</div>
						<div className="carousel-item carousel-image bg-img-2">
							<div className="carousel-container-spacing"></div>
						</div>
						<div className="carousel-item carousel-image bg-img-3">
							<div className="carousel-container-spacing"></div>
						</div>
					</div>
				</div>
				{/* Hero Section  */}
				<div className="heroSection">
					<div className="carousel-inner-container row justify-content-center">
						<div className="section-one col-5 d-flex  flex-column justify-content-between py-5 mb-5">
							<h1 className="main-heading">Photography For Adventures Souls & Rebels At Heart</h1>
							<button type="button" className="btn btn-light button-primary">
								Read More
							</button>
						</div>
						<div className="section-two col-5 d-flex flex-column justify-content-end align-items-end py-5 mb-5">
							<p className="">Lorem ipsum dolor sit amet</p>
						</div>
					</div>
				</div>
				{/* carousel buttons */}
				<div className="buttons-container col-10">
        <button
						onClick={handlePrevButtonClick}
						className="carousel-control-prev left-button"
						type="button"
						data-bs-target="#carouselExampleControlsHome"
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
						data-bs-target="#carouselExampleControlsHome"
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

export default Home;
