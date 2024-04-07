import React, { useState, useEffect } from "react";
import "./header.scss";
import { useSelector } from "react-redux";

const Header = () => {
	const [menu, setMenu] = useState(false);
	const [scrollHeader, setScrollHeader] = useState(false);
	const [activeNav, setActiveNav] = useState("#home");
	const userData = useSelector((state) => state.profile.user_data);
	const userName = userData?.user?.about?.name || "";

	window.addEventListener("scroll", function () {
		const header = document.querySelector(".header");
		if (this.scrollY >= 80) header.classList.add("scroll-header");
		else header.classList.remove("scroll-header");
	});

	const handleNavClick = (nav) => {
		setActiveNav(nav);
		setMenu(false);
	};

	return (
		<header className={`header ${scrollHeader ? "scroll_header" : ""}`}>
			<nav className='nav container'>
				{!menu && (
					<a href='index.html' className='nav_logo'>
						{userName}
					</a>
				)}

				<div className={`nav_menu ${menu ? "show_menu" : ""}`}>
					<ul className='nav_list grid'>
						{[
							"#home",
							"#about",
							"#services",
							"#skills",
							"#portfolio",
							"#contact",
						].map((navItem) => (
							<li key={navItem} className='nav_item'>
								<a
									href={navItem === "#home" ? "#" : `${navItem}`}
									onClick={() => handleNavClick(navItem)}
									className={`nav_link ${
										activeNav === navItem ? "active_link" : ""
									}`}>
									<i className={`uil uil-${getNavIcon(navItem)} nav_icon`}></i>{" "}
									{getNavLabel(navItem)}
								</a>
							</li>
						))}
					</ul>
					<i
						className='uil uil-times nav_close'
						onClick={() => setMenu(false)}></i>
				</div>
				<div className='nav_toggle' onClick={() => setMenu(true)}>
					{!menu && <i className='uil uil-apps'></i>}
				</div>
			</nav>
		</header>
	);
};

export default Header;

// Helper functions to get nav icon and label
const getNavIcon = (navItem) => {
	const icons = {
		"#home": "estate",
		"#about": "user",
		"#skills": "file-alt",
		"#services": "briefcase-alt",
		"#portfolio": "scenery",
		"#contact": "message",
	};
	return icons[navItem];
};

const getNavLabel = (navItem) => {
	const labels = {
		"#home": "Home",
		"#about": "About",
		"#skills": "Skills",
		"#services": "Services",
		"#portfolio": "Portfolio",
		"#contact": "Contact",
	};
	return labels[navItem];
};
