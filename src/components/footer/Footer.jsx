import React from "react";
import { useSelector } from "react-redux";
import "./footer.scss";

const Footer = () => {
	const userData = useSelector((state) => state.profile.user_data);
	const userName = userData?.user?.about?.name || ""; // Destructuring to simplify access
	return (
		<footer className='footer'>
			<div className='footer_container container'>
				<h1 className='footer_title'>{userName}</h1>
				<ul className='footer_list'>
					<li>
						<a href='#about' className='footer_link'>
							About
						</a>
					</li>
					<li>
						<a href='#portfolio' className='footer_link'>
							Projects
						</a>
					</li>
					<li>
						<a href='#testimonials' className='footer_link'>
							Testimonials
						</a>
					</li>
				</ul>

				<div className='footer_social'>
					<a
						href='https://www.facebook.com/'
						className='footer_social-link'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='bx bxl-facebook'></i>
					</a>
					<a
						href='https://discord.com/'
						className='footer_social-link'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='bx bxl-discord-alt'></i>{" "}
					</a>
					<a
						href='https://twitter.com/'
						className='footer_social-link'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='bx bxl-twitter'></i>
					</a>
				</div>

				<span className='footer_copy'>
					&#169; shilesh_rk. All rights reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
