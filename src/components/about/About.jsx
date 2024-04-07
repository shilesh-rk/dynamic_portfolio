import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Info from "./Info";
import { fadeIn } from "../../framer-motion/variants";
import "./about.scss";

const About = () => {
	const userData = useSelector((state) => state.profile.user_data);
	const { about } = userData?.user || {}; // Destructuring to simplify access

	return (
		<section className='about section' id='about'>
			<h2 className='section_title'>About Me </h2>
			<span className='section_subtitle'>My Introduction</span>
			<div className='about_container container grid'>
				{about && (
					<motion.img
						variants={fadeIn("left", 0.2)}
						initial='hidden'
						whileInView={"show"}
						viewport={{ once: false, amount: 0.5 }}
						src={about.avatar?.url || ""}
						alt='John'
						className='about_img'
					/>
				)}
				<motion.div
					variants={fadeIn("right", 0.2)}
					initial='hidden'
					whileInView={"show"}
					viewport={{ once: false, amount: 0.5 }}
					className='about_data'>
					<Info />
					<p className='about_description'>{about?.description || ""}</p>
					{about && (
						<motion.a
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							download=''
							href={about.avatar?.url || ""}
							className='button button__flex'>
							Download CV
						</motion.a>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default About;
