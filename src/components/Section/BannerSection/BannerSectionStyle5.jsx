import React from 'react';
import parse from 'html-react-parser';
import { useLocation } from 'react-router-dom';
import { BannerBack } from '../../../assets/allAssets';
import {
  our_process,
  our_solutions,
  contact_us,
  TXE
} from '../../../assets/allAssets';

export default function BannerSectionStyle5({ title, subTitle }) {

  const location = useLocation();
  let imageSource;

  if (location.pathname.includes('OurProcesses')) {
    imageSource = our_process;
  }
  else if (location.pathname.includes('OurSolutions')) {
    imageSource = our_solutions;
  }
  else if (location.pathname.includes('ContactUs')) {
    imageSource = contact_us;
  }
  else if (location.pathname.includes('TheXphyreEdge')) {
    imageSource = TXE;
  }
 
  



  return (
    <section
      className="cs_banner cs_style_5 cs_bg_filed"
      style={{ backgroundImage: `url(${BannerBack})` }}
    // style={{ background: "linear-gradient(to right,#00A4FF, #87a8f1)" }}

    >
      <div className="cs_banner_img">
        <img src={imageSource} alt="Banner" />
      </div>
      <div className="container">
        <div className="cs_banner_text">
          <h2 className="cs_banner_title cs_fs_72">{parse(title)}</h2>
          {/* <p className="cs_banner_subtitle cs_fs_20 mb-0 cs_heading_color">
            {parse(subTitle)}
          </p> */}
        </div>
      </div>
    </section>
  );
}
