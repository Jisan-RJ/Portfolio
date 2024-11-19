import React from 'react'
import { Col } from 'react-bootstrap'
import "./aboutreuse.css"


const Aboutreuse = (props) => {
  return (
    <Col lg={4} md={4} className='about-box' data-aos="fade-left">
        <a data-aos="fade-left">{props.logo}</a>
        <h4 data-aos="fade-left">{props.title}</h4>
        <h5 data-aos="fade-left">{props.sub}</h5>
    </Col>
  )
}

export default Aboutreuse