import React from 'react';

export default function IconBoxStyle1({ title, detail, iconUrl }) {
  return (
    <div className="cs_iconbox cs_style_1 cs_shadow_1 cs_radius_15">
      <div style={{display:"flex",justifyContent:"center", alignItems:"center"}} className="cs_iconbox_top">
        <div style={{display:"flex",justifyContent:"center", alignItems:"center"}} className="cs_iconbox_icon cs_radius_15 cs_accent_bg cs_center">
        <h2 className="cs_iconbox_title cs_white_color cs_medium cs_fs_18 m-0">{title}</h2>
        </div>
      </div>
      <p className="cs_iconbox_text">{detail}</p>
    </div>
  );
}
