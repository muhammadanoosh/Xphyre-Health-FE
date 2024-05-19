import React from 'react';
import TextWidget from '../Widget/TextWidget';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import SocialWidget from '../Widget/SocialWidget';
import MenuWidget from '../Widget/MenuWidget';
import NewsletterStyle4 from '../Widget/NewsletterStyle4';
import {logo} from '../../assets/allAssets';

const menuDataOne = [
  { title: 'About', href: '/about' },
  { title: 'Our Departments', href: '/departments' },
  { title: 'Our Business', href: '/doctors' },
  { title: 'How We Help', href: '/' },
];

const menuDataTwo = [
  { title: 'Our Services', href: '/blog' },
  { title: 'Our Expertise', href: '/' },
  { title: 'Contact Us', href: '/' },
];
const menuDataThree = [
  { title: 'Privacy Policy', href: '/' },
  { title: 'Terms and Conditions', href: '/blog' },
];

export default function FooterStyle4() {
  return (
    <footer className="cs_footer cs_style_2 cs_type_1 cs_accent_bg cs_white_color">
      <div className="container">
        <NewsletterStyle4
          title="Be Our Subscribers"
          subTitle="Join our newsletter to keep up to date <br />health from our experts"
        />
        <div className="cs_footer_in">
          <div className="cs_footer_col">
            <div className="cs_footer_item">
             <logo/>
              {/* <TextWidget
                logoUrl={Logo}
                text="Xphyre Health"
              /> */}
              <ContactInfoWidget />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataOne} />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataTwo} />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataThree} />
              <SocialWidget />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom">
        <div className="container">
          <div className="cs_copyright">
            Copyright © 2024 Xphyre Health. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
