import React from 'react';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
// import SocialWidget from '../Widget/SocialWidget';
// import Newsletter from '../Widget/Newsletter';
import TextWidget from '../Widget/TextWidget';
// import footerLogo from '../../assets/footer_logo_bg.svg';
// import {logo} from '../../assets/allAssets';

const menuDataOne = [
  { title: 'Home', href: '/' },
  { title: 'Our Approach', href: '/OurApproach' },
  // { title: 'Our Solutions', href: '/OurSolutions' },
  { title: 'Credentialing and Contracting', href: '/C&C' },
  { title: 'Insurance Eligibility Verification ', href: '/IEVS' }
];

const menuDataTwo = [
  { title: 'Chart Auditing', href: '/CA' },
  { title: 'Medical Accounts Receivable', href: '/MARS' },
  { title: 'Medical Billing and Coding', href: '/MB&CS' },
  { title: 'Medical IT Equipment', href: '/MIEAS' },
  { title: 'Out of Networking Negotiation ', href: '/OONNS' }
];

const menuDataThree = [
  { title: 'Patient Billing', href: '/PBS' },
  { title: 'Prior and Retro Authorization', href: '/PARAS' },
  { title: 'Clinics and Imaging Centers', href: '/CAIC' },
  { title: 'Emergency Rooms', href: '/ER' },
  { title: 'Healthcare Systems', href: '/HCS' }
];

const menuDataFour = [
  { title: 'Hospitals', href: '/H' },
  { title: 'Private Practices', href: '/PP' },
  { title: 'Urgent Care', href: '/UC' },
  { title: 'Contact Us', href: '/ContactUs' },
  { title: 'The Xphyre Edge', href: '/TheXphyreEdge' }
];


export default function Footer() {
  return (
    <footer className="cs_footer cs_style_1 cs_white_color">
      <div
        className="cs_footer_logo_wrap cs_footer_background">
      </div>
      <div className="cs_footer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <TextWidget text="Xphyre Health" />
                <ContactInfoWidget />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataOne} />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataTwo} />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataThree} />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataFour} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
            <div className="cs_white_text" style={{fontSize:"0.8rem",paddingTop:"5px" ,  textAlign:"center"}}>
              Copyright © 2024 Xphyre Health. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  );
}
