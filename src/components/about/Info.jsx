import React from "react";
import { useSelector } from "react-redux";

const Info = () => {
	const userData = useSelector((state) => state.profile.user_data);
	const { about } = userData?.user || {}; // Destructuring to simplify access

	return (
		<div className='about_info grid'>
			{about && (
				<div className='about_box'>
					<i className='bx bx-award about-icon'></i>
					<h3 className='about_title'>Experience</h3>
					<span className='about_subtitle'>
						{about.exp_year} Years of Journey
					</span>
				</div>
			)}
			{about && (
				<div className='about_box'>
					<i className='bx bx-briefcase-alt about-icon'></i>
					<h3 className='about_title'>Completed</h3>
					<span className='about_subtitle'>{about.some_total} + Projects</span>
				</div>
			)}
			<div className='about_box'>
				<i className='bx bx-support about-icon'></i>
				<h3 className='about_title'>Support</h3>
				<span className='about_subtitle'>Online 24/7</span>
			</div>
		</div>
	);
};

export default Info;
