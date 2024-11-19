import React, { useEffect } from 'react'
import "./project.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { Col, Container } from 'react-bootstrap'
import first from "../../assets/first.png"
import second from "../../assets/second.png"
import third from "../../assets/third.png"
import four from "../../assets/four.png"

const Project = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1500
        });
    },[])
  return (
    <section className='project'>
        <Container>
            <div className='project-text'>
                <h2>My Project</h2>
                <p>Most Recent work</p>
            </div>
            <div className='fun'>
            <Col lg={{span:4, offset:1}} md={{span:4, offset:1}} className='first'>
                <div data-aos="fade-right" className='project-box left-side'>
                    <img src={first}></img>
                </div>
            </Col>
            <Col className='second' lg={{span:4 , offset: 8}} md={{span:4,offset:8}} >
                <div data-aos="fade-left" className='project-box right-side'>
                    <img src={second}></img>
                </div>
            </Col>
            <Col data-aos="fade-right" className='third' lg={{span:4, offset:1}} md={{span:4, offset:1}}>
            <div className='project-box left-side'>
                <img src={third}></img>
            </div>
            </Col>
            <Col className='fourth' lg={{span:4, offset:8}} md={{span:4,offset:8}}>
            <div data-aos="fade-left" className='project-box right-side'>
                <img src={four}></img>
            </div>
            </Col>
            </div>
        </Container>
    </section>
  )
}

export default Project