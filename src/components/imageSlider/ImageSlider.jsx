import React from "react";
import "./style.css";

// ImageSlider component
const ImageSlider = () => {
	// State for current slide index
	const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

	// Function to handle previous button click
	function handlePrevButtonClick() {
		setCurrentSlideIndex(
			currentSlideIndex === 0 ? 3 - 1 : currentSlideIndex - 1
		);
	}

	// Function to handle next button click
	function handleNextButtonClick() {
		setCurrentSlideIndex(
			currentSlideIndex === 3 - 1 ? 0 : currentSlideIndex + 1
		);
	}
	return (
		<div className="slider-container ">
			<div
				id="carouselExampleControlsNoTouch"
				className="carousel slide"
				// data-bs-touch="false"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="cards-wrapper">
							<div className="card">
								<img
									src="https://images.unsplash.com/photo-1713735962803-5bff1f596614?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
									className="primary-image"
									alt="..."
								/>
							</div>
							<div className="card">
								<img
									src="https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8Mzc1NjIzODZ8fGVufDB8fHx8fA%3D%3D"
									className="secondary-image"
									alt="..."
								/>
							</div>
							<div className="card">
								<img
									src="https://images.unsplash.com/photo-1714113728562-6c67a7cb4542?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
									className="primary-image"
									alt="..."
								/>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="cards-wrapper">
							<div className="card">
								<img
									src="https://images.unsplash.com/photo-1713526715535-43f5cc19e617?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
									className="primary-image"
									alt="..."
								/>
							</div>
							<div className="card">
								<img
									src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhcHB5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
									className="secondary-image"
									alt="..."
								/>
							</div>
							<div className="card">
								<img
									src="https://plus.unsplash.com/premium_photo-1683319786546-4f902f0d76c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"
									className="primary-image"
									alt="..."
								/>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="cards-wrapper">
							<div className="card">
								<img
									src="https://images.unsplash.com/photo-1713781317896-75f337b2db2a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D"
									className="primary-image"
									alt="..."
								/>
							</div>
							<div className="card">
								<img
									src="https://plus.unsplash.com/premium_photo-1712416360053-15da053a1546?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D"
									className="secondary-image"
									alt="..."
								/>
							</div>
							<div className="card">
								<img
									src="https://images.unsplash.com/photo-1654010816950-55f59acb385a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D"
									className="primary-image"
									alt="..."
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
      <div className="bottom-container">
			<div className="bottom-inner-container">
				<button
					onClick={handlePrevButtonClick}
					className="carousel-control-prev left-button"
					type="button"
					data-bs-target="#carouselExampleControlsNoTouch"
					data-bs-slide="prev"
				>
					<span className="left-arrow" aria-hidden="true">
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
					data-bs-target="#carouselExampleControlsNoTouch"
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

export default ImageSlider;
