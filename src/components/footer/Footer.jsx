import React from 'react'
import "./footer.css"
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io5";
import { Container, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <section className='footer'>
        <Container>
            <Col lg={12} className='footer-text'>
                <h3>Rakibul Islam Jisan</h3>
                <Col lg={5} className='last-link'>
                    <a><FaFacebook /></a>
                    <a><RiInstagramFill /></a>
                    <a><IoLogoTwitter /></a>
                </Col>
                <h6>&copy; Rakibul Islam Jisan. All rights reserved</h6>
            </Col>
        </Container>
    </section>
  )
}

export default Footer