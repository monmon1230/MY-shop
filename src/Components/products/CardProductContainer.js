import React from 'react'
import ProductCard from './ProductCard';
import { Row,Container, } from 'react-bootstrap';
import SutTitle from '../../Page/Home/Uitily/SubTitle';

const CardProductContainer = ({title,btntitle,PathText}) => {
  return (
    <Container>
    <SutTitle title={title} btntitle={btntitle} PathText={PathText} />
    <Row className="my-2 d-flex justify-content-between ">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </Row>
  </Container>
  )
}

export default CardProductContainer