import React from 'react';
import IconBoxStyle11 from '../../IconBox/IconBoxStyle11';
import Spacing from '../../Spacing';

export default function ContactInfoSection({ sectionTitle }) {
  return (
    <div className="container">
      <h2 className="cs_fs_72 mb-0 cs_main_heading_color">{sectionTitle}</h2>
      <Spacing md="70" lg="50" />
      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Phone"
            subTitle="832-631-6660"
            iconSrc="/images/contact/icon_1.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Email"
            subTitle="info@xphyrehealth.com"
            iconSrc="/images/contact/icon_2.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Location"
            subTitle="2717 Commercial Center Blvd, Suite E200, Katy, Texas, 77494"
            iconSrc="/images/contact/icon_3.svg"
          />
        </div>
      </div>
      <Spacing md="35" />
      {/* Start Google Map */}
      <div className="cs_map">
        <iframe
          id="map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.7212164427715!2d-95.78308282481836!3d29.739515381986073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d06aa750dbad%3A0x938173e5bb709c08!2s2717%20Commercial%20Center%20Blvd%2C%20Suite%20E200%2C%20Katy%2C%20TX%2077494!5e0!3m2!1sen!2sus!4v1694045232568!5m2!1sen!2sus"
          allowFullScreen
        />
      </div>

      {/* End Google Map */}

    </div>
  );
}
