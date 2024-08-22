import React from 'react';

export default function IconBoxStyle10({ title, description }) {
  return (
    <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg text-center" style={{height:"20rem"}}>
      <h2 className="cs_iconbox_title cs_main_heading_color" style={{fontSize:"2rem"}}>{title}</h2>
      <p className="cs_iconbox_subtitle mb-0 para_color">{description}</p>
    </div>
  );
}
