import React from 'react';
import parser from 'html-react-parser';

export default function IconBoxStyle6({ title, subTitle, iconUrl }) {
  return (
    <div className="cs_iconbox cs_style_6">
      <div className=" line_style"></div>
      <h2 className="cs_iconbox_title cs_fs_32 cs_semibold cs_main_heading_color ">{parser(title)}</h2>
      <p className="cs_iconbox_subtitle m-0 para_color">{parser(subTitle)}</p>
    </div>
  );
}
