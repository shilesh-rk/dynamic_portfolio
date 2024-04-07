import React, { useState } from "react";
import "./services.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer-motion/variants";
import { useSelector } from "react-redux";

const Services = () => {
	const userData = useSelector((state) => state.profile.user_data);
	const [toggle, setToggle] = useState(-1);

	const randomIndex = Math.floor(Math.random() * 7); // Generating random index for animation

	return (
		<section className='services section' id='services'>
			<h2 className='section_title'>Services</h2>
			<span className='section_subtitle'>What I Offer</span>

			<div className='services_container container grid'>
				{userData?.user?.services?.map((service, index) => {
					const animationDirection =
						index === randomIndex
							? "left"
							: index < randomIndex
							? "up"
							: "right";
					return (
						<motion.div
							key={index}
							variants={fadeIn(animationDirection, 0.4)}
							initial='hidden'
							whileInView={"show"}
							viewport={{ once: false, amount: 0.5 }}
							className='services_content'>
							<div>
								<i className='uil uil-web-grid services_icon'></i>
								<h3 className='services_title'>{service.name}</h3>
							</div>
							<span
								className='services_button'
								onClick={() => setToggle(index)}>
								View more
								<i className='uil uil-arrow-right services_button-icon'></i>
							</span>

							<div
								className={
									toggle === index
										? "services_modal active-modal"
										: "services_modal"
								}>
								<div className='services_modal-content'>
									<i
										className='uil uil-times services_modal-close'
										onClick={() => setToggle(-1)}></i>

									<img
										className='services_modal-image'
										src={service.image.url}
										alt={`${service.name} image`}
									/>
									<h3 className='services_modal-title'>{service.name}</h3>
									<p className='services_modal-description'>{service.desc}</p>

									<button className='button services_modal-button'>
										<i className='uil uil check-circle services_modal-icon'></i>
										<p className='services_modal-info'>
											Charge: {service.charge}
										</p>
									</button>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
