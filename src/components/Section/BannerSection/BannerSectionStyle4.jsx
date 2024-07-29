import React from 'react';
import parser from 'html-react-parser';
import { why_us } from '../../../assets/allAssets';

export default function BannerSectionStyle4({
  title,
  subTitle,
  center,
}) {
  return (
    <div className="container">
    <div
  className={`cs_banner cs_style_4 cs_bg_filed overflow-hidden ${center ? 'text-center' : ''}`}
  style={{ position: 'relative' }}
>
  <div
    style={{
      backgroundImage: `url(${why_us})`,
      filter: 'blur(8px)',
      WebkitFilter: 'blur(3px)',
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  ></div>
  <div style={{ position: "relative", top: "10rem" }}>
    <h2 className="cs_banner_title cs_main_heading_color cs_fs_72">
      {parser(title)}
    </h2>
    <p className="cs_banner_subtitle para_color cs_fs_20 m-0">
      {parser(subTitle)}
    </p>
  </div>
</div>

    </div>
  );
}
