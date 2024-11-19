import React, { useEffect } from 'react'
import "./contact.css"
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { Col, Container, Row } from 'react-bootstrap'
import { SiMailtrap } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import Aos from "aos"
import "aos/dist/aos.css"

const Contact = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1500
        });
    },[])
  return (
    <section className='contact'>
        <Container>
            <div className='contact-text'>
                <h2>Contact Me</h2>
                <p>Get in Touch</p>
            </div>
            <Row className='justify-content-between'>
                <Col lg={6} md={6} sm={12}>
                    <div className='left-box'>
                        <h3>Talk to Me</h3>
                        <Col data-aos="flip-up" className='left-box1' lg={7}>
                        <SiMailtrap />
                        <h3>E-mail</h3>
                        <a className='address'>jisan2001gsc@gmail.com</a>
                        <a className='common'>Write me</a>
                        </Col>
                        <Col data-aos="flip-up" className='left-box2' lg={7}>
                        <FaWhatsapp />
                        <h3>WhatsApp</h3>
                        <a className='address'>01300899360</a>
                        <a className='common'>Write me</a>
                        </Col>
                        <Col data-aos="flip-up" className='left-box3' lg={7}>
                        <RiMessengerLine />
                        <h3>Messenger</h3>
                        <a className='address'>fb.com</a>
                        <a className='common'>Write me</a>
                        </Col>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Col lg={7} sm={12} className='contact-form'>
                    <h3>Write Me your projects</h3>
                    <form>
                        <input type='text' placeholder='Enter your name'></input>
                        <input type='email' placeholder='Enter your mail'></input>
                        <textarea placeholder='Write your Project'></textarea>
                        
                    </form>
                    <a>Send Message <PiPaperPlaneTiltBold /> </a>
                    </Col>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact