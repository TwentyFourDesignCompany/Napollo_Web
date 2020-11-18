import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header/index";
import "./Home.css";
import Slider from "react-slick";
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import img4 from "../../assets/images/carousel-img4.png";
import img from "../../assets/images/carousel-img.png";
import img2 from "../../assets/images/carousel-img2.png";
import img3 from "../../assets/images/carousel-img3.png";
import img1 from "../../assets/images/carousel-img1.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    img: img4,
    text: "Coming Soon",
  },
  {
    img: img,
    text: "See the top artist in your area",
  },
  {
    img: img1,
    text: "Discover new artist locally & globally",
  },
  {
    img: img2,
    text: "Save time when listening to tracks",
  },
  {
    img: img3,
    text: "Your favourite song is just a swipe away",
  },
];
// CAROUSEL SETTINGS
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000
};

const carouselList = data.map((data, index) => (
  <div key={index}>
    <CarouselItem img={data.img} />
    <h1 className="text-center text-white-50 home_carousel_text mt-4">
      {data.text}
    </h1>
  </div>
));

const Home = () => {
  return (
    <>
      <Container fluid>
        <Header />
        <Row className=" home">
          <Col xs={12} className="mx-auto mt-5">
            <h1 className="text-center banner_note text-white-50">
              Site under Construction
            </h1>
            <motion.h2
              className="text-white text-center leading-4 banner_main pt-3"
              animate={{ color: '#400',opacity: 0.8}}
            >
              COMING SOON
            </motion.h2>
            <Col as="div" className="carousel_main_container ">
              {/* CAROUSEL */}

              <Slider {...settings} className="slider">
                {carouselList}
              </Slider>
            </Col>
            <Col as="div" className="mt-5 banner_subtitle_container">
              <h2 className="text-center banner_subtitle ">
                Join us in making music fun again
              </h2>
              <Col as="div" className="mx-auto input-cont">
                <input
                  type="text"
                  className="banner_input"
                  placeholder="Enter Your Email"
                  className="banner_input"
                />
                <button className="banner_email_btn">SEND</button>
              </Col>
              <Col as="div" className="banner_footer">
                <h2 className="banner_footer_title text-center text-white-50  mb-2">
                  stay in contact
                </h2>
                <div className="icon-flex">
                  <FaFacebook size={28} color="#444" className="icons" />

                  <FaTwitter size={28} color="#444" className="icons" />

                  <FaInstagram size={28} color="#444" className="icons" />
                </div>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
