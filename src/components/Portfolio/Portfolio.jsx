import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CryptoApp from "../../img/crytoapp.png";
import TodoApp from "../../img/todoapp.png";
import PortfolioApp from "../../img/portfolio.png";
import MusicApp from "../../img/musicapp.png";
import Kwingy from "../../img/kwingy.png";
import Farmhut from "../../img/farmhut.png";
import WeFarm from "../../img/wefarm.png";
import Selmor from "../../img/selmorsite.png";
import invoice from "../../img/invoice.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://kwingy.com/">
            <img src={Kwingy} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://invoice-vue-app.netlify.app/">
            <img src={invoice} alt="" />
          </a>
        </SwiperSlide>


        <SwiperSlide>
          <a href="https://farmhutafrica.com/">
            <img src={Farmhut} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://dev-selmorsite.pantheonsite.io/">
            <img src={Selmor} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://cryptoapplication.netlify.app">
            <img src={CryptoApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://wefarminc.netlify.app">
            <img src={WeFarm} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://sicelositsha.netlify.app/">
            <img src={PortfolioApp} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://todo-app-three-mu.vercel.app/">
            <img src={TodoApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://musicapp-xi.vercel.app/#/">
            <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
