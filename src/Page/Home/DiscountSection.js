import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import laptops  from "../../Images/laptops.png";

const DiscountSection = () => {
  return (
<Container>
    <Row className="discount-backcolor my-3 mx-2 d-flelx text-center align-items-center">
        <Col sm="6">
        <div className='discount-title'>
            خصم 50% على اجهزه الابتوب
        </div>
        </Col>
        <Col sm="6">
            <img className='discount-img' src={laptops} alt=''/>


        </Col>


    </Row>

</Container>
  )
}

export default DiscountSection