import React from 'react';
import { middle_banner } from '../../../assets/allAssets';
import { useLocation } from 'react-router-dom';


export default function BannerSectionStyle2() {

  const location = useLocation();
  let textSource;

  
  if (location.pathname.includes('OurApproach')) {
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
  else if (location.pathname.includes("/")) {
    textSource = "Transform Your Practice with Effortless Billing Solutions from Xphyre Health";
  }

  return (
    <div className="container">
      <div
        className="cs_banner cs_style_2 cs_radius_25 cs_bg_filed"
        style={{ backgroundImage: `url(${middle_banner})` }}
      >
        <div className="cs_section_heading cs_style_1">
          <h2 className="cs_section_title cs_fs_72 m-0 cs_main_heading_color">
            {textSource}
          </h2>
          <div className="cs_height_22" />
          {/* <p className="m-0 para_color cs_fs_20 cs_medium">
            {parse(subTitle)}
          </p> */}
        </div>
      </div>
    </div>
  );
}
