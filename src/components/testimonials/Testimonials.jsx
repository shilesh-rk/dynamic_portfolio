import React from "react";
import "./testimonials.scss";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { fadeIn } from "../../framer-motion/variants";

const Testimonials = () => {
	const Data = useSelector((state) => state.profile.user_data?.user);
	return (
		<section className='testimonial container section' id='testimonials'>
			<h2 className='section_title'>My Clients Says</h2>
			<span className='section_subtitle'>Testimonial</span>

			<Swiper
				className='testimonial_container'
				grabCursor={true}
				spaceBetween={24}
				pagination={{ clickable: true }}
				autoplay={{ delay: 2000 }}
				breakpoints={{
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 48,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 48,
					},
				}}
				modules={[Autoplay, Pagination]}>
				{Data?.testimonials?.map((client, index) => {
					const Enable = client.enabled;
					return (
						<SwiperSlide className='testimonial_card' key={index}>
							<div className='name_img'>
								<motion.h3
									variants={fadeIn("left", 0.4)}
									initial='hidden'
									whileInView={"show"}
									className='testimonial_name'>
									{Enable && client.name}
								</motion.h3>
								<motion.img
									variants={fadeIn("right", 0.4)}
									initial='hidden'
									whileInView={"show"}
									src={Enable && client.image.url}
									className='testimonial_img'></motion.img>
							</div>

							<p className='testimonial_description'>
								{Enable && client.review}{" "}
							</p>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
