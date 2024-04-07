import React, { useState, useEffect } from "react";
import "./scrollUp.scss";

const ScrollUp = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		setShowScroll(window.pageYOffset > 560);
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => {
			window.removeEventListener("scroll", checkScrollTop);
		};
	}, []);

	return (
		<button
			className={`scrollup ${showScroll ? "show-scroll" : ""}`}
			onClick={scrollTop}>
			<i className='uil uil-arrow-up scrollup_icon'></i>
		</button>
	);
};

export default ScrollUp;
