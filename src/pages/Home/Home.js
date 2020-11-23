import React, { useState, useEffect } from "react";
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
import ToastContainer from "../../components/ToastNotification/Toast";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from "react-toastify";

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
    <h1 className="text-center text-white-50 home_carousel_text mt-2">
      {data.text}
    </h1>
  </div>
));

const Home = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(undefined);
  const [error, setError] = useState(undefined);

  const toasts = () =>
    toast.success(<ToastContainer title="Thank you for subscribing" />, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const Errortoasts = (error) =>
    toast.error(<ToastContainer title={error} error/>, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  useEffect(() => {
    if (status) {
      return toasts();
    }
    if (error) {
      return Errortoasts(error.text)
    }
    
  }, [status]);
  function sendEmail(e) {
    e.preventDefault();
    setStatus(undefined);
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
          setError(error.text)
        }
      );
    setEmail("");
    // setStatus(undefined)
  }

  return (
    <>
      <Container fluid className="w-full">
        <Header />
        <Row className=" home">
          <Col xs={12} className="mx-auto mt-2">
            <h1 className="text-center banner_note text-white-50">
              Site under Construction
            </h1>
            <h2 className="text-white text-center banner_main pt-1 mx-auto">
              COMING SOON
            </h2>
            <Col as="div" className="carousel_main_container ">
              {/* CAROUSEL */}

              <Slider {...settings} className="slider">
                {carouselList}
              </Slider>
            </Col>
            <Col as="div" className="mt-1 banner_subtitle_container">
              <h2 className="text-center banner_subtitle ">
                Join us in making music fun again
              </h2>

              {/* {status && (
                <Message variant="success">
                  Success: Thank you for subscribing
                </Message>
              )} */}
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
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="banner_email_btn"
                    type="submit"
                    disabled={email === ""}
                  >
                    SEND
                  </button>
                </form>
              </Col>
              <Col as="div" className="banner_footer">
                <h2 className="banner_footer_title text-center text-white-50  mb-2">
                  stay in contact
                </h2>
                <div className="icon-flex">
                  <FaFacebook size={24} color="#444" className="icons" />

                  <FaTwitter size={24} color="#444" className="icons" />

                  <FaInstagram size={24} color="#444" className="icons" />
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
