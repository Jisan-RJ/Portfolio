import React from 'react'
import "./services.css"
import Slider from "react-slick";
import { SiSemanticweb } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiHostinger } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { Col, Container } from 'react-bootstrap'

const Services = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
      };



  return (
    <section className='services'>
        <Container>
            <div className='service-text'>
                <h2>Services</h2>
                <p>What I Offer</p>
            </div>




        
            <Col lg={9} sm={12} className='ssl'>
            <Slider {...settings} className='slider'>
        <div className='box normal border'>
            <SiSemanticweb />
          <h3>Web Design & Development</h3>
          <p>View more <GoArrowRight /></p>
        </div>
        <div className='box inset'>
        <FaLinux />
          <h3>Linux Configuration</h3>
          <p>View more <GoArrowRight /></p>
        </div>
        <div className='box normal border'>
        <SiHostinger />
          <h3>Website Domain & Hosting</h3>
          <p>View more <GoArrowRight /></p>
        </div>
        <div className='box inset'>
        <FaReact />
          <h3>React Js Development</h3>
          <p>View more <GoArrowRight /></p>
        </div>
      </Slider>
            </Col>
    
        </Container>
    </section>
  )
}

export default Services