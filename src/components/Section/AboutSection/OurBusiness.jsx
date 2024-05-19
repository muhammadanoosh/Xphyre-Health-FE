import React from 'react';
import { ourBusiness } from '../../../assets/allAssets';

export default function OurBusiness({ title, subTitle }) {
  return (
    <section className="cs_shape_wrap">
      <div className="cs_shape_1 cs_position_5" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 offset-lg-1">
            <img src={ourBusiness} alt={title} />
          </div>
          <div className="col-lg-4">
            <div className="cs_section_heading cs_style_1">
              <h2 className="cs_section_title cs_main_heading_color cs_fs_72 m-0">{title}</h2>
              <div className="cs_height_54 cs_height_xl_30" />
              <p className="m-0 para_color">{subTitle}</p>
              <div className="cs_height_120 cs_height_xl_60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
