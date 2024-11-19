import React, { useEffect } from 'react'
import "./skillreuse.css"
import { Col, Row } from 'react-bootstrap'
import Skillreee from '../skillreee/Skillreee'
import { FaCircleChevronRight } from "react-icons/fa6"
import Aos from "aos"
import "aos/dist/aos.css"

const Skillreuse = (props) => {
  useEffect(()=>{
    Aos.init({
        duration: 1500
    });
},[])
  return (
    <Col className='skitto' data-aos="flip-down" lg={5} md={12} sm={12}>
        <h3>{props.head}</h3>
        <Row className='justify-content-between skitto-skills'>
            <Skillreee sign={<FaCircleChevronRight />} s_name="HTML"/>
            <Skillreee sign={<FaCircleChevronRight />} s_name="CSS"/>
            <Skillreee sign={<FaCircleChevronRight />} s_name="Javascript"/>
            <Skillreee sign={<FaCircleChevronRight />} s_name="React"/>
            <Skillreee sign={<FaCircleChevronRight />} s_name="Tailwind" />
            <Skillreee sign={<FaCircleChevronRight />} s_name="Bootstrap" />
            
        </Row>
    </Col>
  )
}

export default Skillreuse