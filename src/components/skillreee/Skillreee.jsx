import React from 'react'
import "./skillreee.css"
import { Col } from 'react-bootstrap'

const Skillreee = (props) => {
  return (
    <Col className='b_box' lg={6} md={6} sm={6}>
        <a>{props.sign}</a>
        <h3>{props.s_name}</h3>
    </Col>
  )
}

export default Skillreee