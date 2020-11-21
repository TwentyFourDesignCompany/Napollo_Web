import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header/index";
import emailjs from "emailjs-com";
import "./Home.css";
import Slider from "react-slick";
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import img4 from "../../assets/images/carousel-img4.png";
import img from "../../assets/images/carousel-img.png";
import img2 from "../../assets/images/carousel-img2.png";
import img3 from "../../assets/images/carousel-img3.png";
import img1 from "../../assets/images/carousel-img1.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCheckCircle,
} from "react-icons/fa";

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
  autoplaySpeed: 2000,
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
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(undefined);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_GMAIL_SERVICE_CODE,
        process.env.REACT_APP_MAIL_TEMPLATE,
        e.target,
        process.env.REACT_APP_GMAIL_SERVICE_ID
      )
      .then(
        (result) => {
          setStatus(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmail("");
  }

  return (
    <>
      <Container fluid>
        <Header />
        <Row className=" home">
          <Col xs={12} className="mx-auto mt-5">
            <h1 className="text-center banner_note text-white-50">
              Site under Construction
            </h1>
            <h2
              className="text-white text-center leading-4 banner_main pt-3"
              animate={{ color: "#400", opacity: 0.8 }}
            >
              COMING SOON
            </h2>
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
                <form
                  onSubmit={sendEmail}
                  className="d-flex w-full justify-between input-cont2 mx-auto"
                >
                  <input
                    type="email"
                    className="banner_input"
                    placeholder="Enter Your Email"
                    required
                    className="banner_input"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="banner_email_btn"
                    type="submit"
                    disabled={!email }
                  >
                    {!status ? (
                      "SEND"
                    ) : (
                      <FaCheckCircle color="green" size={20} />
                    )}
                  </button>
                </form>
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
