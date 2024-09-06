import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle4 from '../../IconBox/IconBoxStyle4';
import { ourApproach1 } from '../../../Constants/constants';

export default function DepartmentSectionStyle1({
  sectionTitle,
  sectionTitleUp,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xl-4">
          <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
          <a href="/ContactUs">
              <button className="cs_btn cs_style_1" type="submit" style={{ position: "relative", top: "2rem" }}>
                <span>Schedule Your Free Consultation</span>
                <i>
                  <img src="/images/icons/arrow_white.svg" alt="Icon" />
                  <img src="/images/icons/arrow_white.svg" alt="Icon" />
                </i>
              </button>
            </a>
          <Spacing md="72" lg="50" />
        </div>
        {ourApproach1?.map((item, index) => (
          <div className="col-md-6 col-xl-4" key={index}>
            <IconBoxStyle4 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
