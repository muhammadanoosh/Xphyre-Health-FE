import React from 'react';
import Spacing from '../../Spacing';
import SectionHeading from '../../SectionHeading';
import TestimonialCarousel from '../../Slider/TestimonialCarousel';
import { testimonialData } from '../../../Constants/constants';


export default function TestimonialSectionStyle2({
  sectionTitle,
  sectionTitleUp,
}) {
  return (
    <div className="container">
      <div className="position-relative">
        <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
        <Spacing md="72" lg="50" />
        <TestimonialCarousel data={testimonialData} />
      </div>
    </div>
  );
}
