import React from 'react';

import Slider from '../../Components/Home/Slider';
import Homecategory from './Homecategory';
import CardProductContainer from '../../Components/products/CardProductContainer';
import DiscountSection from './DiscountSection';
import BrandFuteur from '../../Components/Brand/BrandFuteur';


export const HomePage = () => {
  return (
    <div className='font' style={{minHeight:'670px'}}>
    <Slider/>
    <Homecategory/>
    <CardProductContainer title="ألاكثر مبيعا" btntitle="المزيد" PathText="/Products"/>

    <DiscountSection/>
    <CardProductContainer  title="احدث الازياء " btntitle="المزيد" PathText="/Products"/>
    <BrandFuteur  title="اشهر الماركات " btntitle="المزيد" />
    </div>
  )
}

export default HomePage;
