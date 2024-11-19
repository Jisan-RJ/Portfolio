import React, { useEffect } from 'react'
import "./about.css"
import ab from "../../assets/about-edit.png"
import { SiStartrek } from "react-icons/si";
import { FaSuitcase } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineHeadphones } from "react-icons/md";
import { Container, Row, Col } from 'react-bootstrap'
import Aos from "aos"
import "aos/dist/aos.css"

const About = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1500
        });
    },[])
  return (
    <section className='about'>
        <Container>
            <div className='about-text'>
            <h2>About Me</h2>
            <h3>My Introduction</h3>
            </div>
            <Row className='justify-content-between space3'>
                <Col lg={5} className='about-photo'>
                    <img data-aos="zoom-in" src={ab}></img>
                </Col>
                <Col lg={7} md={12} sm={12} className='about-me'>
                    <Row className='justify-content-between space2'>
                        <Col lg={4} md={12} sm={12} className='about-box'>
                            <a><SiStartrek /></a>
                            <h3>Experience</h3>
                            <h6>5 + Years</h6>
                        </Col>
                        <Col lg={4} md={12} sm={12} className='about-box'>
                            <a><FaSuitcase /></a>
                            <h3>Completed</h3>
                            <h6>40 + Projects</h6>
                        </Col>
                        <Col lg={4} md={12} sm={12} className='about-box'>
                            <a><MdOutlineHeadphones /></a>
                            <h3>Support</h3>
                            <h6>Online 24/7</h6>
                        </Col>
                    </Row>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere voluptas, deleniti, voluptatibus doloremque facilis dignissimos nesciunt eos nemo, corporis voluptatem? Doloremque, reiciendis enim unde ea aut illum impedit iure?</p>
                    <a className='cv'>Download CV <FaRegFileAlt /></a>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About