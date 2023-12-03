import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SerachCountResult from "../Home/Uitily/SerachCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../Home/Uitily/SideFilter";
import CardProductContainer from "../../../src/Components/products/CardProductContainer";
import Pagination from "../../Page/Home/Uitily/pagination";

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        {" "}
        <SerachCountResult title="400 نتيجه بحث" />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11"><CardProductContainer title="" btntitle=''/> </Col>
        </Row>
        <Pagination/>
      </Container>
    </div>
  );
};

export default ShopProductsPage;
