import React from "react";
import "./hero.scss";
import Socials from "./Socials";
import Data from "./Data";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer-motion/variants";

const Hero = () => {
	const userData = useSelector((state) => state.profile.user_data);
	const avatarUrl = userData?.user?.about?.alternateAvatars[0]?.url;

	return (
		<section className='hero section' id='hero'>
			<motion.div
				variants={fadeIn("up", 0.1)}
				initial='hidden'
				whileInView={"show"}
				viewport={{ once: false, amount: 0.5 }}
				className='hero_container container grid'>
				<div className='hero_content grid'>
					<Socials />
					<motion.img
						src={avatarUrl}
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						whileInView={{ rotate: -360 }}
						className='hero_img'></motion.img>
					<Data />
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
