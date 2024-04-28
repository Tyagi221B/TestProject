
import { useState } from "react";
import "./style.css"
import { useEffect } from "react";
const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false); // State variable

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Update state when scrolled
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

	return (
		<div className="">
			<nav className={`navbar navbar-expand-lg ps-5 pe-5 fixed-top  ${isScrolled ? 'nav-bar-scrolled' : 'nav-bar'}`}>
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						DINESHGAHLOT.COM
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">
									HOME 
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="/portfolio"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="true"
								>
									PORTFOLIO
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item text-dark" href="#grid">
											Grid
										</a>
									</li>
									<li>
										<a className="dropdown-item text-dark" href="#image-slider">
											Image Slider
										</a>
									</li>
									<li>
										<hr className="dropdown-divider text-dark" />
									</li>
									<li>
										<a className="dropdown-item text-dark" href="/haha">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/about">
									ABOUT
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#testimonial">
									TESTIMONIALS
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/contact">
									CONTACT
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
