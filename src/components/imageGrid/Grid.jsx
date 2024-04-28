import React from "react";
import "./style.css";

const Grid = () => {
	return (
		<div id="grid" className="grid-container">
					<div className="box img2 image-height-primary mx-4">Mountain</div>

			<div className="row justify-content-evenly ">

				<div className="col-3 ">
					<div className="box img5 image-height-secondary">Beach</div>
					<div className="box img1 image-height-primary">Waterfall</div>
				</div>
				<div className="col-5">
					<div className="box img3 image-height-primary">Sun</div>
				<div className="box img4 image-height-secondary">Bridge</div>
				</div>
				<div className="col-3">
				<div className="box img7 image-height-secondary">Green</div>
					<div className="box img6 image-height-primary">Forest</div>
				</div>
			</div>
		</div>
	);
};

export default Grid;
