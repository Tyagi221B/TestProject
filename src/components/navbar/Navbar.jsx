const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light mt-1 ps-5 pe-5">
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
									Home
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
										<a className="dropdown-item" href="/action">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/another-action">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="/haha">
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
								<a className="nav-link" href="/testimonials">
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
