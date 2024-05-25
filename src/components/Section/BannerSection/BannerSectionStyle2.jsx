import React from 'react';
import parse from 'html-react-parser';
import { banner2 } from '../../../assets/allAssets';




export default function BannerSectionStyle2({ title, subTitle }) {
  return (
    <div className="container">
      <div
        className="cs_banner cs_style_2 cs_radius_25 cs_bg_filed"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="cs_section_heading cs_style_1" style={{position:"relative"}}>
          <h2 className="cs_section_title cs_fs_72 m-0 cs_main_heading_color">
            {title}
          </h2>
          <div className="cs_height_22" />
          <p className="m-0 para_colors cs_fs_20 cs_medium" >
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
