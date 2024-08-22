import { Icon } from '@iconify/react';
import React from 'react';

export default function ContactInfoWidget() {
  return (
    <ul className="cs_contact_widget">
      <li>
        <i className="cs_accent_bg">
          <Icon icon="ep:location" />
        </i>
        Suite 350, Houston,TX. 77084
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>
        855-585-3935
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
        info@xphyrehealth.com
      </li>
      <li>
        <a href="/ContactUs">
          <button className="cs_btn cs_style_1" type="submit" style={{ position: "relative", top: "2rem" ,marginBottom:"2rem" }}>
            <span>Contact Us Now</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </a>
      </li>
    </ul>
  );
}
