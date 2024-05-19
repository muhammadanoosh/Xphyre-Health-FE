import React from 'react';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import TextWidget from '../Widget/TextWidget';
import { HashLink as Link } from 'react-router-hash-link';
import footerLogo from '../../assets/footer_logo_bg.svg';
import {logo} from '../../assets/allAssets';

const menuDataOne = [
  { title: 'About', href: '#about' },
  { title: 'Our Departments', href: '#our-departments' },
  { title: 'Our Business', href: '#our-business' },
];

const menuDataTwo = [
  { title: 'Our Services', href: '#our-services' },
  { title: 'Our Expertise', href: '#our-expertise' },
  { title: 'How We Help', href: '#how-we-help' },
];

export default function Footer() {
  return (
    <footer className="cs_footer cs_style_1 cs_white_color">
      <div
        className="cs_footer_logo_wrap cs_footer_background"
      >
        <div
          className="cs_footer_brand"
          style={{ backgroundImage:  `url(${footerLogo})` }}
        >
          <img
            src={logo}
            alt="Logo Icon"
            className="cs_footer_brand_icon"
          />
          {/* <h2 className="cs_footer_brand_text">Xphyre Health</h2> */}
        </div>
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
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <Newsletter
                  title="Be Our Subscribers"
                  subTitle="To get the latest news about health from our experts"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <SocialWidget />
            <div className="cs_white_text">
              Copyright © 2024 Pro Health. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
