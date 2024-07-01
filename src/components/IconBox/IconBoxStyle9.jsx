import React from 'react';
import { Link } from 'react-router-dom';
import { department_icon_1 } from '../../assets/allAssets';

export default function IconBoxStyle9({ title, iconUrl, href }) {
  return (
    <Link
      href={href}
      className="cs_iconbox cs_style_9 text-center cs_radius_20"
      // style={{ background: "linear-gradient(to right,#00A4FF, #87a8f1)" }}
    >
      <img src={department_icon_1} alt="Icon" />
      <h2 className="cs_iconbox_title cs_fs_20 cs_medium mb-0 para_color">
        {title}
      </h2>
    </Link>
  );
}
