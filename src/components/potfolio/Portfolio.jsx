import React, { useState } from "react";
import "./portfolio.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer-motion/variants";
import { useSelector } from "react-redux";

const Portfolio = () => {
	const userData = useSelector((state) => state.profile.user_data);
	const [toggle, setToggle] = useState(-1);
	const randomIndex = Math.floor(
		Math.random() * userData?.user?.projects?.length - 3
	);

	return (
		<section className='portfolio section' id='portfolio'>
			<h2 className='section_title'>Portfolio</h2>
			<span className='section_subtitle'>What I Did</span>

			<div className='portfolio_container container grid'>
				{userData?.user?.projects?.map((project, index) => {
					const Enable = project.enabled;
					return (
						<React.Fragment key={index}>
							<motion.div
								
								variants={fadeIn(
									index + index === randomIndex ? "up" : "down",
									0.4
								)}
								initial='hidden'
								whileInView={"show"}
								viewport={{ once: false, amount: 0.5 }}
								className='portfolio_content'>
								<img
									src={Enable && project.image.url}
									alt='project image'
									className='image'
								/>
								<div>
									<h3 className='portfolio_title'>{Enable && project.title}</h3>
								</div>
								<span
									className='portfolio_button'
									onClick={() => setToggle(index)}>
									View More
								</span>

								{Enable && (
									<div
										className={`portfolio_modal ${
											toggle === index ? "active-modal" : ""
										}`}>
										<div className='portfolio_modal-content'>
											<i
												className='uil uil-times portfolio_modal-close'
												onClick={() => setToggle(-1)}></i>
											<img
												className='services_modal-image'
												src={project.image.url}
												alt='project'
											/>
											<h3 className='services_modal-title'>{project.title}</h3>
											<p className='services_modal-description'>
												{project.description}
											</p>
											<p className='portfolio_modal-info'>
												TechStack: {project.techStack}
											</p>
											<div className='pro_buttons'>
												<a href='#' target='_blank' className='modal-buttons'>
													<span className='tooltip'>Source Code</span>
													<i className='bx bx-code-alt'></i>
												</a>
												<a href='#' target='_blank' className='modal-buttons'>
													<span className='tooltip'>Demo</span>
													<i className='bx bx-devices'></i>
												</a>
											</div>
										</div>
									</div>
								)}
							</motion.div>
						</React.Fragment>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
