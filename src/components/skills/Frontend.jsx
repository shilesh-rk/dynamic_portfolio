import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer-motion/variants";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

const Frontend = () => {
	const userData = useSelector((state) => state.profile.user_data);
	const frontendSkills = [
		"React",
		"Next.js",
		"Javascript",
		"TypeScript",
		"HTML",
		"CSS",
		"Tailwind",
		"Sass",
		"Figma",
		"Redux",
	];

	return (
		<motion.div
			variants={fadeIn("up", 0.1)}
			initial='hidden'
			whileInView={"show"}
			viewport={{ once: false, amount: 0.5 }}
			className='skills_content'>
			<h3 className='skills_title'>Frontend</h3>
			<div className='skills_box'>
				<div className='skills_group'>
					{frontendSkills.map((skill, index) => {
						const skillPercentage =
							userData?.user?.skills
								.filter((item) => item.enabled)
								?.find((item) => item.name === skill)?.percentage || 0;
						const skillImage =
							userData?.user?.skills
								.filter((item) => item.enabled)
								?.find((item) => item.name === skill)?.image.url || "";
						const skillEnabled = userData?.user?.skills?.find(
							(item) => item.name === skill
						)?.enabled;
						return (
							<React.Fragment key={index}>
								{" "}
								{/* Provide a unique key to the fragment */}
								{skillEnabled && (
									<div
										className='skills_data'
										style={{ ...(index > 4 && { order: 0 }) }}>
										<div
											style={{ width: 40, height: 40, paddingBottom: "2px" }}>
											<CircularProgressbar
												key={index}
												value={skillPercentage ? skillPercentage : ""}
												text={`${skillPercentage ? skillPercentage : ""}%`}
												styles={buildStyles({
													rotation: 0.25,
													strokeLinecap: "butt",
													textSize: "32px",
													pathTransitionDuration: 1.5,
													transition: "stroke-dashoffset 0.5s ease 0s",
													pathColor: "black",
													trailColor: "white",
													backgroundColor: "yellow",
													textColor: "black",
												})}
											/>
										</div>
										<img
											src={skillImage}
											alt=''
											width={40}
											style={{ padding: "0.5rem" }}
										/>
										<div>
											<h3 className='skills_name'>{skill}</h3>
											<span className='skills_level'>
												{skillPercentage > 79 && "Advance"}
												{skillPercentage > 49 &&
													skillPercentage <= 79 &&
													"Intermediate"}
												{skillPercentage > 29 &&
													skillPercentage <= 49 &&
													"Basic"}
											</span>
										</div>
									</div>
								)}
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
};

export default Frontend;
