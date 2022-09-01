import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import CryptoApp from "../../img/crytoapp.png";
import TodoApp from "../../img/todoapp.png";
import PortfolioApp from "../../img/portfolio.png";
import MusicApp from "../../img/musicapp.png";
import Kwingy from "../../img/kwingy.png";
import Farmhut from "../../img/farmhut.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={CryptoApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TodoApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={PortfolioApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Kwingy} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Farmhut} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
