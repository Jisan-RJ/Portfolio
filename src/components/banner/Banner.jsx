import React, { useEffect } from 'react'
import "./banner.css"
import { FaRegPaperPlane } from "react-icons/fa6";
import bb from "../../assets/banner-edit-modified.png"
import { Container, Col, Row } from 'react-bootstrap'
import Aos from "aos"
import "aos/dist/aos.css"

const Banner = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1500
        });
    },[])
  return (
    <section className='banner'>
        <Container>
            <Row className='justify-content-between space'>
            <Col lg={6} className='text-side'>
                <h1  data-aos="fade-right">Rakibul Islam Jisan</h1>
                <h3  data-aos="fade-left">I'm a Web Developer</h3>
                <p  data-aos="fade-down">I am a full stack web developer from Bangladesh. I am very free minded. I hope my work will satisfy you</p>
                <a data-aos="flip-left">Say Hello <FaRegPaperPlane /></a>
            </Col>
            <Col lg={6} className='photo-side'>
                <img data-aos="flip-down" src={bb}></img>
            </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner