import "./style.css";

const Section = () => {
	return (
		<div className="main-section-container">
			<div className="header">
				<div className="container header_container">
					<div className="header_left">
						<div className="header_image-bg"></div>
						<div className="header_image-lg">
							<img
								src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Header Image"
							/>
						</div>
						<div className="header_image-sm">
							<img
								src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Header Image"
							/>
						</div>
					</div>
					<div className="header_right">
						<div className="header_head">
							<div className="empty header_empty"></div>
							<a className="header_tag">#Best Travel Photographer 2024</a>
						</div>
						<h1>See The Beauty Of This World Thorough My Lense</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							perspiciatis corrupti velit architecto officiis eligendi! Hic, eos
							fuga sit consequuntur delectus, pariatur, eligendi incidunt
							tempore quae ea sed sunt et!
						</p>
						<a href="mailto:asmittyagi.dev@gmail.com" className="header_btn-md">
							Let's Talk
						</a>
					</div>
				</div>
			</div>
			<div className="header_frames">
				<div className="header_frame">
					<img
						src="https://images.unsplash.com/photo-1675881149241-cd9a629fece5?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Header frame two"
					/>
				</div>
				<div className="header_frame">
					<img
						src="https://images.unsplash.com/photo-1679025907523-e0d3559b49ea?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Header frame two"
					/>
				</div>
			</div>
			<div className="contact-btn-container">
				<a
					href="mailto:asmittyagi.dev@gmail.com"
					className="contact-btn header_btn"
				>
					<span className="material-symbols-outlined">north_east</span>

					<p>CONTACT ME</p>
				</a>
			</div>
		</div>
	);
};

export default Section;
