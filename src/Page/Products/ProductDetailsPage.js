import React from 'react';
import { Container } from 'react-bootstrap';
import ProductsDetails from '../../Components/products/ProductsDetails';
import CategoryHeader from '../../Components/Category/CategoryHeader';


const ProductDetailsPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
    <CategoryHeader/>
    <Container>
        <ProductsDetails/>
    </Container>
    </div>
  )
}

export default ProductDetailsPage;