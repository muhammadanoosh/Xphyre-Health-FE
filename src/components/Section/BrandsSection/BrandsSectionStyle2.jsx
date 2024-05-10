import React from 'react';
import BrandsCarousel from '../../Slider/BrandsCarousel';
import { brandData } from '../../../Constants/constants';


export default function BrandsSectionStyle2() {
  return <BrandsCarousel data={brandData} />;
}
