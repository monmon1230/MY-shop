import React from 'react';
import { Col } from 'react-bootstrap';

 const CategoryCard = ({background,img,title}) => {
  return (
    <Col 
    xs='6'
    sm='6'
    md='4'
    lg='2'
    className='my-4 d-flex justify-content-center'>
    <div className='allCard mb-3'>
    <div
    className='categoty-card mb-3'
    style={{backgroundColor:`${background}`}}></div>{" "}
    <img alt='zcv' src={img} className='categoty-card-img'/>
    <p className='categoty-card-text '>{title}</p>
    </div>
    </Col>


  )
}
export default CategoryCard;