import React  from 'react'
import "./skills.css"
import { Col, Container, Row } from 'react-bootstrap'
import Skillreuse from '../skillreuse/Skillreuse'


const Skills = () => {
 
  return (
    <section className='skills'>
        <Container>
            <div className='s-text'>
            <h2>Skills</h2>
            <p>My Technical Level</p>
            </div>
            <Col className='skill-boxes' lg={10} md={10} sm={10}>
                <Row className='justify-content-between'>
                   <Skillreuse  head="Frontend developer" />
                   <Skillreuse  head="Backend developer" />
                </Row>
            </Col>
        </Container>
    </section>
  )
}

export default Skills