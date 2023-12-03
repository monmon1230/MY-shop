import React from 'react'
import { Container,Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';
import Clothe from "../../Images/clothe.png";
import cat2 from "../../Images/cat2.png";
import laptop from "../../Images/labtop.png";
import sale from "../../Images/sale.png";
import pic from "../../Images/pic.png";

const CategoryContainer = () => {
  return (
    <Container>
    <div className='admin-content-text mt-2'>كل التصنيفات</div>
    <Row className="my-2 d-flex justify-content-between ">
      <CategoryCard title=" اجهزه منزليه" img={Clothe} background="gray" />
      <CategoryCard title="اجهزه منزليه" img={cat2} background="red" />
      <CategoryCard title="اجهزه منزليه" img={laptop} background="yellow" />
      <CategoryCard title="اجهزه منزليه" img={sale} background="black" />
      <CategoryCard title=" اجهزه منزليه" img={Clothe} background="blue" />
      <CategoryCard title="اجهزه منزليه" img={pic} background="green" />
      <CategoryCard title=" اجهزه منزليه" img={Clothe} background="gray" />
      <CategoryCard title="اجهزه منزليه" img={cat2} background="red" />
      <CategoryCard title="اجهزه منزليه" img={laptop} background="yellow" />
      <CategoryCard title="اجهزه منزليه" img={sale} background="black" />
      <CategoryCard title=" اجهزه منزليه" img={Clothe} background="blue" />
      <CategoryCard title="اجهزه منزليه" img={pic} background="green" />
      <CategoryCard title=" اجهزه منزليه" img={Clothe} background="gray" />
      <CategoryCard title="اجهزه منزليه" img={cat2} background="red" />
      <CategoryCard title="اجهزه منزليه" img={laptop} background="yellow" />
      <CategoryCard title="اجهزه منزليه" img={sale} background="black" />
      <CategoryCard title=" اجهزه منزليه" img={Clothe} background="blue" />
      <CategoryCard title="اجهزه منزليه" img={pic} background="green" />
      <CategoryCard title=" اجهزه منزليه" img={Clothe} background="gray" />
      <CategoryCard title="اجهزه منزليه" img={cat2} background="red" />
      <CategoryCard title="اجهزه منزليه" img={laptop} background="yellow" />
      <CategoryCard title="اجهزه منزليه" img={sale} background="black" />
      <CategoryCard title=" اجهزه منزليه" img={Clothe} background="blue" />
      <CategoryCard title="اجهزه منزليه" img={pic} background="green" />
    </Row>
  </Container>
  )
}

export default CategoryContainer