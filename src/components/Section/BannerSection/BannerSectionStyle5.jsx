import React from 'react';
import parse from 'html-react-parser';
import {BannerBack} from '../../../assets/allAssets';

export default function BannerSectionStyle5({
  bgUrl,
  imgUrl,
  title,
  subTitle,
}) {
  return (
    <section
      className="cs_banner cs_style_5 cs_bg_filed"
      style={{ backgroundImage: `url(${BannerBack})` }}
      // style={{ background: "linear-gradient(to right,#00A4FF, #87a8f1)" }}

    >
      <div className="cs_banner_img">
        <img src={imgUrl} alt="Banner" />
      </div>
      <div className="container">
        <div className="cs_banner_text">
          <h2 className="cs_banner_title cs_fs_72">{parse(title)}</h2>
        </div>
      </div>
    </section>
  );
}
