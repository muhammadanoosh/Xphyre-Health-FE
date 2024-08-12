import React from 'react';
import IconBoxStyle13 from '../../IconBox/IconBoxStyle13';

export default function FeaturesSectionStyle5({ sectionTitle, data }) {
  return (
    <div className="cs_shape_wrap">
      <div className="cs_shape_1" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <h2 className="cs_section_title cs_fs_72 m-0 cs_main_heading_color">{sectionTitle}</h2>
        </div>
        <div className="cs_height_72 cs_height_lg_50" />
        <div className="cs_random_features">
          {data?.map((item, index) => (
            <div className="cs_random_features_col" key={index}>
              <IconBoxStyle13 {...item} />
            </div>
          ))}
        <a href="/ContactUs">
          <button className="cs_btn cs_style_1" type="submit" style={{ position: "relative", top: "2rem" }}>
            <span>Let’s Talk</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </a>
      </div>
        </div>
    </div>
  );
}
