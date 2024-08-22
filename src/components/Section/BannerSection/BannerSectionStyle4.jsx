import React from 'react';
import parser from 'html-react-parser';
import { useLocation } from 'react-router-dom';
import { why_us } from '../../../assets/allAssets';

export default function BannerSectionStyle4({ title, subTitle, center, }) {

  const location = useLocation();
  let textSource;

  if (location.pathname.includes('OurProcesses')) {
    textSource = "Elevate Your Practice with Xphyre Health’s Hassle-Free Billing & Coding Solutions";
  }
  else if (location.pathname.includes('OurSolutions')) {
    textSource = "Houston Trusts Xphyre for Streamlined Billing & Revenue Boosts";
  }
  else if (location.pathname.includes('ContactUs')) {
    textSource = "Get in Touch with Us—We're Here to Serve!";
  }
  else if (location.pathname.includes('TheXphyreEdge')) {
    textSource = "Houston Trusts Xphyre for Streamlined Billing & Revenue Boosts";
  }
  else if (location.pathname.includes('CAIC')) {
    textSource = "Optimize Your Clinic’s Success with Xphyre Health’s Expert Billing & Coding Solutions";
  }
  else if (location.pathname.includes('CA')) {
    textSource = "Elevate Productivity and Care: Precision Chart Auditing for Error-Free Compliance";
  }
  else if (location.pathname.includes('IEVS')) {
    textSource = "Avoid Denials & Delays with Instant Insurance Verification";
  }
  else if (location.pathname.includes('MARS')) {
    textSource = "Unlock Your Clinic’s Full Revenue Potential with Expert AR Solutions from Xphyre Health";
  }
  else if (location.pathname.includes('MB&CS')) {
    textSource = "Simplify Billing, Maximize Accuracy: Trusted Medical Billing & Coding Services";
  }
  else if (location.pathname.includes('OONNS')) {
    textSource = "Master Out-of-Network Negotiations with Xphyre Health’s Expert Solutions";
  }
  else if (location.pathname.includes('C&C')) {
    textSource = "Build Lasting Patient Relationships and Maximize Care Quality";
  }
  else if (location.pathname.includes('PBS')) {
    textSource = "Simplify Patient Billing and Boost Efficiency with Xphyre Health";
  }
  else if (location.pathname.includes('PARAS')) {
    textSource = "Streamline Authorizations and Enhance Patient Care with Xphyre Health";
  }
  else if (location.pathname.includes('HCS')) {
    textSource = "Maximize Healthcare Efficiency with Xphyre Health’s Proven Billing Solutions";
  }
  else if (location.pathname.includes('H')) {
    textSource = "Boost Your Practice’s Efficiency and Profits with Xphyre Health’s Expert Billing Solutions";
  }
  else if (location.pathname.includes('ER')) {
    textSource = "Enhance Emergency Room Efficiency with Xphyre Health’s Expert Billing Solutions";
  }
  else if (location.pathname.includes('MIEAS')) {
    textSource = "Affordable IT Solutions to Elevate Your Medical Practice";
  }
  else if (location.pathname.includes('UC')) {
    textSource = "Transform Your Urgent Care Billing with Xphyre Health’s Expert Solutions";
  }
  else if (location.pathname.includes('PP')) {
    textSource = "Manage Your Finances and Boost Revenue—Xphyre Health Billing Solutions Takes Care of Everything!";
  }



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
            WebkitFilter: 'blur(6px)',
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
            {parser(textSource)}
          </h2>
          {/* <p className="cs_banner_subtitle para_color cs_fs_20 m-0">
            {parser(subTitle)}
          </p> */}
        </div>
      </div>

    </div>
  );
}
