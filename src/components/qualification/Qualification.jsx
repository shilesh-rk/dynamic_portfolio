import React, { useState } from "react";
import "./qualification.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer-motion/variants";
import { useSelector } from "react-redux";


const Qualification = () => {
	const userData = useSelector((state) => state.profile.user_data);
	const [toggle, setToggle] = useState(1);
	const toggleTab = (index) => {
		setToggle(index);
	};
	return (
		<section className='qualification section'>
			<h2 className='section_title'>Qualification</h2>
			<span className='section_subtitle'>My Personal Journey</span>

			<div className='qualification_container container'>
				<div className='qualification_tabs'>
					<div
						className={
							toggle === 1
								? "qualification_button  button--flex qualification_active"
								: "qualification_button  button--flex"
						}
						onClick={() => toggleTab(1)}>
						<i className='uil uil-graduation-cap qualification_icon'></i>
						Education
					</div>

					<div
						className={
							toggle === 2
								? "qualification_button  button--flex qualification_active"
								: "qualification_button  button--flex"
						}
						onClick={() => toggleTab(2)}>
						<i className='uil uil-briefcase-alt qualification_icon'></i>
						Experience
					</div>
				</div>

				<div className='qualification_sections'>
					<div
						className={
							toggle === 1
								? "qualification_content qualification_content-active"
								: "qualification_content"
						}>
						{userData?.user?.timeline?.map((edu, index) => {
							const Enable = edu.enabled;
							const startDate = Enable && edu.startDate.substring(0, 7);
							const endDate =Enable && edu.endDate.substring(0, 7);
							return (
								<div className='qualification_data' key={index}>
									{index === 3 && (
										<>
											<div></div>
											<div>
												<span className='qualification_rounder'></span>
												<span className='qualification_line'></span>
											</div>
										</>
									)}
									{edu.forEducation && (
										<motion.div
											variants={fadeIn(
												`${index === 3 ? "left" : "right"}`,
												0.4
											)}
											initial='hidden'
											whileInView={"show"}>
											<h3 className='qualification_title'>
												{Enable && edu ? edu?.jobTitle : ""}
											</h3>
											<span className='qualification_subtitle'>
												{Enable && edu ? edu.company_name : ""}
											</span>
											<div className='qualification_calendar'>
												<i className='uil uil-calendar-alt'></i>
												{startDate} <i className='bx bx-transfer-alt'></i>
												{endDate}
											</div>
										</motion.div>
									)}
									{(index === 0 || index === 5) && edu.forEducation && (
										<div>
											<motion.span
												variants={fadeIn(`${index === 1 ? "up" : "down"}`, 0.4)}
												initial='hidden'
												whileInView={"show"}
												className='qualification_rounder'></motion.span>

											<span className='qualification_line'></span>
										</div>
									)}
								</div>
							);
						})}

					</div>

					<div
						className={
							toggle === 2
								? "qualification_content qualification_content-active"
								: "qualification_content"
						}>
						{userData?.user?.timeline
							?.map((edu, index) => {
								const Enable = edu.enabled;
							const startDate = Enable && edu.startDate.substring(0, 7);
								const endDate =Enable && edu.endDate.substring(0, 7);
							return (
								<div className='qualification_data' key={index}>
									{index === 1 || index===2 && (
										<>
											<div></div>
											<div>
												<motion.span
													variants={fadeIn(
														'up',
														0.4
													)}
													initial='hidden'
													whileInView={"show"}  className='qualification_rounder'></motion.span>
												<span className='qualification_line'></span>
											</div>
										</>
									)}
									{!edu.forEducation && (
										<motion.div
											variants={fadeIn(`${index === 2 ? 'left':'right'}`, 0.4)}
											initial='hidden'
											whileInView={"show"}>
											<h3 className='qualification_title'>
												{edu ? edu?.jobTitle : ""}
											</h3>
											<span className='qualification_subtitle'>
												{Enable && edu ? edu.company_name : ""}
											</span>
											<div className='qualification_calendar'>
												<i className='uil uil-calendar-alt'></i>
												{startDate} <i className='bx bx-transfer-alt'></i>
												{endDate}
											</div>
										</motion.div>
									)}
									{(index === 4 || index === 1) && !edu.forEducation && (
										<div>
											<motion.span
												variants={fadeIn(`${index === 1 ? "up" : "down"}`, 0.4)}
												initial='hidden'
												whileInView={"show"} className='qualification_rounder'></motion.span>
											<span className='qualification_line'></span>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
