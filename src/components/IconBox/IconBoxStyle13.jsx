import React from 'react';
import {compassion} from '../../assets/allAssets';


export default function IconBoxStyle13({ title, description, iconUrl }) {
  return (
    <div className="cs_iconbox cs_style_13 text-center cs_radius_25">
      <div className="cs_iconbox_icon">
        <div className="cs_iconbox_icon_in cs_accent_bg cs_center">
          <img src={compassion} alt="Icon" />
        </div>
      </div>
      <div className="cs_iconbox_info">
        <h2 className="cs_iconbox_title cs_fs_40 cs_main_heading_color">{title}</h2>
        <p className="cs_iconbox_subtitle mb-0 para_color">{description}</p>
      </div>
    </div>
  );
}
