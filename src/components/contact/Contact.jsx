import React from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer-motion/variants";
import { useSelector } from "react-redux";

const Contact = () => {
	const userData = useSelector((state) => state.profile.user_data?.user);
	return (
		<section className='contact section' id='contact'>
			<h2 className='section_title'>Get in touch</h2>
			<span className='section_subtitle'>Contact Me</span>

			<div className='contact_container container grid'>
				<div className='contact_content'>
					<h3 className='contact_title'>Talk to me</h3>
					<div className='contact_info'>
						{userData?.social_handles
							?.filter((item) => item.enabled)
							?.map((media, index) => {
								return (
									<motion.div key={index}
										variants={fadeIn("down", 0.1)}
										initial='hidden'
										whileInView={"show"}
										viewport={{ once: false, amount: 0.5 }}
										className='contact_card'>
										<img
											className='contact_card-icon'
											src={media.image.url}
											alt=''
										/>
										<h3 className='contact_card-title'>{media.platform}</h3>
										<a href='#' className='contact_button'>
											{`@john_${media.platform.toLowerCase()}`}
											<button
												href='#'
												className='bx bx-right-arrow-alt contact_button-icon'></button>
										</a>
									</motion.div>
								);
							})}
					</div>
				</div>

				<div className='contact-content'>
					<h3 className='contact_title'>Write me your project</h3>

					<form action='' className='contact_form'>
						<div className='contact_form-div'>
							<label htmlFor='' className='contact_form-tag'>
								Mail
							</label>
							<input
								type='email'
								name='email'
								className='contact_form-input'
								placeholder='insert your email'
							/>
						</div>

						<div className='contact_form-div'>
							<label htmlFor='' className='contact_form-tag'>
								Name
							</label>
							<input
								type='text'
								name='name'
								className='contact_form-input'
								placeholder='insert your name'
							/>
						</div>

						<div className='contact_form-div contact_form-area'>
							<label htmlFor='' className='contact_form-tag'>
								Project
							</label>
							<textarea
								name='project'
								cols='30'
								rows='10'
								className='contact_form-input'
								placeholder='Write your project'></textarea>
						</div>
						<motion.div
							variants={fadeIn("right", 0.1)}
							initial='hidden'
							whileInView={"show"}
							viewport={ { once: false, amount: 0.5 } }>
							<button className='button button--flex'>Send Message <i className='uil uil-message'></i> </button>
							
							
						</motion.div>
					</form>
				</div>
			</div>
		</section>
	);
};
export default Contact;
