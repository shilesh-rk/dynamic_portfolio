import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import axios from "axios";
import { get_details, setLoading } from "../../redux/slice"; // Action from slice file
import { fadeIn } from "../../framer-motion/variants";

const Data = () => {
	const userData = useSelector((state) => state.profile.user_data);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setLoading(true));
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
				);
				dispatch(get_details(response.data));
			} catch (error) {
				console.log(error);
			} finally {
				dispatch(setLoading(false));
			}
		};
		setTimeout(() => {
			fetchData();
		}, 3000);
	}, []);

	const { name, title, subTitle } = userData?.user?.about || {};

	return (
			<motion.div
				variants={fadeIn("right", 0.4)}
				initial='hidden'
				whileInView={"show"}
				className='hero_data'>
				<h1 className='hero_title'>{name}</h1>
				<h3 className='hero_subtitle'>{title}</h3>
				<p className='hero_description'>{subTitle}</p>
				<a href='#contact' className='button'>
					Say Hello <i className='uil uil-message button_icon'></i>
				</a>
			</motion.div>
		
	);
};

export default Data;
