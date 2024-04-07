import React from "react";
import { motion } from "framer-motion";

const Socials = () => {
	// Array of social media information
	const socialMedia = [
		{ icon: "github-alt", url: "https://github.com/shilesh-rk" },
		{ icon: "discord", url: "https://www.instagram.com/?hl=en" },
		{
			icon: "linkedin-alt",
			url: "https://www.linkedin.com/in/shilesh-rachakonda-283149229",
		},
	];

	return (
		<motion.div
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			className='hero_social'>
			{socialMedia.map((media, index) => (
				<a
					key={index}
					href={media.url}
					className='hero_social-icon'
					target='_blank'
					rel='noopener noreferrer'>
					<i className={`uil uil-${media.icon}`}></i>
				</a>
			))}
		</motion.div>
	);
};

export default Socials;
