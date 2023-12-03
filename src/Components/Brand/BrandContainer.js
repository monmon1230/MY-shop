import React from 'react'
import { Row,Container, } from 'react-bootstrap';
import brand1 from "../../Images/brand1.png";
import brand2 from "../../Images/brand2.png";
import brand3 from "../../Images/brand3.png";
import BrandCard from './BrandCard';

const BrandContainer = () => {
  return (
    <Container>
    <div className='admin-content-text mt-2'>كل الماركات</div>
    <Row className="my-1 d-flex justify-content-between ">
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        
    </Row>
  </Container>
  )
}

export default BrandContainer;