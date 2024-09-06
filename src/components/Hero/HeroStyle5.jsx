import React from 'react';
import parse from 'html-react-parser';
import { useLocation } from 'react-router-dom';
import ContactButton from '../Button/ContactButton';
import {
  our_process,
  our_solutions,
  contact_us,
  CA,
  CandC,
  HOS,
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
  UC,
  TXE
} from '../../assets/allAssets';


export default function HeroStyle5({ title, detail, p, H, imgUrl, funfactList }) {
  const location = useLocation();
  const specificRoutes1 = ['/HCS', '/CAIC', '/ER', '/H', '/PP', '/UC'];
  const specificRoutes2 = ['/C&C', '/IEVS', '/CA', '/MARS', '/MB&CS', '/MIEAS', '/OONNS', '/PBS', '/PARAS',];

  let imageSource;

  if (location.pathname.includes('OurApproach')) {
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
    imageSource = HOS;
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
    <section className="cs_hero cs_style_2 cs_type_1">
      <div className="container">
        <div className="cs_hero_text">
          <h3 className="cs_hero_title cs_white_color cs_fs_60 ">
            {parse(title)}
          </h3>
          <div className="cs_hero_text_in" style={{ display: "flex", flexDirection: "column" }}>
            <p className="cs_hero_subtitle cs_white_color ">{detail}</p>
            <div className='c_btn_1' style={{ position: "relative" }}>
              {specificRoutes1.includes(location.pathname) && (
                <ContactButton buttonName="Call Us Today" />
              )}
            </div>
          </div>
          {specificRoutes2.includes(location.pathname) && (
            <>
              <div className='c_btn_2' style={{ position: 'relative'}}>
                <ContactButton buttonName="Call Us Today" />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="cs_hero_img">
        <img src={imageSource} alt="Hero" />
      </div>
      <div className='funfactres'>
        {specificRoutes1.includes(location.pathname) && (
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="cs_hero_funfact text-center">
                  <div style={{ display: "flex", flexDirection: 'column', alignContent: "center", justifyContent: "center" }}>
                    <h4 className='cs_white_color'>{H}</h4>
                    <p className='cs_white_color'>{p}</p>
                  </div>
                  {funfactList?.map((item, index) => (
                    <div style={{ position: "relative", top: "0.5rem" }} className="cs_hero_funfact_col" key={index}>
                      <h3 className="cs_white_color cs_fs_72" style={{fontSize:"3rem"}}>{item.number}</h3>
                      <p className="cs_white_color mb-0">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </section>
  );
}
