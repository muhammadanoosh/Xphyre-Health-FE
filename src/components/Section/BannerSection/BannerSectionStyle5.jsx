import React from 'react';
import parse from 'html-react-parser';
import { useLocation } from 'react-router-dom';
import { BannerBack } from '../../../assets/allAssets';
import {
  our_process,
  our_solutions,
  contact_us,
  CA,
  CandC,
  H,
  HCS,
  CAIC,
  ER,
  IE,
  MARS,
  MBACS,
  OONNS,
  PARAS,
  PBS,
  MIEAS,
  PP,
  UC
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
    imageSource = our_solutions;
  }
  else if (location.pathname.includes('CAIC')) {
    imageSource = CAIC;
  }
  else if (location.pathname.includes('CA')) {
    imageSource = CA;
  }
  else if (location.pathname.includes('IEVS')) {
    imageSource = IE;
  }
  else if (location.pathname.includes('MARS')) {
    imageSource = MARS;
  }
  else if (location.pathname.includes('MB&CS')) {
    imageSource = MBACS;
  }
  else if (location.pathname.includes('OONNS')) {
    imageSource = OONNS;
  }
  else if (location.pathname.includes('C&C')) {
    imageSource = CandC;
  }
  else if (location.pathname.includes('PBS')) {
    imageSource = PBS;
  }
  else if (location.pathname.includes('PARAS')) {
    imageSource = PARAS;
  }
  else if (location.pathname.includes('HCS')) {
    imageSource = HCS;
  }
  else if (location.pathname.includes('H')) {
    imageSource = H;
  }
  else if (location.pathname.includes('ER')) {
    imageSource = ER;
  }
  else if (location.pathname.includes('MIEAS')) {
    imageSource = MIEAS;
  }
  else if (location.pathname.includes('UC')) {
    imageSource = UC;
  }
  else if (location.pathname.includes('PP')) {
    imageSource = PP;
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
